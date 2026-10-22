---
sidebar_position: 14
title: "Módulo 14 · Gobierno y evolución"
---

# Módulo 14 · Gobierno y evolución

**Entregable:** lineamientos de gobierno y plan de evolución. Tres páginas del sitio. Es solo documentación.

Con las decisiones y los riesgos escritos, la arquitecta o el arquitecto define **cómo se mantiene la arquitectura con el tiempo**: quién decide, qué se verifica solo, cuándo se extrae un módulo y hacia dónde evoluciona Kuenta.

## Qué se hizo

1. Se investigaron funciones de aptitud, la verificación de módulos de Spring Modulith y el patrón Strangler Fig.
2. Se definió un gobierno ligero: clasificación de decisiones, revisión de ADR y excepciones (decisión A).
3. Se asignaron funciones de aptitud a los principios y un calendario de revisiones (decisión B).
4. Se fijaron los umbrales y el proceso de extracción de módulos (decisión C).
5. Se trazó el plan de evolución en tres horizontes y la cadencia de actualización (decisiones D y E).

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Lineamientos de gobierno](../gobierno-y-evolucion/lineamientos-de-gobierno.md) | Quién decide, funciones de aptitud, deuda técnica y calendario de revisiones |
| [Extracción de módulos](../gobierno-y-evolucion/extraccion-de-modulos.md) | Umbrales, candidatos y proceso |
| [Plan de evolución](../gobierno-y-evolucion/plan-de-evolucion.md) | Horizontes, evoluciones posibles y cadencia de actualización |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Gobierno | Ligero, sin comité: decisiones difíciles de revertir exigen ADR y revisión asíncrona; excepciones con caducidad | PA-06: lo más simple que cumpla |
| B. Funciones de aptitud | Ocho verificaciones automáticas ligadas a los principios | Que los principios se cumplan sin revisión manual |
| C. Extracción | Cinco señales medidas, proceso gradual y orden probable de candidatos | PA-07: evolución en pasos pequeños |
| D. Plan | Tres horizontes (0 a 6, 6 a 12 y 12 a 24 meses) con disparadores | Evolucionar por señales, no por fechas |
| E. Entregable | Tres páginas con calendario de revisiones y cadencia de actualización | Mantener la arquitectura viva |

## Estado

- [x] Lineamientos de gobierno
- [x] Funciones de aptitud y calendario de revisiones
- [x] Umbrales y proceso de extracción
- [x] Plan de evolución y cadencia de actualización
- [ ] Calibrar los umbrales de extracción y el 15 % de deuda técnica con datos reales
- [ ] Verificar la figura legal necesaria para créditos y la obligatoriedad de finanzas abiertas
- [ ] Confirmar el número y la fecha de la próxima versión LTS de Java

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario) a [13](./decisiones-y-trade-offs.md#glosario).

| Sigla o término | Significado |
|---|---|
| Función de aptitud (fitness function) | Verificación automática de una característica de la arquitectura |
| Strangler Fig | Patrón para reemplazar o extraer partes de un sistema de forma gradual |
| Gobierno ligero | Reglas claras y verificaciones automáticas en lugar de comités |
| Disparador | Condición medida que activa un cambio del plan |
