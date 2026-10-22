---
sidebar_position: 4
title: "ADR-004 · Adaptador por integración y API Gateway administrado"
---

# ADR-004 · Adaptador por integración y API Gateway administrado

- **Estado:** aceptada
- **Fecha:** 2026-10-21
- **Decide:** el autor
- **Origen:** Módulo 7

## Contexto y problema

Cómo se conecta Kuenta con redes de pago, Bre-B y terceros, y cómo se expone su propia API.

## Factores de decisión

- Aislar los cambios de cada tercero.
- Contratos estables y versionados.
- Seguridad en el borde.

## Opciones consideradas

- Un adaptador por integración detrás de un API Gateway REST administrado
- Un modelo canónico único
- Un backend para cada frontal (BFF)

## Resultado de la decisión

Un adaptador por integración, REST con OpenAPI 3.1 versionado en `/v1`, errores RFC 9457, `Idempotency-Key`, API Gateway REST administrado, sin BFF ni modelo canónico.

## Consecuencias

- Bueno: un cambio de un tercero toca un solo adaptador.
- Bueno: la resiliencia se configura por integración.
- Malo: el API Gateway tiene límites propios; el tiempo de espera de unos 29 segundos no está verificado (riesgo R-04).

## Más información

[Estilo de APIs](../integracion-y-apis/estilo-de-apis.md)
