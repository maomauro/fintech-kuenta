---
sidebar_position: 4
title: Observabilidad y operación
---

# Observabilidad y operación

Decisiones D y E del Módulo 10: **cómo se enteran del problema antes que el cliente y cómo se actúa**.

## D. Observabilidad

| Pilar | Qué se hace |
|---|---|
| Métricas | De infraestructura (tareas, base de datos, balanceador) y de negocio, con un tablero por módulo y otro de los SLO |
| Registros | Estructurados, con el identificador de correlación del [Módulo 7](../integracion-y-apis/estilo-de-apis.md) y **sin datos personales** ([Módulo 9](../seguridad-y-cumplimiento/controles.md)) |
| Trazas | Con el mismo identificador de correlación, de la entrada al adaptador del tercero |
| Alarmas | En CloudWatch, hacia una cola de guardia. Una alarma de métrica puede notificar por SNS ([doc](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html)); se usa solo para alertas, no para eventos entre módulos |
| Meta de detección | Alerta en menos de 5 minutos ante la caída de un servicio crítico (RNF-09) |

### Alertas de negocio

| Alerta | Por qué |
|---|---|
| Diferencia de conciliación distinta de cero (Bre-B o corresponsales) | SLO-07: el dinero siempre cuadra |
| Falta el lote de conciliación de una red de corresponsales | Decisión D del Módulo 7 |
| Transferencias Bre-B en Pendiente más de lo esperado | Saga del Módulo 6 |
| Outbox con eventos atrasados | Eventos del Módulo 6 |
| Cola de reportes a UIAF o Superfinanciera cerca del plazo legal | Cumplimiento |
| Saldo recalculado distinto del guardado | Libro mayor del Módulo 6 |
| Presupuesto de error cerca de agotarse | Objetivos de servicio |

### Seguridad

- **GuardDuty** analiza CloudTrail, flujos de red y DNS; la protección de tiempo de ejecución para Fargate y la de RDS se activan aparte ([doc](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html)).
- **Security Hub** agrega hallazgos y revisa estándares como CIS; necesita AWS Config. La documentación no lo presenta como un SIEM ([doc](https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html)).
- **Sin SIEM aparte al inicio:** la correlación inicial se hace con estos servicios y CloudWatch. La Circular 007 pide herramientas de correlación y un análisis de riesgo sobre contratar o construir un SOC (3.2.8 y 4.1.8): ese análisis queda como ADR en el Módulo 13.

## E. Operación

### Severidades

| Severidad | Cuándo | Respuesta (propuesta) |
|---|---|---|
| S1 | Dinero en riesgo, incidente de seguridad, o transferencias y depósitos caídos | 15 minutos, guardia completa |
| S2 | Un módulo degradado o un tercero caído sin afectar el dinero | 1 hora |
| S3 | Falla menor o con alternativa | Siguiente día hábil |

### Guardia y postmortems

- Guardia simulada con un responsable de turno y un reemplazo.
- Todo incidente S1 o S2 termina en un *postmortem* **sin culpa**: línea de tiempo, causa, qué se aprende y qué cambia.
- Los incidentes de seguridad siguen además el plan de respuesta del [Módulo 9](../seguridad-y-cumplimiento/controles.md).

### Runbooks

Cada uno es una guía paso a paso:

- Failover de zona y verificación posterior.
- Restauración a un instante.
- Pérdida de región ([pasos](./plan-de-recuperacion.md#b5-pasos-de-la-pérdida-de-región)).
- Bre-B caído o lento.
- Transferencias Bre-B en Pendiente.
- Diferencia de conciliación.
- Lote de una red de corresponsales ausente.
- Outbox atrasado.
- Reporte a UIAF o Superfinanciera cerca del plazo.

### Simulacros

| Simulacro | Frecuencia |
|---|---|
| Failover de zona | 2 veces al año |
| Restauración a un instante | Cada trimestre |
| Pérdida de región | 1 vez al año |
| Ciberataque simulado | 1 vez al año |

Cada simulacro mide el tiempo real y corrige el plan si no cumple el RTO.
