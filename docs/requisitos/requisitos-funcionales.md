---
sidebar_position: 1
title: Requisitos funcionales
---

# Requisitos funcionales

Lo que el sistema debe **hacer**. Cada requisito nace de uno de los ocho procesos BPMN del [Módulo 1](../modulos/caso-de-negocio.md) o de una norma verificada en el [Módulo 2](../modulos/requisitos.md). Los procesos están en `modelos/bpmn/`.

## Identidad y apertura

| Id | Requisito | Origen |
|---|---|---|
| RF-01 | Registrar al cliente desde la app con sus datos y la fotografía de su documento y de su rostro | Proceso: abrir depósito |
| RF-02 | Pedir la autorización de tratamiento de datos personales, previa, expresa e informada, incluidos los datos biométricos | Ley 1581 de 2012 |
| RF-03 | Validar la identidad del cliente con la Registraduría Nacional del Estado Civil (simulada) | Proceso: abrir depósito |
| RF-04 | Consultar las listas restrictivas antes de abrir y de forma continua | SARLAFT |
| RF-05 | Enviar a revisión manual lo que no pase la validación de identidad | Proceso: abrir depósito |
| RF-06 | Crear el depósito de bajo monto sin monto mínimo, uno por persona | Decreto 222 de 2020 |
| RF-07 | Pedir al cliente completar su información restante dentro de 3 días hábiles tras la apertura | SARLAFT (debida diligencia simplificada) |

## Operación del depósito

| Id | Requisito | Origen |
|---|---|---|
| RF-08 | Controlar que el saldo y los débitos mensuales no superen 8 SMLMV (valor parametrizable) y bloquear lo que los supere | Decreto 222 de 2020 |
| RF-09 | Depositar efectivo en un corresponsal: verificar que la cuenta exista y esté activa, comprobar el tope y autorizar **antes** de que el corresponsal reciba el dinero | Proceso: depositar efectivo |
| RF-10 | Entregar el comprobante y acreditar el valor tras recibir el efectivo | Proceso: depositar efectivo |
| RF-11 | Retirar efectivo en un corresponsal: debitar primero y autorizar después la entrega | Proceso: retirar efectivo |
| RF-12 | Transferir entre cuentas Kuenta verificando destino, saldo y tope | Proceso: transferencia entre cuentas |
| RF-13 | Transferir a otras entidades por Bre-B: consultar el destino, mostrar el nombre enmascarado del beneficiario y el costo, reservar el valor, enviar la orden y confirmar el débito o liberar la reserva | Proceso: transferencia Bre-B, Decreto 1069 de 2025 |
| RF-14 | Terminar el depósito sin fondos por 3 meses o más, avisando antes al cliente y solo si no vuelve a depositar | Decreto 222 de 2020, proceso: completar información e inactivos |

## Control y cumplimiento

| Id | Requisito | Origen |
|---|---|---|
| RF-15 | Revisar cada movimiento con reglas antifraude y retener los sospechosos | Todos los procesos de movimiento |
| RF-16 | Permitir la revisión manual de lo retenido, con decisión de liberar o rechazar | Proceso: revisión manual |
| RF-17 | Reportar las operaciones sospechosas a la UIAF y entregar los reportes mínimos a la Superintendencia Financiera | SARLAFT |
| RF-18 | Dejar un registro de auditoría de cada operación | Interesado: reguladores |
| RF-19 | Calcular el GMF y controlar la exención de retiros hasta 65 UVT | Estatuto Tributario, art. 879 num. 25 |

## Atención al cliente

| Id | Requisito | Origen |
|---|---|---|
| RF-20 | Notificar al cliente el resultado de toda solicitud y operación | Convención de los procesos BPMN |
| RF-21 | Informar el costo antes de cada operación y publicar las tarifas | Ley 1328 de 2009 |
| RF-22 | Consultar saldo y movimientos, y entregar el extracto mensual sin costo | Ley 1328 de 2009 |
| RF-23 | Atender consultas, quejas y reclamos con número de radicado y acceso al defensor del consumidor financiero | Ley 1328 de 2009, proceso: atender queja |
| RF-24 | Avisar con antelación los cambios del contrato | Ley 1328 de 2009 |

:::note Por verificar
- La consecuencia de no completar la información en 3 días hábiles (RF-07).
- Los plazos de respuesta de quejas y reclamos (RF-23).
- La tarifa del GMF y el valor de la UVT en 2026 (RF-19).
:::

## Fuera de la primera versión

Créditos, pagos de servicios y recargas, tarjeta física, cobros a comercios, inversiones y **finanzas abiertas** (Decreto 368 de 2026, etapa siguiente). Los créditos no son posibles con la figura legal actual.
