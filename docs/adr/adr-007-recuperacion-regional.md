---
sidebar_position: 7
title: "ADR-007 · Recuperación regional por respaldo y restauración"
---

# ADR-007 · Recuperación regional por respaldo y restauración

- **Estado:** aceptada
- **Fecha:** 2026-10-21
- **Decide:** el autor
- **Origen:** Módulo 10

## Contexto y problema

Qué se hace si cae toda una región.

## Factores de decisión

- Costo de una segunda región activa.
- Objetivos de recuperación acordes con una entidad de bajo monto.

## Opciones consideradas

- Respaldo y restauración entre regiones con infraestructura como código
- Región secundaria en espera
- Dos regiones activas

## Resultado de la decisión

Respaldo y restauración entre regiones con RPO de 15 minutos y RTO de 4 horas. Decisión delegada por el autor al arquitecto; se revisa en este módulo.

## Consecuencias

- Bueno: costo bajo y reconstrucción reproducible con OpenTofu.
- Malo: 4 horas sin servicio ante una falla regional, que se acepta como riesgo (R-08).
- Revisión: un regulador podría exigir menos; entonces se pasa a región en espera y se actualiza este ADR.

## Más información

[Plan de recuperación](../resiliencia-y-operacion/plan-de-recuperacion.md)
