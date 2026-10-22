---
sidebar_position: 5
title: "ADR-005 · Región São Paulo y cuentas separadas"
---

# ADR-005 · Región São Paulo y cuentas separadas

- **Estado:** aceptada
- **Fecha:** 2026-10-21
- **Decide:** el autor
- **Origen:** Módulo 8

## Contexto y problema

Dónde corre Kuenta y cómo se aíslan los entornos.

## Factores de decisión

- Colombia no tiene región de AWS.
- Menor latencia posible.
- Separación de entornos y de funciones.

## Opciones consideradas

- São Paulo (`sa-east-1`)
- Otra región de AWS
- Alojamiento local sin nube pública

## Resultado de la decisión

Región `sa-east-1` y cuentas separadas de producción, pruebas y seguridad y registros.

## Consecuencias

- Bueno: región más cercana con los servicios necesarios (por confirmar).
- Bueno: el aislamiento por cuenta limita el daño de un error o de un atacante.
- Malo: los datos quedan en Brasil, que aún no figura en la lista de países adecuados de la SIC (riesgo R-02).

## Más información

[Decisiones de AWS](../arquitectura-en-aws/decisiones.md)
