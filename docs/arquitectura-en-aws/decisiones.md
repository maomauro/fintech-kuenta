---
sidebar_position: 2
title: Decisiones de despliegue
---

# Decisiones de despliegue

Decisiones A a D del Módulo 8, con lo verificado en fuentes oficiales.

## A. Región y cuentas

**Decisión:** región principal **São Paulo (`sa-east-1`)**; cuentas separadas de producción, pruebas y seguridad y registros; respaldos copiados a una segunda región. El plan de recuperación se afina en el Módulo 10.

| Dato verificado | Fuente |
|---|---|
| Colombia no tiene región de AWS. La Local Zone de Bogotá está anunciada, sin servicios listados | [Local Zones](https://aws.amazon.com/about-aws/global-infrastructure/localzones/locations/) |
| Chile tiene región anunciada, sin fecha | [Regiones](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/) |
| São Paulo viene habilitada por defecto; México Central exige activarla | [Regiones opcionales](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-regions.html) |
| México Central tiene un límite por defecto de 2.500 peticiones por segundo en API Gateway (hoy sobra frente a 50) | [Cuotas](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html) |
| La Circular 005 de 2019 no exige datos en Colombia, pero sí informar la región (6.3), verificar jurisdicciones equivalentes (3.7) y avisar 15 días antes | [Texto](https://normativa.colpensiones.gov.co/colpens/docs/circular_superfinanciera_0005_2019.htm) |

Descartadas: México Central (más cerca, pero con activación previa y menor cuota) y N. Virginia (más lejos).

## B. Cómputo

**Decisión:** el monolito corre en **contenedores con ECS Fargate**, mínimo dos tareas en dos zonas, detrás de un balanceador interno.

Fargate evita administrar servidores: se define CPU, memoria, red y permisos, y cada tarea tiene su propia frontera de aislamiento ([doc](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html)). Descartadas: EKS, que pide demasiada operación para un solo monolito, y EC2, que obliga a parchar y escalar servidores.

## C. Base de datos

**Decisión:** **RDS para PostgreSQL en Multi-AZ** (instancia principal con standby sincrónico en otra zona), un esquema por módulo, respaldos automáticos y restauración a un instante.

- El standby se replica sincrónicamente y no atiende lecturas ([doc](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html)). Aquí no se necesitan lecturas aparte.
- Los registros de transacciones se suben cada cinco minutos, así que el último instante restaurable queda típicamente a menos de 5 minutos ([doc](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html)). Encaja con el RPO de 5 minutos; la restauración crea una instancia nueva, lo que cuenta para el RTO de 1 hora (Módulo 10).
- Descartados: el clúster Multi-AZ con lectores, de replicación semisincrónica ([doc](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html)) y sin necesidad de leer aparte; y Aurora, que se evalúa en costos (Módulo 12).

PostgreSQL se elige porque el diseño necesita transacciones, bloqueo de fila y esquemas por módulo (Módulo 6).

## D. Entrada y red

**Decisión:** Route 53, WAF y **API Gateway tipo REST API** hacia un balanceador interno por **enlace privado (VPC link V2)**, que admite balanceadores de aplicación ([doc](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html)). Red con subredes de aplicación y de datos sin dirección pública; salidas a terceros por NAT; accesos a servicios de AWS por *endpoints* privados.

- Solo el tipo REST API ofrece WAF, validación de peticiones y planes de uso; mTLS lo ofrecen ambos ([doc](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)). Eso cierra la decisión C1 del Módulo 7.
- **Sin SQS ni SNS por ahora**: los eventos usan outbox interno, como se decidió en el Módulo 6.
- **Pendiente de confirmar:** el tiempo máximo de espera de integración del REST API (se recuerda de unos 29 s) no se pudo verificar en la documentación oficial. Hoy no afecta: la transferencia por Bre-B responde 202 y el cliente consulta el estado.
