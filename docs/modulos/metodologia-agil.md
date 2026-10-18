---
sidebar_position: 3
title: "Módulo 3 · Metodología ágil"
---

# Módulo 3 · Metodología ágil

**Entregable:** backlog inicial (épicas, historias y criterios de aceptación) y plan de releases con el MVP.

El módulo anterior dejó qué debe hacer y cumplir Kuenta. Este define **cómo se organiza el trabajo** para construirlo en incrementos pequeños, sin perder el cumplimiento regulatorio por el camino.

## Qué se hizo

1. Se **investigó** cómo se integra el cumplimiento en un proceso ágil y qué exige la Scrum Guide 2020.
2. Se eligió el marco de trabajo y se redactó el Product Goal.
3. Se agruparon los 24 requisitos funcionales en **7 épicas y 23 historias**.
4. Se escribieron criterios de aceptación de ejemplo en formato Dado/Cuando/Entonces.
5. Se cortó el MVP y se planificaron dos releases.

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Marco de trabajo](../agil/marco-de-trabajo.md) | Scrum, roles, Product Goal y Definition of Done de dos niveles |
| [Épicas e historias](../agil/epicas-e-historias.md) | Backlog inicial con trazabilidad a los requisitos y criterios de ejemplo |
| [Plan de releases](../agil/plan-de-releases.md) | Mapa de historias, MVP y segundo release |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| Marco de trabajo | Scrum con roles simulados | Pide un Product Goal y una Definition of Done explícitos |
| Product Goal | Abrir el depósito y hacer pagos diarios sin ir a una oficina, cumpliendo la regulación | Un solo objetivo de producto a la vez |
| Formato de historias | Épica, historia y criterios Dado/Cuando/Entonces | Se convierte directo en pruebas automatizadas |
| Corte del MVP | Release 1 sin Bre-B; Bre-B y los depósitos inactivos en el Release 2 | El sistema externo de pagos es el mayor riesgo de integración |
| Cumplimiento | Historias en el mismo backlog y parte de la Definition of Done | La ley es un requisito, no un trámite posterior |

Bre-B sigue dentro de la **primera versión**, como se decidió en el Módulo 2: lo que cambia es que esa versión se entrega en dos releases.

## Estado

- [x] Marco de trabajo y Product Goal
- [x] Backlog inicial con trazabilidad a los 24 requisitos
- [x] Criterios de aceptación de ejemplo
- [x] Plan de releases
- [ ] Verificar el contenido de las fuentes contra la guía oficial de Scrum y de story mapping
- [ ] Verificar si Bre-B es obligatoria para una SEDPE (podría forzar a Bre-B dentro del MVP)

## Glosario

Términos nuevos de este módulo.

| Sigla o término | Significado |
|---|---|
| Backlog | Lista ordenada de todo lo que se quiere construir |
| Criterio de aceptación | Condición verificable que debe cumplirse para dar una historia por terminada |
| Definition of Done | Estándar de calidad que debe cumplir todo elemento para considerarse terminado; incluye los requisitos regulatorios |
| Deuda de cumplimiento | Trabajo regulatorio pospuesto, que cuesta más cuanto más se demora |
| Dado/Cuando/Entonces | Formato de criterio de aceptación: el contexto, la acción y el resultado esperado (conocido como Gherkin) |
| Épica | Conjunto de historias que persiguen un mismo objetivo |
| Historia de usuario | Necesidad de un usuario escrita como "Como... quiero... para..." |
| MVP | *Minimum Viable Product*: la versión más pequeña que ya aporta valor real |
| Product Goal | Objetivo de largo plazo del producto; en Scrum solo hay uno a la vez |
| Release | Entrega de un conjunto de historias a los usuarios |
| Scrum | Marco de trabajo ágil con sprints, un backlog y roles definidos |
| Sprint | Periodo corto y fijo (aquí, 2 semanas) en el que se construye un incremento |
| Story map | Mapa que ordena las historias siguiendo lo que hace el usuario y las reparte en releases |
