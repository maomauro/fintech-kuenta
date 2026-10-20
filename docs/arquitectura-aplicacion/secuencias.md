---
sidebar_position: 3
title: Secuencias UML
---

# Secuencias UML

Tres flujos de [casos de uso](../requisitos/casos-de-uso.md), dibujados como diagramas de secuencia UML. Se generan desde vistas dinámicas del mismo modelo C4, así que usan los mismos nombres de personas, aplicaciones, módulos y sistemas externos. Cada flecha entre módulos es una llamada a su puerta pública.

## Abrir un depósito (CU-01)

Registra al cliente, valida su identidad con la Registraduría (simulada), consulta las listas restrictivas, crea el depósito y notifica. Requisitos RF-01 a RF-06.

```mermaid
sequenceDiagram

  actor 1 as Cliente<br />[Persona]
  participant 16 as Aplicación del cliente<br />[Contenedor: Aplicación móvil]
  participant 20 as Identidad y apertura<br />[Módulo]
  participant 6 as Registraduría Nacional (simulada)<br />[Sistema de software]
  participant 24 as Cumplimiento y riesgo<br />[Módulo]
  participant 7 as Proveedor de listas restrictivas<br />[Sistema de software]
  participant 21 as Cuentas y depósitos<br />[Módulo]
  participant 26 as Notificaciones<br />[Módulo]
  participant 11 as Proveedor de notificaciones<br />[Sistema de software]
  participant 27 as Auditoría<br />[Módulo]

  1->>16: Envía sus datos, las fotos y la autorización
  16->>20: Registra al cliente<br />[HTTPS]
  20->>6: Valida la identidad
  20->>24: Pide consultar listas
  24->>7: Consulta listas restrictivas
  20->>21: Pide crear el depósito
  20->>26: Avisa el resultado
  26->>11: Pide enviar la notificación
  20->>27: Registra
```

## Transferir entre cuentas Kuenta (CU-05)

Es una operación **interna**: el módulo Pagos le pide a Cuentas verificar destino, saldo y tope, y debitar y acreditar en **una sola transacción**. Si algo falla, la base de datos deshace todo y el saldo nunca queda a medias ([PA-02](../arquitectura-empresarial/principios.md#pa-02-el-dinero-siempre-cuadra)). Requisitos RF-08 y RF-12.

```mermaid
sequenceDiagram

  actor 1 as Cliente<br />[Persona]
  participant 16 as Aplicación del cliente<br />[Contenedor: Aplicación móvil]
  participant 22 as Pagos y transferencias<br />[Módulo]
  participant 24 as Cumplimiento y riesgo<br />[Módulo]
  participant 21 as Cuentas y depósitos<br />[Módulo]
  participant 26 as Notificaciones<br />[Módulo]
  participant 11 as Proveedor de notificaciones<br />[Sistema de software]
  participant 27 as Auditoría<br />[Módulo]

  1->>16: Pide transferir
  16->>22: Solicita la transferencia<br />[HTTPS]
  22->>24: Pide revisión antifraude
  22->>21: Verifica destino, saldo y tope, y debita y acredita en una sola transacción
  22->>26: Avisa el resultado
  26->>11: Pide enviar la notificación
  22->>27: Registra
```

## Depositar efectivo en un corresponsal (CU-03)

El orden importa: Kuenta **autoriza antes** de que el corresponsal reciba el dinero y **acredita después** de que lo confirma. La flecha punteada es una respuesta. Requisitos RF-09 y RF-10.

```mermaid
sequenceDiagram

  actor 2 as Corresponsal<br />[Persona]
  participant 17 as Terminal del corresponsal<br />[Contenedor: Aplicación de terminal]
  participant 23 as Efectivo y corresponsales<br />[Módulo]
  participant 21 as Cuentas y depósitos<br />[Módulo]
  participant 24 as Cumplimiento y riesgo<br />[Módulo]
  participant 26 as Notificaciones<br />[Módulo]
  participant 27 as Auditoría<br />[Módulo]

  2->>17: Ingresa el depósito del cliente
  17->>23: Pide autorizar el depósito<br />[HTTPS]
  23->>21: Verifica cuenta activa y tope
  23->>24: Pide revisión antifraude
  23-->>17: Autoriza recibir el efectivo<br />[HTTPS]
  17->>23: Confirma que recibió el efectivo<br />[HTTPS]
  23->>21: Acredita el valor
  23->>26: Avisa el resultado
  23->>27: Registra
```

## Qué no muestran

- Los caminos de fallo: la revisión manual de lo retenido, el rechazo por tope o los reintentos. Se detallan con el modelo de eventos y las sagas en el Módulo 6 (datos y consistencia).
- La transferencia por Bre-B, que es externa y por eso necesita reserva, confirmación y compensación. Se diseña en los Módulos 6 y 7.

:::note Por verificar
La exportación de vistas dinámicas a diagrama de secuencia de Mermaid está documentada por Structurizr ([Exportar a Mermaid](https://docs.structurizr.com/export/mermaid)); el resultado se revisa visualmente en el sitio.
:::
