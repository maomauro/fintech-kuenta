---
sidebar_position: 3
title: Matriz de cumplimiento
---

# Matriz de cumplimiento

Decisión E del Módulo 9: cada requisito, el **control** que lo cumple, la **evidencia** que lo demuestra y el **responsable**. Las normas se leyeron en copias de terceros: se confirman en fuente oficial antes de publicar (la Circular Externa 004 de 2026 reorganizó la circular básica, y no se verificó si cambió la numeración).

Roles simulados: **Seguridad** (la unidad responsable que pide la Circular 007), **Arquitectura**, **Operación** y **Cumplimiento** (el módulo y el equipo de oficial de cumplimiento).

| Requisito | Fuente | Control | Evidencia | Responsable |
|---|---|---|---|---|
| Aviso a la Superintendencia 15 días antes de procesar en la nube, con proveedor, datos, región, certificaciones, niveles de servicio y diagrama | Circular 005, numeral 6 | Se prepara con la [tabla de servicios](../arquitectura-en-aws/tabla-de-servicios.md) y el [diagrama de despliegue](../arquitectura-en-aws/diagrama-de-despliegue.md) | Aviso radicado | Arquitectura |
| Proveedor con ISO 27001, 27017, 27018 y SOC 1, 2 y 3 | Circular 005, 3.4 | AWS los lista en sus [programas de cumplimiento](https://aws.amazon.com/compliance/programs/) | Informes del proveedor | Seguridad |
| Cifrado de información confidencial en tránsito y en reposo | Circular 005, 3.10 | Decisión C | Configuración de KMS y TLS | Seguridad |
| MFA en consolas de administración | Circular 005, 4.10 | Decisión B | Política de acceso | Seguridad |
| Disponibilidad de al menos 99,95 % | Circular 005, 3.5 | Dos zonas (Módulo 8), objetivos de servicio (Módulo 10) | Mediciones | Operación |
| Verificar jurisdicción con normas equivalentes | Circular 005, 3.7 | **Pendiente**: Brasil no está aún en la lista de la SIC | Concepto legal | Cumplimiento |
| Plan de salida del proveedor | Circular 005, numeral 5 | Se define en el plan de evolución (Módulo 14) | Plan | Arquitectura |
| Política de ciberseguridad aprobada por la junta | Circular 007, 3.1 | Política simulada | Acta | Seguridad |
| Unidad responsable de seguridad | Circular 007, 3.2 | Rol de seguridad | Descripción del rol | Seguridad |
| Marco reconocido de gestión (ISO 27032, NIST, CIS o COBIT 5) | Circular 007, 3.3 | **Por elegir** | Documento del marco | Seguridad |
| Autenticación fuerte y separación de funciones | Circular 007, 3.5 | Decisión B | Política de acceso | Seguridad |
| Retención y destrucción de información | Circular 007, 3.6 | Decisión C | Parámetros de retención | Cumplimiento |
| Reportar incidentes a la Superintendencia, a COLCERT y a los clientes afectados | Circular 007, 3.7 y 4.3.3; Circular 033 | Plan de respuesta (decisión D) | Registro de incidentes | Seguridad |
| Reporte de métricas de seguridad (Formato 408) | Circular 033 | Métricas de seguridad y observabilidad | Reportes enviados | Seguridad |
| Desarrollo seguro y pruebas de seguridad | Circular 007, 3.8 | Pipeline con análisis y pruebas (Módulo 11) | Resultados del pipeline | Arquitectura |
| Obligaciones de seguridad con terceros críticos y verificación periódica | Circular 007, 3.9 y 3.10 | Cláusulas contractuales y revisión anual | Contratos y revisiones | Seguridad |
| Continuidad con pruebas que simulen ciberataques | Circular 007, 4.1.6 y 4.1.7 | Plan de recuperación (Módulo 10) | Informe de pruebas | Operación |
| Correlación de eventos (SIEM) | Circular 007, 4.1.8 | Se decide en el Módulo 10 | Herramienta configurada | Operación |
| Autorización expresa para datos sensibles como la biometría | Ley 1581 de 2012 | Registro de autorización (módulo Identidad y apertura) | Autorizaciones guardadas | Cumplimiento |
| Transferencia internacional de datos (art. 26) | Ley 1581 de 2012 | **Pendiente**: cláusulas contractuales modelo de la SIC u otro mecanismo, con apoyo legal | Contrato con cláusulas | Cumplimiento |
| Listas restrictivas, debida diligencia y reporte a la UIAF | SARLAFT | Módulo Cumplimiento y riesgo | Reportes y consultas | Cumplimiento |

## Pendientes

- Plazo de reporte de incidentes a la Superintendencia (el texto leído de la Circular 007 no lo fija).
- Plazo de retención de registros y del SARLAFT.
- Frecuencia de la prueba de penetración.
- Requisitos oficiales de autenticación de clientes en canales digitales.
- Registro de bases de datos ante la SIC.
- Marco de gestión de seguridad (decidir).
