---
sidebar_position: 10
title: "ADR-010 · Estimación anual y compromisos de ahorro tras medir"
---

# ADR-010 · Estimación anual y compromisos de ahorro tras medir

- **Estado:** aceptada
- **Fecha:** 2026-10-21
- **Decide:** el autor
- **Origen:** Módulo 12

## Contexto y problema

Cómo se estima el costo y cuándo se compromete gasto.

## Factores de decisión

- No comprometer gasto sin datos.
- Total anual como unidad de decisión.

## Opciones consideradas

- Estimar con supuestos explícitos y comprometer tras 3 meses
- Comprometer a 1 o 3 años desde el inicio
- No estimar hasta tener tráfico

## Resultado de la decisión

Estimación anual con supuestos explícitos y planes de ahorro solo después de medir 3 meses de uso estable.

## Consecuencias

- Bueno: el gasto comprometido se basa en datos.
- Malo: durante los primeros meses se paga a tarifa normal.
- Riesgo: los supuestos de volumen pueden estar lejos de la realidad (R-09).

## Más información

[Optimización y FinOps](../costos-finops/optimizacion-y-finops.md)
