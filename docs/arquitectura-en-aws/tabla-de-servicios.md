---
sidebar_position: 3
title: Tabla de servicios
---

# Tabla de servicios de AWS

Todo lo que Kuenta usa en AWS, para qué y por qué. Los precios no están aquí: se estiman en el [Módulo 12](../modulos/arquitectura-en-aws.md) como total anual desde la página oficial de AWS.

| Servicio | Para qué | Quién lo usa | Atributo de calidad |
|---|---|---|---|
| AWS Organizations | Separar cuentas de producción, pruebas y seguridad y registros | Toda la plataforma | Seguridad, cumplimiento |
| Route 53 | Nombres de dominio de las APIs | Entrada | Disponibilidad |
| AWS WAF | Filtrar ataques comunes antes de llegar a la API | Entrada | Seguridad |
| API Gateway (REST API) | Autenticación, límites, validación contra OpenAPI y mTLS para terminales | Entrada, [contratos](../integracion-y-apis/contratos.md) | Seguridad, observabilidad |
| Application Load Balancer (interno) | Repartir peticiones entre las tareas del monolito | Monolito | Disponibilidad |
| Amazon ECR | Guardar las imágenes del contenedor | Entrega (Módulo 11) | Evolutividad |
| Amazon ECS con Fargate | Correr el monolito en contenedores, mínimo dos tareas en dos zonas | Los ocho módulos | Disponibilidad, capacidad |
| Amazon RDS para PostgreSQL Multi-AZ | Base de datos con un esquema por módulo, standby y restauración a un instante | Todos los módulos | Integridad del dinero, recuperación |
| Amazon S3 | Evidencias de identidad y archivos fuera de la base (Módulo 6) | Identidad y apertura | Seguridad, cumplimiento |
| AWS KMS | Llaves de cifrado de la base, de S3 y de los secretos | Plataforma | Seguridad |
| AWS Secrets Manager | Credenciales de terceros y de la base | Adaptadores de integración | Seguridad |
| NAT Gateway | Salidas a terceros desde subredes privadas | Adaptadores de integración | Seguridad |
| VPC endpoints | Acceso privado a S3, ECR, KMS, Secrets Manager y registros | Plataforma | Seguridad |
| Amazon CloudWatch | Métricas, registros y alarmas | Operación | Observabilidad |
| AWS CloudTrail | Registro de las acciones sobre la cuenta de AWS | Seguridad, auditoría | Cumplimiento y auditoría |
| AWS Backup o copias entre regiones | Copia de respaldos a una segunda región | Operación | Recuperación |

## Lo que no se usa (todavía)

| Servicio | Por qué no |
|---|---|
| SQS, SNS, EventBridge | Los eventos usan outbox interno (Módulo 6). Se revisan si un módulo pasa a servicio |
| EKS | Demasiada operación para un monolito |
| Aurora | Se evalúa en costos (Módulo 12) y en el ADR del Módulo 13 |
| Lambda | El monolito es una sola aplicación; no hay funciones aparte |

## Por revisar antes de contratar

- Que cada servicio esté disponible en São Paulo (no se verificó servicio por servicio).
- Qué certificaciones de AWS cubren la Circular 005 de 2019: ISO 27001, 27017, 27018 y SOC 1, 2 y 3 (Módulo 9).
