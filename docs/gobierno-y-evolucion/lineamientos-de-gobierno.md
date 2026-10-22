---
sidebar_position: 1
title: Lineamientos de gobierno
---

# Lineamientos de gobierno

Decisiones A y B del Módulo 14. El gobierno de Kuenta es **ligero**: no hay comité, hay reglas claras, decisiones escritas y verificaciones automáticas. Complementa los [principios](../arquitectura-empresarial/principios.md) del Módulo 4 y el [índice de ADR](../decisiones-y-trade-offs/indice-de-adrs.md) del Módulo 13.

## A. Quién decide qué

Las decisiones se clasifican por lo difícil que es revertirlas.

| Tipo | Ejemplos | Quién decide | Registro |
|---|---|---|---|
| Difícil de revertir | Nuevo servicio de AWS; cambio del límite de un módulo; nueva integración con un tercero; nuevo dato personal; cambio de un SLO, de la región o del stack | Quien propone, con revisión del arquitecto | ADR |
| Fácil de revertir | Una librería interna, el diseño de una clase, un parámetro de configuración | Quien construye | Mensaje del commit o del pull request |

### Cómo se revisa un ADR

1. Se escribe como ADR con estado "propuesta" en el mismo pull request del cambio.
2. El arquitecto lo revisa de forma asíncrona, con un plazo propuesto de dos días hábiles.
3. Pasa a "aceptada" o "rechazada". Si reemplaza otra decisión, la anterior queda "reemplazada por ADR-NNN".

### Excepciones a un principio

Una excepción es una decisión temporal. Se registra con:

| Campo | Contenido |
|---|---|
| Principio afectado | Por ejemplo, PA-05 (un solo dueño por cada dato) |
| Motivo | Por qué no se puede cumplir ahora |
| Riesgo | Qué puede pasar, con su puntuación de la [matriz de riesgos](../decisiones-y-trade-offs/matriz-de-riesgos.md) |
| Responsable | Quién la levanta |
| Fecha de caducidad | Cuándo se revisa o se elimina |

## B. Funciones de aptitud

Una función de aptitud es una **verificación automática de una característica de la arquitectura** ([Thoughtworks](https://www.thoughtworks.com/es/radar/techniques/architectural-fitness-function)). Así los principios se cumplen aunque nadie los revise a mano.

| Función de aptitud | Principio | Cómo se verifica | Qué pasa si falla |
|---|---|---|---|
| Sin ciclos entre módulos ni acceso a tipos internos de otro módulo | PA-05, PA-07 | `verify()` de [Spring Modulith](https://docs.spring.io/spring-modulith/reference/verification.html) | Bloquea el pull request |
| Contratos de API compatibles | PA-06 | Pruebas de contrato sobre los OpenAPI | Bloquea el pull request |
| Sin secretos ni vulnerabilidades críticas | PA-01 | Puertas del [pipeline](../entrega-ci-cd-e-iac/pipeline-y-despliegue.md) | Bloquea el pull request |
| Evidencia de despliegue completa | PA-08 | Pipeline | Bloquea el despliegue |
| Sin datos personales en los eventos | PA-01, PA-05 | Prueba automática sobre los esquemas de eventos | Bloquea el pull request |
| El dinero cuadra | PA-02 | Conciliación periódica (SLO-07, conciliación cero) | Alerta de severidad alta |
| Presupuesto de error de los SLO | PA-03 | Medición de [objetivos de servicio](../resiliencia-y-operacion/objetivos-de-servicio.md) | Si se agota, se congelan los despliegues no urgentes (propuesta) |
| Gasto dentro del presupuesto | PA-06 | AWS Budgets, con alertas al 80 % y al 100 % | Alerta y revisión mensual |

## Deuda técnica

- Se registra en el backlog con una categoría: arquitectura, pruebas, dependencias, documentación u operación.
- Cada sprint reserva capacidad para pagarla. Propuesta: 15 %, ajustable por el equipo.
- Una excepción a un principio es deuda técnica con fecha de caducidad.

## Calendario de revisiones

| Frecuencia | Qué se revisa |
|---|---|
| En cada pull request | Funciones de aptitud, ADR propuestos |
| Mensual | Gasto real contra la estimación, métricas DORA, presupuesto de error de los SLO |
| Trimestral | Matriz de riesgos, ADR vigentes, simulacro de recuperación, versiones de dependencias |
| Anual | Prueba de penetración, ciberataque simulado, plan de evolución, soporte de Java y de Spring |
