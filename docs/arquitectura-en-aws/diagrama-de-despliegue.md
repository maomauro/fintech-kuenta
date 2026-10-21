---
sidebar_position: 1
title: Diagrama de despliegue
---

# Diagrama de despliegue

Cómo se ve Kuenta en AWS: **dónde corre cada pieza** y por dónde entra y sale el tráfico. Es la vista de despliegue de C4 del monolito modular definido en el [Módulo 5](../arquitectura-aplicacion/diagramas-c4.md).

```mermaid
flowchart TB
  cli["Clientes<br/>app y web"]
  term["Terminales de<br/>corresponsales"]
  ter["Terceros<br/>Bre-B, listas, redes, proveedor"]
  subgraph AWS["AWS · cuenta de produccion"]
    r53["Route 53"]
    waf["WAF"]
    apigw["API Gateway<br/>REST API con mTLS"]
    subgraph REG["Region Sao Paulo · sa-east-1"]
      subgraph VPC["VPC"]
        alb["Balanceador interno<br/>ALB"]
        subgraph AZA["Zona de disponibilidad A"]
          appa["ECS Fargate<br/>tarea del monolito"]
          dba[("RDS PostgreSQL<br/>principal")]
          nata["NAT"]
        end
        subgraph AZB["Zona de disponibilidad B"]
          appb["ECS Fargate<br/>tarea del monolito"]
          dbb[("RDS PostgreSQL<br/>standby sincronico")]
          natb["NAT"]
        end
      end
      s3[("S3<br/>evidencias de identidad")]
      kms["KMS y<br/>Secrets Manager"]
      obs["CloudWatch y<br/>CloudTrail"]
    end
  end
  cli --> r53
  term --> r53
  r53 --> waf --> apigw
  apigw -->|enlace privado| alb
  alb --> appa
  alb --> appb
  appa --> dba
  appb --> dba
  dba -.->|replicacion| dbb
  appa --> nata
  appb --> natb
  nata --> ter
  natb --> ter
  appa -.-> s3
  appa -.-> kms
  appa -.-> obs
```

## Cómo leerlo

- **Entrada única:** todo el tráfico de clientes y terminales pasa por WAF y API Gateway. Los terminales se identifican con certificado (mTLS) en una ruta aparte.
- **Dos zonas de disponibilidad:** el monolito corre en al menos dos tareas y la base de datos tiene un standby en la otra zona. Si cae una zona, la otra sigue.
- **Subredes:** el balanceador, la aplicación y la base de datos viven en subredes privadas sin dirección pública. Solo las puertas NAT tienen salida a internet, para llegar a los terceros.
- **Servicios de apoyo** (S3, KMS, Secrets Manager, CloudWatch, CloudTrail) son regionales y se acceden con *endpoints* privados de la VPC.
- Los terceros se muestran como un solo bloque; el detalle está en el [mapa de integraciones](../integracion-y-apis/mapa-de-integraciones.md).

Copia editable en draw.io: `modelos/despliegue/despliegue-aws.drawio`.
