---
sidebar_position: 4
title: Resiliencia de las integraciones
---

# Resiliencia de las integraciones

Decisión D del Módulo 7: **qué pasa cuando un tercero falla**.

## D1. Técnicas

- **Tiempo límite explícito** en cada llamada.
- **Reintentos solo si la operación es idempotente**, con espera creciente y aleatoria.
- **Cortacircuitos:** tras fallos seguidos se deja de llamar un rato.
- **Compartimentos (*bulkhead*):** cada integración tiene su propio grupo de recursos para que una lenta no ahogue a las demás.
- **Identificador de correlación** en toda llamada y registro.

Los valores concretos (tiempos, reintentos, umbrales) se fijan en el Módulo 10.

## D2. Comportamiento por integración

| Integración | Si falla |
|---|---|
| Bre-B, enviar | La transferencia queda *pendiente* y se concilia. Si ya se sabe que no está disponible, se rechaza **antes** de reservar |
| Bre-B, recibir | Se responde con rechazo, no con silencio |
| Registraduría | La apertura queda «en validación» y se reintenta. Nunca se abre sin validar |
| Listas restrictivas | Se espera. No se aprueba sin consulta. La revisión continua se aplaza y queda registrada |
| UIAF y Superfinanciera | Cola persistente; alerta cerca del plazo legal |
| Redes de corresponsales | El terminal sin conexión no opera. Alerta si falta el lote de conciliación |
| Notificaciones y sistema contable | Nunca bloquean la operación |

**Regla:** lo accesorio nunca bloquea; lo regulatorio nunca se omite.

## D3. Simuladores y pruebas

Cada tercero tiene un simulador para desarrollar y probar. Bre-B exige además [pruebas de certificación](https://d1b4gd4m8561gs.cloudfront.net/sites/default/files/reglamentacion/archivos/ceos_dsp-470_Asunto_19_abr_4_2025.pdf) (circular DSP-470).
