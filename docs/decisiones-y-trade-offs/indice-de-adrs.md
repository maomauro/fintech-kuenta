---
sidebar_position: 1
title: Índice de ADR
---

# Índice de ADR

Un ADR (Architecture Decision Record) deja por escrito una decisión de arquitectura, las opciones que se descartaron y sus consecuencias. Se usa el formato [MADR 4.0](https://adr.github.io/madr/) en español, con estas secciones:

1. Contexto y problema.
2. Factores de decisión.
3. Opciones consideradas.
4. Resultado de la decisión.
5. Consecuencias.
6. Más información.

Un ADR no se edita para cambiar de opinión: se escribe uno nuevo y el anterior pasa a "reemplazada por ADR-NNN". Los estados posibles son propuesta, aceptada, rechazada, obsoleta y reemplazada.

| ADR | Decisión | Origen | Estado |
|---|---|---|---|
| [ADR-001](../adr/adr-001-monolito-modular.md) | Monolito modular con ocho módulos | Módulo 5 | Aceptada |
| [ADR-002](../adr/adr-002-java-spring.md) | Java 25 con Spring Boot y Spring Modulith | Módulo 13 (nuevo) | Aceptada |
| [ADR-003](../adr/adr-003-libro-mayor-outbox.md) | Libro mayor de partida doble, outbox y sagas, sin SQS ni SNS | Módulo 6 | Aceptada |
| [ADR-004](../adr/adr-004-adaptadores-y-gateway.md) | Adaptador por integración y API Gateway administrado | Módulo 7 | Aceptada |
| [ADR-005](../adr/adr-005-region-y-cuentas.md) | Región São Paulo y cuentas separadas | Módulo 8 | Aceptada |
| [ADR-006](../adr/adr-006-rds-frente-a-aurora.md) | RDS PostgreSQL Multi-AZ frente a Aurora | Módulos 8 y 12 | Aceptada |
| [ADR-007](../adr/adr-007-recuperacion-regional.md) | Recuperación regional por respaldo y restauración | Módulo 10 | Aceptada |
| [ADR-008](../adr/adr-008-observabilidad.md) | Observabilidad con servicios de AWS, sin SIEM aparte | Módulo 10 | Aceptada |
| [ADR-009](../adr/adr-009-blue-green-y-opentofu.md) | Blue/green integrado de ECS y OpenTofu | Módulo 11 | Aceptada |
| [ADR-010](../adr/adr-010-costos-y-compromisos.md) | Estimación anual y compromisos de ahorro tras medir | Módulo 12 | Aceptada |

La decisión **ADR-002** se tomó en este módulo; las demás ya estaban tomadas en los módulos anteriores y aquí se registran con sus alternativas y consecuencias.

## Qué sigue

Las decisiones futuras (por ejemplo, la extracción de un módulo o el cambio a una región en espera) se registran como nuevos ADR con el mismo formato. Los lineamientos para hacerlo están en el Módulo 14.
