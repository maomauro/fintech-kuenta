---
sidebar_position: 8
title: "ADR-008 · Observabilidad con servicios de AWS, sin SIEM aparte"
---

# ADR-008 · Observabilidad con servicios de AWS, sin SIEM aparte

- **Estado:** aceptada
- **Fecha:** 2026-10-21
- **Decide:** el autor
- **Origen:** Módulo 10

## Contexto y problema

Cómo se detectan y analizan los eventos de seguridad y de operación.

## Factores de decisión

- Costo de una herramienta adicional.
- Cumplir la detección y respuesta exigidas.
- Equipo pequeño.

## Opciones consideradas

- CloudWatch, GuardDuty y Security Hub
- SIEM de terceros
- SOC externo

## Resultado de la decisión

CloudWatch con alarmas, GuardDuty y Security Hub; sin SIEM aparte. Las alertas llegan por SNS solo como aviso.

## Consecuencias

- Bueno: sin licencias adicionales y con integración nativa.
- Malo: sin correlación avanzada ni analistas dedicados; el análisis queda para un SOC si el volumen o el regulador lo exigen.

## Más información

[Observabilidad y operación](../resiliencia-y-operacion/observabilidad-y-operacion.md)
