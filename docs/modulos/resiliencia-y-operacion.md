---
sidebar_position: 10
title: "Módulo 10 · Resiliencia y operación"
---

# Módulo 10 · Resiliencia y operación

**Entregable:** plan de recuperación y objetivos de nivel de servicio. Cuatro páginas del sitio y una copia editable del diagrama de escenarios en draw.io.

Con el despliegue y la seguridad definidos, la arquitecta o el arquitecto decide **cuánto debe funcionar Kuenta, qué hace cuando algo falla y cómo se entera a tiempo**. Este módulo fija los valores que los Módulos 6, 7 y 9 dejaron pendientes; el flujo de entrega se define en el Módulo 11 y el costo en el Módulo 12.

## Qué se hizo

1. Se investigó: acuerdos de servicio de AWS, estrategias de recuperación ante desastres, copia de respaldos entre regiones, objetivos de servicio y presupuesto de error, GuardDuty, Security Hub y alarmas de CloudWatch.
2. Se definieron los objetivos de servicio y se detectó que la suma de los acuerdos de AWS (99,88 %) queda por debajo del 99,95 % pedido (decisión A).
3. Se definió la recuperación por escenario (decisión B).
4. Se fijaron los parámetros de los Módulos 6, 7 y 9 (decisión C).
5. Se definieron la observabilidad (decisión D) y la operación (decisión E).

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Objetivos de servicio](../resiliencia-y-operacion/objetivos-de-servicio.md) | Siete objetivos, presupuesto de error y el riesgo de la suma de acuerdos |
| [Plan de recuperación](../resiliencia-y-operacion/plan-de-recuperacion.md) | Tres escenarios con RPO y RTO, pasos de la pérdida de región y diagrama |
| [Parámetros](../resiliencia-y-operacion/parametros.md) | Valores de sagas, integraciones y seguridad |
| [Observabilidad y operación](../resiliencia-y-operacion/observabilidad-y-operacion.md) | Métricas, alarmas, severidades, runbooks y simulacros |
| `modelos/recuperacion/*.drawio` | Copia editable del diagrama de escenarios |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Objetivos de servicio | Siete objetivos; presupuesto de error; congelar cambios no urgentes al agotarlo | Pocos objetivos, medibles y útiles para decidir |
| B. Recuperación | Tres escenarios: zona (failover, RPO cero), datos (restauración a un instante, RPO 5 min y RTO 1 h) y región (respaldo y restauración, RPO 15 min y RTO 4 h) | Un segundo entorno encendido no se justifica con este tamaño; se reevalúa en los Módulos 12 a 14 |
| C. Parámetros | Valores propuestos para sagas, integraciones y seguridad | Cierran los pendientes de los Módulos 6, 7 y 9 |
| D. Observabilidad | Métricas, registros con correlación y sin datos personales, trazas, alarmas, alertas de negocio, GuardDuty y Security Hub; sin SIEM aparte al inicio | RNF-09 y Circular 007 |
| E. Operación | Severidades, guardia, postmortems sin culpa, runbooks y simulacros | Probar el plan antes de necesitarlo |

## Estado

- [x] Objetivos de servicio
- [x] Plan de recuperación
- [x] Parámetros
- [x] Observabilidad y operación
- [x] Copia en draw.io
- [ ] Revisar la copia en draw.io abierta en la aplicación (hecha sin abrirla)
- [ ] Medir el tiempo real de failover de Multi-AZ y la disponibilidad compuesta
- [ ] Confirmar cómo llegan los terceros a la región de recuperación
- [ ] Costo anual de los respaldos entre regiones (Módulo 12)
- [ ] Registrar en ADR: riesgo de disponibilidad compuesta, respaldo y restauración como estrategia de región, y análisis de SOC (Módulo 13)
- [ ] Umbrales para extraer un módulo a servicio (Módulo 14)
- [ ] Plazos de retención y de reporte de incidentes (pendientes de norma)

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario) a [9](./seguridad-y-cumplimiento.md#glosario).

| Sigla o término | Significado |
|---|---|
| SLI | Service Level Indicator: lo que se mide |
| SLO | Service Level Objective: el valor que se quiere para un indicador |
| SLA | Service Level Agreement: objetivo con consecuencias contractuales |
| Presupuesto de error | Cuánto se puede fallar sin incumplir el objetivo |
| RPO | Recovery Point Objective: cuántos datos se pueden perder, medido en tiempo |
| RTO | Recovery Time Objective: cuánto puede tardar en volver el servicio |
| Failover | Paso automático al standby cuando falla el principal |
| Respaldo y restauración | Estrategia de recuperación: copias en otra región y reconstrucción cuando se necesita |
| Warm standby | Estrategia de recuperación con un entorno reducido siempre encendido en otra región |
| Runbook | Guía paso a paso para resolver un tipo de incidente |
| Postmortem sin culpa | Análisis de un incidente que busca causas del sistema, no culpables |
| Guardia (on-call) | Turno de la persona que atiende las alertas |
| Simulacro (game day) | Ensayo planeado de una falla para medir si el plan funciona |
| GuardDuty | Servicio de AWS que detecta actividad sospechosa |
| Security Hub | Servicio de AWS que agrega hallazgos de seguridad y revisa estándares |
| Severidad | Nivel de gravedad de un incidente que decide la respuesta |
