---
sidebar_position: 3
title: "ADR-003 · Libro mayor de partida doble, outbox y sagas, sin SQS ni SNS"
---

# ADR-003 · Libro mayor de partida doble, outbox y sagas, sin SQS ni SNS

- **Estado:** aceptada
- **Fecha:** 2026-10-21
- **Decide:** el autor
- **Origen:** Módulo 6

## Contexto y problema

Cómo se garantiza la consistencia del dinero y cómo se comunican los eventos.

## Factores de decisión

- Ningún saldo se modifica sin asiento.
- Atomicidad entre el cambio de datos y la publicación del evento.
- Pocas piezas que operar.

## Opciones consideradas

- Libro mayor de partida doble con outbox y sagas
- Saldo mutable por cuenta
- Mensajería administrada (SQS y SNS) como canal de eventos

## Resultado de la decisión

Libro mayor de partida doble en la base de datos, outbox transaccional, sagas con compensación para los flujos largos y eventos dentro del monolito.

## Consecuencias

- Bueno: cada movimiento es auditable y el saldo se reconstruye.
- Bueno: sin colas externas, hay menos servicios y menos costo.
- Malo: si se extrae un módulo, habrá que introducir un canal de mensajes (Módulo 14).
- Malo: el outbox exige limpieza y vigilancia de eventos atascados.

## Más información

[Datos y consistencia](../datos-y-consistencia/modelo-de-datos.md)
