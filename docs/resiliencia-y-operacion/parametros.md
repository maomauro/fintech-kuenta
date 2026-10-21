---
sidebar_position: 3
title: Parámetros
---

# Parámetros

Decisión C del Módulo 10: los **valores** que los Módulos 6, 7 y 9 dejaron pendientes. Son **propuestas** que se ajustan con las pruebas y los simulacros; ninguno sale de una norma, salvo donde se indica.

## C1. Sagas ([Módulo 6](../datos-y-consistencia/sagas.md))

| Parámetro | Valor |
|---|---|
| Vencimiento de la autorización de un depósito en efectivo | 10 minutos |
| Transferencia por Bre-B en estado Pendiente: reconciliar cada | 5 minutos |
| Paso de Pendiente a revisión manual | A las 24 horas |
| Reserva de una operación en Pendiente | Nunca se libera sin conocer el resultado |

## C2. Integraciones ([Módulo 7](../integracion-y-apis/resiliencia.md))

| Integración | Tiempo límite de la llamada | Notas |
|---|---|---|
| Bre-B, enviar | 15 s | Deja margen dentro de los 20 s totales de la orden |
| Registraduría | 10 s | Apertura «en validación» si falla |
| Listas restrictivas | 5 s | Sin consulta no hay aprobación |
| Proveedor de notificaciones | 3 s | Nunca bloquea |

| Parámetro | Valor |
|---|---|
| Reintentos (solo si la operación es idempotente) | 3, con espera de 1, 2 y 4 segundos más aleatoriedad |
| Cortacircuitos | Se abre con 5 fallos seguidos; prueba de nuevo a los 30 segundos |
| Compartimentos | Máximo de conexiones simultáneas por integración, ajustado con pruebas de carga |

## C3. Seguridad ([Módulo 9](../seguridad-y-cumplimiento/controles.md))

| Parámetro | Valor |
|---|---|
| Prueba de penetración | Una al año, y tras cambios grandes |
| Vulnerabilidades críticas | Corregidas en 7 días como máximo (RNF-01) |
| Prueba de continuidad con ciberataque simulado | Una al año (Circular 007, 4.1.7) |

## C4. Lo que sigue pendiente

- Plazos de retención de registros y del SARLAFT: los fija la norma; hasta confirmarlos, nada se borra.
- Plazo de reporte de incidentes a la Superintendencia.
- Umbrales para extraer un módulo a servicio: se fijan en el Módulo 14, con los datos que entregue la observabilidad.
