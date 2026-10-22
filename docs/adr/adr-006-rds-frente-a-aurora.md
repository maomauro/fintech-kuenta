---
sidebar_position: 6
title: "ADR-006 · RDS PostgreSQL Multi-AZ frente a Aurora"
---

# ADR-006 · RDS PostgreSQL Multi-AZ frente a Aurora

- **Estado:** aceptada
- **Fecha:** 2026-10-21
- **Decide:** el autor
- **Origen:** Módulos 8 y 12

## Contexto y problema

Qué motor y qué modo de alta disponibilidad usa la base de datos.

## Factores de decisión

- Failover sin pérdida de datos dentro de la región.
- Costo previsible.
- Operación simple.

## Opciones consideradas

- RDS PostgreSQL Multi-AZ
- Aurora PostgreSQL
- PostgreSQL propio sobre EC2

## Resultado de la decisión

RDS PostgreSQL Multi-AZ con `db.m7g.large` en producción.

## Consecuencias

- Bueno: standby sincrónico y recuperación a un punto en el tiempo.
- Bueno: la estimación del Módulo 12 la deja en unos 3.900 USD al año de instancia.
- Malo: no se comparó el precio de Aurora en São Paulo; queda como revisión con datos reales (riesgo R-09).

## Más información

[Tabla de servicios](../arquitectura-en-aws/tabla-de-servicios.md) y [Estimación anual](../costos-finops/estimacion-anual.md)
