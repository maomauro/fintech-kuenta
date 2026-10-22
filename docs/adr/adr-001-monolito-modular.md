---
sidebar_position: 1
title: "ADR-001 · Monolito modular con ocho módulos"
---

# ADR-001 · Monolito modular con ocho módulos

- **Estado:** aceptada
- **Fecha:** 2026-10-21
- **Decide:** el autor
- **Origen:** Módulo 5

## Contexto y problema

Cómo se organiza el código de Kuenta para entregar rápido sin perder la posibilidad de separar partes más adelante.

## Factores de decisión

- Equipo pequeño y una sola base de datos transaccional.
- Consistencia fuerte en el libro mayor.
- Costo y complejidad de operación bajos.
- Posibilidad de extraer módulos después.

## Opciones consideradas

- Monolito modular
- Microservicios desde el inicio
- Monolito sin módulos

## Resultado de la decisión

Monolito modular con ocho módulos, un esquema de base de datos por módulo y comunicación entre módulos solo por interfaces y eventos.

## Consecuencias

- Bueno: una transacción local protege el dinero y la operación es simple.
- Bueno: los límites permiten extraer un módulo con un umbral definido en el Módulo 14.
- Malo: se escala y se despliega todo junto.
- Malo: el acoplamiento puede crecer sin una verificación automática; ver ADR-002.

## Más información

[Estilo y límites](../arquitectura-aplicacion/estilo-y-limites.md)
