---
sidebar_position: 1
title: Objetivos de servicio
---

# Objetivos de servicio

Decisión A del Módulo 10: **cuánto debe funcionar Kuenta y cómo se mide**. Pocos objetivos, claros y medibles.

## A1. Vocabulario

| Término | Significado |
|---|---|
| SLI | Indicador: lo que se mide (por ejemplo, el porcentaje de peticiones que responden bien) |
| SLO | Objetivo: el valor que se quiere para ese indicador |
| SLA | Acuerdo: un SLO con consecuencias contractuales. Los de AWS son créditos, no garantías |
| Presupuesto de error | Lo que se puede fallar sin incumplir el objetivo |

Según el [libro de SRE de Google](https://sre.google/sre-book/service-level-objectives/): se prefieren pocos objetivos, que sirvan para decidir prioridades, y no se eligen a partir del desempeño de hoy.

## A2. Objetivos

| Id | Objetivo | Indicador | Meta | Origen |
|---|---|---|---|---|
| SLO-01 | Disponibilidad de transferencias y depósitos | Peticiones válidas que no terminan en error del servidor, medidas en el gateway | 99,95 % en 30 días | RNF-03 |
| SLO-02 | Disponibilidad del resto de servicios | Igual | 99,9 % en 30 días | RNF-03 |
| SLO-03 | Transferencia por Bre-B | Órdenes completadas de punta a punta en 20 s | Al menos 99,5 % | Compendio DSP-465 (num. 3.1.d y 5.1.e) |
| SLO-04 | Transferencia entre cuentas Kuenta | Tiempo de respuesta p95 | 3 s | RNF-05 |
| SLO-05 | Consulta de saldo | Tiempo de respuesta p95 | 2 s | RNF-05 |
| SLO-06 | Apertura del depósito | Tiempo de punta a punta | 5 min como máximo | RNF-05 |
| SLO-07 | Integridad del dinero | Diferencias de conciliación | Cero | RNF-02 |

Las peticiones que terminan en error del cliente (la familia 4xx) no cuentan contra la disponibilidad.

## A3. Presupuesto de error

| Meta de disponibilidad | Caída permitida por 30 días | Caída permitida por año |
|---|---|---|
| 99,95 % | unos 22 minutos | unas 4,4 horas |
| 99,9 % | unos 43 minutos | unas 8,8 horas |

**Regla:** si el presupuesto de error de un objetivo se agota, se congelan los cambios que no sean urgentes (correcciones y seguridad) hasta recuperarlo.

## A4. Riesgo: la suma de los acuerdos de AWS

Los acuerdos de servicio de los componentes en serie son:

| Componente | Acuerdo mensual |
|---|---|
| [API Gateway](https://aws.amazon.com/api-gateway/sla/) | 99,95 % |
| [Balanceador](https://aws.amazon.com/elasticloadbalancing/sla/) (varias zonas) | 99,99 % |
| [ECS con Fargate](https://aws.amazon.com/ecs/sla/) (varias zonas) | 99,99 % |
| [RDS Multi-AZ](https://aws.amazon.com/rds/sla/) | 99,95 % |

Multiplicados dan **99,88 %** (unas 10,5 horas de caída al año), por debajo del 99,95 % de SLO-01.

- Esos números son los umbrales a partir de los cuales AWS da créditos, no la disponibilidad real, que suele ser mayor.
- Aun así, **Kuenta no puede prometer 99,95 % solo con los acuerdos del proveedor**: debe medirlo.
- Acciones: medir la disponibilidad real desde el primer día; revisar el eslabón más débil (gateway y base de datos) si la medición queda por debajo; y registrar el riesgo en el ADR del Módulo 13.
