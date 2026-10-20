---
sidebar_position: 1
title: Marco de trabajo
---

# Marco de trabajo

Cómo se organiza el trabajo de construir Kuenta. Se usa **Scrum**, con los roles simulados, porque obliga a tener un objetivo de producto y una definición de "terminado" explícitos, y ambos son el lugar natural para el cumplimiento regulatorio.

## Roles (simulados)

| Rol | Qué hace en Kuenta |
|---|---|
| Product Owner | Mantiene el Product Goal y ordena el backlog según valor, riesgo y obligación regulatoria |
| Developers | Construyen el incremento. La arquitectura se decide dentro de este equipo: Scrum no define un rol de arquitecto aparte |
| Scrum Master | Cuida el proceso y quita impedimentos |

En este proyecto el autor ocupa el lugar del arquitecto dentro de los Developers y propone las decisiones técnicas que quedan registradas como ADR.

## Product Goal

> Que una persona abra su depósito de bajo monto y haga sus pagos del día a día sin ir a una oficina, cumpliendo la regulación.

En Scrum solo hay un Product Goal a la vez. Cuando se alcanza, se define el siguiente.

## Cadencia

Sprints de **2 semanas** (propuesta, ajustable). Cada sprint tiene su Sprint Goal, que se fija en la planificación y no cambia durante el sprint.

## Definition of Done

La Scrum Guide 2020 pide que la Definition of Done incluya los requisitos regulatorios, y que un elemento que no la cumpla vuelva al backlog. La de Kuenta tiene dos niveles.

### Nivel 1: listo para usar (*shippable*)

- Los criterios de aceptación de la historia pasan como pruebas automatizadas.
- Revisión por pares del código.
- Sin vulnerabilidades críticas abiertas (meta de [RNF-01](../requisitos/atributos-de-calidad.md): corregirlas en 7 días como máximo).
- Si la historia mueve dinero, cada operación deja registro de auditoría (RF-18, RNF-04).
- Métricas y alertas del servicio afectado (RNF-09).
- Documentación de la historia actualizada.

### Nivel 2: auditable

- Trazabilidad completa: requisito, historia, commit, prueba y despliegue.
- Evidencia de la revisión por pares.
- La norma que origina la historia está citada, si la hay.

El segundo nivel se automatiza en el Módulo 11 (CI/CD): lo ideal es que la evidencia se genere sola con cada despliegue.

## El cumplimiento va en el mismo backlog

Las obligaciones regulatorias (SARLAFT, listas restrictivas, reporte a la UIAF, tope de 8 SMLMV) son **historias** del mismo backlog, no una lista aparte. Así compiten por prioridad con las funcionalidades y se cuentan en la capacidad del equipo. El trabajo regulatorio que se pospone es **deuda de cumplimiento** y se registra como tal.

:::note Fuentes
- Scrum Guide 2020: [Scrum.org](https://www.scrum.org/resources/blog/home-product-goal-definition-done-and-sprint-goal)
- Dos niveles de "terminado" y auditores desde el inicio: [PMI, Agile compliance](https://www.pmi.org/learning/library/agile-compliance-9607) (artículo de 2015)
- Cumplimiento como historias y deuda de cumplimiento: [RSVR Tech](https://rsvrtech.com/blog/agile-fintech-how-to-sprint-fast-and-stay-compliant/) (blog de un proveedor, se usa como práctica y no como norma)
:::
