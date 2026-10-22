---
sidebar_position: 2
title: Supuestos y fuentes
---

# Supuestos y fuentes

## Supuestos de volumen (decisión A)

Son propuestas del autor para dimensionar, **no datos medidos**. Se reemplazan por mediciones reales después de tres meses en producción.

| Supuesto | Valor |
|---|---|
| Solicitudes al API Gateway | 5 millones al mes |
| Logs en CloudWatch | 100 GB al mes, con retención de 1 año |
| Tráfico por la salida a internet (NAT) | 500 GB al mes en producción y 50 GB en pruebas |
| Base de datos | 100 GB en producción, 50 GB en pruebas y 20 GB en desarrollo |
| Imágenes nuevas escaneadas | 30 al mes |
| Horas | 8.760 al año en producción y pruebas; 2.640 en desarrollo |

## Tamaños (decisión B)

| Entorno | Cómputo | Base de datos |
|---|---|---|
| Producción | 2 tareas Fargate ARM de 1 vCPU y 2 GB, en 2 zonas | `db.m7g.large` Multi-AZ |
| Pruebas | 1 tarea de 0,5 vCPU y 1 GB | `db.m7g.large` en una zona |
| Desarrollo | 1 tarea de 0,25 vCPU y 0,5 GB | `db.t4g.medium` en una zona |

## Fuentes y método

Los precios son de la región `sa-east-1` y salen de los datos de la **AWS Pricing Calculator**, la fuente oficial de AWS para estimar costos, consultados el 21 de octubre de 2026:

- Calculadora: [https://calculator.aws](https://calculator.aws)
- Fargate (precio de referencia de EE. UU.): [https://aws.amazon.com/fargate/pricing/](https://aws.amazon.com/fargate/pricing/)
- Soporte de AWS: [https://aws.amazon.com/premiumsupport/pricing/](https://aws.amazon.com/premiumsupport/pricing/)

Las páginas de precios de AWS cargan las tarifas por región con JavaScript. Por eso se leyeron los archivos de datos que usa la calculadora.

| Nivel de confianza | Servicios | Cómo se verificó |
|---|---|---|
| Etiquetado en los datos | RDS PostgreSQL (instancias) | El archivo identifica la instancia, la zona y la generación |
| Por coincidencia de valores | Fargate, NAT, ALB, API Gateway, KMS, Secrets Manager, WAF, CloudWatch, Inspector, S3 y almacenamiento de RDS | El archivo no trae etiquetas: cada precio se identificó comparándolo con el precio de EE. UU. publicado por AWS |
| Por confirmar | Endpoints de VPC de interfaz (la calculadora muestra 0,010, 0,0151 y 0,021) | Se usó 0,0151 |

:::caution Pendiente
Antes de presentar la cifra como definitiva, rehacer la estimación en `calculator.aws` con los mismos supuestos y comparar contra este total.
:::
