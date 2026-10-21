---
sidebar_position: 2
title: Controles
---

# Controles

Decisiones B, C y D del Módulo 9. Los valores concretos (tiempos, intentos, plazos) son parámetros que se fijan en el [Módulo 10](../modulos/seguridad-y-cumplimiento.md).

## B. Identidad y acceso

| Quién | Control |
|---|---|
| Clientes | Autenticación fuerte (más de un factor) y **confirmación adicional en cada operación de dinero**, ligada a esa operación. Credenciales de corta vida |
| Clientes (autorización) | Cada puerta pública del monolito comprueba que el objeto pertenece a quien lo pide, no solo que esté autenticado |
| Terminales | mTLS en la entrada de terminales (el gateway lo admite) y credencial propia de cada terminal, revocable |
| Terceros que llaman a Kuenta | Rutas y credenciales separadas de las de clientes (Módulo 7) |
| Personal | Acceso único con autenticación multifactor, mínimo privilegio, acceso temporal a producción y separación de funciones: quien desarrolla no aprueba ni opera. La Circular 005 pide MFA en las consolas de administración |

## C. Protección de datos

| Control | Detalle |
|---|---|
| Cifrado en tránsito | Entre cliente, gateway, balanceador, aplicación y base de datos |
| Cifrado en reposo | Base de datos, S3 y secretos, con **llaves propias en KMS** (no las predeterminadas) |
| Cifrado por campo | Documento y datos biométricos se cifran además dentro de la aplicación |
| Separación | Datos personales aparte del dinero (Módulo 6): depósito, movimiento y auditoría solo guardan el identificador del cliente |
| Registros y eventos | Sin datos personales |
| Retención y borrado | Plazo como parámetro; borrado seguro al terminar. El plazo legal del SARLAFT y de los registros está por confirmar |
| Evidencias de identidad | S3 sin acceso público, con registro de accesos |

## D. Detección, respuesta y desarrollo seguro

| Control | Detalle |
|---|---|
| Registro | Auditoría de la aplicación (Módulo 6), CloudTrail para la cuenta de AWS y CloudWatch para métricas y alarmas |
| Correlación de eventos | La Circular 007 pide herramientas de correlación (SIEM); la elección va con observabilidad en el Módulo 10 |
| Plan de respuesta a incidentes | Identificar, contener, erradicar, recuperar, aprender. Preservar evidencia digital |
| Comunicación de incidentes | A la Superintendencia (por correo, con la taxonomía y el etiquetado TLP de la Circular 033), a las autoridades nacionales (COLCERT) y a los clientes afectados cuando se comprometa confidencialidad o integridad |
| Desarrollo seguro | Análisis de código, de dependencias y de imágenes, y pruebas de seguridad en el pipeline (Módulo 11) |
| Pruebas | Prueba de penetración periódica y pruebas de continuidad que simulen un ciberataque (Circular 007, 4.1.7) |
| Seguridad en la nube | Responsabilidad compartida: AWS protege la infraestructura; Kuenta protege datos, cifrado y permisos ([modelo de AWS](https://aws.amazon.com/compliance/shared-responsibility-model/)) |

## Mapa con OWASP API Security Top 10

| Riesgo de OWASP (2023) | Cómo se cubre en Kuenta |
|---|---|
| API1 Autorización rota a nivel de objeto | Autorización por objeto en cada puerta pública (T-02) |
| API2 Autenticación rota | Autenticación fuerte y credenciales de corta vida (T-01) |
| API3 Autorización rota a nivel de propiedad | Los contratos solo exponen los campos necesarios; el cliente nunca ve retenciones de cumplimiento |
| API4 Consumo sin límites de recursos | WAF y límites por cliente y terminal (T-10) |
| API5 Autorización rota a nivel de función | Rutas de clientes, terminales y back-office separadas con permisos distintos |
| API6 Acceso sin límites a flujos sensibles | Límites y antifraude sobre transferencias y aperturas |
| API7 Falsificación de peticiones del lado del servidor | Los adaptadores solo llaman a destinos fijos de cada tercero |
| API8 Mala configuración de seguridad | Infraestructura como código revisada (Módulo 11) |
| API9 Mala gestión del inventario | Contratos OpenAPI versionados; solo existen las rutas del contrato |
| API10 Consumo inseguro de APIs | Cada adaptador valida lo que recibe del tercero (capa anticorrupción) |
