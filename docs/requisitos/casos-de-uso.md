---
sidebar_position: 4
title: Casos de uso
---

# Casos de uso

Qué quiere lograr cada **actor** con el sistema. Cada caso se apoya en un proceso BPMN del [Módulo 1](../modulos/caso-de-negocio.md) y en requisitos del [catálogo](./requisitos-funcionales.md).

| Id | Actor | Caso de uso | Proceso | Requisitos |
|---|---|---|---|---|
| CU-01 | Cliente | Abrir un depósito de bajo monto desde la app | Abrir depósito | RF-01 a RF-06 |
| CU-02 | Cliente | Completar su información tras la apertura | Completar información e inactivos | RF-07 |
| CU-03 | Cliente | Depositar efectivo en un corresponsal | Depositar efectivo | RF-08 a RF-10 |
| CU-04 | Cliente | Retirar efectivo en un corresponsal | Retirar efectivo | RF-08, RF-11 |
| CU-05 | Cliente | Transferir a otra cuenta Kuenta | Transferencia entre cuentas | RF-08, RF-12 |
| CU-06 | Cliente | Transferir a otra entidad por Bre-B | Transferencia Bre-B | RF-08, RF-13 |
| CU-07 | Cliente | Consultar saldo y movimientos | Sin proceso propio | RF-22 |
| CU-08 | Cliente | Presentar una queja o un reclamo | Atender queja | RF-23 |
| CU-09 | Corresponsal | Registrar un depósito o un retiro en el terminal | Depositar y retirar efectivo | RF-09 a RF-11 |
| CU-10 | Analista de cumplimiento | Revisar lo retenido y decidir si se libera o se rechaza | Revisión manual | RF-05, RF-15 a RF-17 |
| CU-11 | Kuenta (sistema) | Terminar un depósito inactivo, avisando antes | Completar información e inactivos | RF-14 |
| CU-12 | Regulador | Recibir los reportes y consultar la auditoría | Revisión manual | RF-17, RF-18 |

El diagrama UML de estos casos de uso está en `modelos/uml/casos-de-uso.drawio` (editable en draw.io). Las secuencias de CU-01, CU-03 y CU-05 están en [Secuencias UML](../arquitectura-aplicacion/secuencias.md), del Módulo 5.
