---
sidebar_position: 2
title: Trade-offs
---

# Trade-offs

Decisión C del Módulo 13. Al estilo del método ATAM (Architecture Tradeoff Analysis Method, del Software Engineering Institute), cada fila nombra una decisión que **favorece un atributo de calidad a costa de otro**. Un *punto de sensibilidad* es un parámetro que cambia mucho un atributo; un *punto de compromiso* es donde dos atributos se tiran en direcciones opuestas.

## Puntos de compromiso

| # | Favorece | A costa de | Decisión relacionada | Cuándo se revisa |
|---|---|---|---|---|
| T-01 | Consistencia fuerte del dinero (una base de datos, una transacción) | Escalar y desplegar cada módulo por separado | [ADR-001](../adr/adr-001-monolito-modular.md), [ADR-003](../adr/adr-003-libro-mayor-outbox.md) | Al llegar a un umbral de extracción (Módulo 14) |
| T-02 | Costo bajo de recuperación regional | RTO de 4 horas ante la caída de una región | [ADR-007](../adr/adr-007-recuperacion-regional.md) | Si un regulador exige menos, o tras el primer simulacro |
| T-03 | Red cerrada, sin exposición a internet | Costo de NAT y endpoints de VPC, casi igual al de la base de datos | [ADR-005](../adr/adr-005-region-y-cuentas.md) | Revisión trimestral de costos |
| T-04 | Servicios administrados (API Gateway, RDS, Fargate) | Control fino y límites propios del servicio | [ADR-004](../adr/adr-004-adaptadores-y-gateway.md) | Si un límite bloquea un flujo |
| T-05 | Velocidad de entrega (despliegues diarios, blue/green) | Revisión y evidencia obligatorias en cada cambio | [ADR-009](../adr/adr-009-blue-green-y-opentofu.md) | Con las métricas DORA |
| T-06 | Datos en la región más cercana (São Paulo) | Datos fuera de Colombia y riesgo de jurisdicción | [ADR-005](../adr/adr-005-region-y-cuentas.md) | Cuando la SIC publique la lista de países adecuados |
| T-07 | Sin SIEM ni SOC propios (costo y equipo pequeño) | Menor correlación y análisis de incidentes | [ADR-008](../adr/adr-008-observabilidad.md) | Si crece el volumen o el regulador lo exige |
| T-08 | Stack conocido por el autor (Java) | Menos diversidad de opciones frente a otros lenguajes | [ADR-002](../adr/adr-002-java-spring.md) | Si el equipo cambia |

## Puntos de sensibilidad

| # | Parámetro | Atributo que mueve | Observación |
|---|---|---|---|
| S-01 | Número de tareas y zonas del monolito | Disponibilidad compuesta y costo | La disponibilidad compuesta de AWS (99,88 %) queda debajo del SLO de 99,95 %; ver riesgo R-01 |
| S-02 | Tamaño de la instancia de RDS | Rendimiento (SLO-04, SLO-05) y costo | Es el rubro más grande de producción |
| S-03 | Tráfico por el NAT | Costo | Cada GB cuesta 0,093 USD en São Paulo |
| S-04 | Tiempo de observación del blue/green | Riesgo de un despliegue malo frente a plazo de cambio | Propuesta de 10 minutos |
| S-05 | Retención de logs | Costo y cumplimiento | El plazo legal no está confirmado |
