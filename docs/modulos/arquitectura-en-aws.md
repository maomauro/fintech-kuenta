---
sidebar_position: 8
title: "Módulo 8 · Arquitectura en AWS"
---

# Módulo 8 · Arquitectura en AWS

**Entregable:** diagrama de despliegue y tabla de servicios. Tres páginas del sitio y una copia editable del diagrama en draw.io.

Con el estilo, los datos y las integraciones definidos, la arquitecta o el arquitecto decide **dónde y sobre qué corre Kuenta en AWS**. Este módulo elige servicios; no estima precios (Módulo 12), no detalla controles de seguridad (Módulo 9) ni los valores de recuperación (Módulo 10).

## Qué se hizo

1. Se investigó en fuentes oficiales: regiones de AWS y Colombia, la Circular 005 de 2019, Fargate, las opciones Multi-AZ y la restauración a un instante de RDS, y el tipo de API Gateway.
2. Se eligió la región y la separación de cuentas (decisión A).
3. Se eligió dónde corre el monolito (decisión B) y su base de datos (decisión C).
4. Se definieron la entrada, la red y los servicios de apoyo (decisión D).
5. Se publicaron el diagrama de despliegue y la tabla de servicios (decisión E).

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Diagrama de despliegue](../arquitectura-en-aws/diagrama-de-despliegue.md) | Cómo se ve Kuenta en AWS, con dos zonas de disponibilidad |
| [Decisiones de despliegue](../arquitectura-en-aws/decisiones.md) | Decisiones A a D con sus fuentes |
| [Tabla de servicios](../arquitectura-en-aws/tabla-de-servicios.md) | Servicio, para qué, quién lo usa y atributo de calidad |
| `modelos/despliegue/*.drawio` | Copia editable en draw.io |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Región y cuentas | São Paulo; cuentas de producción, pruebas y seguridad y registros; respaldos a una segunda región | Colombia no tiene región; São Paulo viene habilitada por defecto |
| B. Cómputo | ECS con Fargate, mínimo dos tareas en dos zonas, balanceador interno | Un monolito no necesita Kubernetes; Fargate evita administrar servidores |
| C. Base de datos | RDS para PostgreSQL Multi-AZ (standby sincrónico), un esquema por módulo, restauración a un instante | El RPO de 5 minutos y el diseño del Módulo 6 |
| D. Entrada y red | Route 53, WAF y API Gateway REST API con mTLS, enlace privado al balanceador, subredes privadas, NAT; sin SQS ni SNS | Cierra la decisión C1 del Módulo 7 |
| E. Entregable | Diagrama de despliegue en Mermaid con copia en draw.io y tabla de servicios | El sitio ya dibuja Mermaid |

## Estado

- [x] Región y cuentas
- [x] Cómputo y base de datos
- [x] Entrada, red y servicios de apoyo
- [x] Diagrama de despliegue y tabla de servicios
- [x] Copia en draw.io
- [ ] Revisar la copia en draw.io abierta en la aplicación (hecha sin abrirla)
- [ ] Confirmar el tiempo máximo de integración del REST API (se recuerda de unos 29 s; no se verificó)
- [ ] Verificar que cada servicio esté disponible en São Paulo y medir la latencia desde Colombia
- [ ] Confirmar la equivalencia de jurisdicción exigida por la Circular 005 (numeral 3.7) para Brasil
- [ ] Informar la región a la Superintendencia y avisar 15 días antes de procesar en la nube
- [ ] Certificaciones de AWS frente a la Circular 005 (Módulo 9)
- [ ] Comparar RDS con Aurora en costos (Módulo 12) y registrarlo en un ADR (Módulo 13)
- [ ] Plan de recuperación entre regiones (Módulo 10)

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario) a [7](./integracion-y-apis.md#glosario).

| Sigla o término | Significado |
|---|---|
| Región | Zona geográfica de AWS con varios centros de datos |
| Zona de disponibilidad (AZ) | Centro de datos aislado dentro de una región; repartir en dos permite sobrevivir a la caída de una |
| VPC | Red privada virtual dentro de AWS |
| ECS | Amazon Elastic Container Service: orquestador de contenedores de AWS |
| Fargate | Modo de ECS que ejecuta contenedores sin administrar servidores |
| RDS | Amazon Relational Database Service: base de datos administrada |
| Multi-AZ | Base de datos con una réplica en otra zona que toma el control si falla la principal |
| Restauración a un instante (PITR) | Recuperar la base como estaba en un momento pasado, usando respaldos y registros de transacciones |
| ALB | Application Load Balancer: reparte las peticiones entre varias tareas |
| WAF | Web Application Firewall: filtra ataques web comunes |
| NAT | Puerta que permite salir a internet desde subredes privadas sin recibir conexiones |
| VPC link | Enlace privado entre API Gateway y un balanceador dentro de la VPC |
| KMS | Key Management Service: administra las llaves de cifrado |
| Local Zone | Extensión de una región de AWS cerca de una ciudad, con pocos servicios |
