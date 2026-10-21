---
sidebar_position: 2
title: Estilo de las APIs
---

# Estilo de las APIs

Decisión B del Módulo 7: **cómo se ven todas las APIs de Kuenta**, para que quien integre aprenda una sola vez.

| # | Decisión | Detalle |
|---|---|---|
| B1 | REST con JSON sobre HTTPS | Contrato primero, escrito en [OpenAPI](https://spec.openapis.org/oas/) 3.1.x. La última versión de la especificación es 3.2.1; se usa 3.1 por soporte amplio de herramientas |
| B2 | Versión en la ruta | `/v1`. Un cambio que rompe a quien integra crea `/v2` |
| B3 | Errores con RFC 9457 | `application/problem+json` más un `codigo` de negocio estable y un `idCorrelacion` |
| B4 | `Idempotency-Key` obligatoria en operaciones que mueven dinero | Misma llave y mismo contenido devuelve el resultado original. Misma llave y distinto contenido da 422. Operación en curso da 409 |
| B5 | Transferencia Bre-B responde 202 `en_proceso` | El cliente consulta el estado o recibe la notificación; no se bloquea la conexión |
| B6 | Dinero como texto decimal y moneda | `"50000.00"` con `COP`. Fechas en ISO 8601 y UTC |
| B7 | Paginación por cursor | Con filtros de fecha. Con datos nuevos entrando, la paginación por número de página repite o salta filas |
| B8 | Seguridad: solo principios | Detalle en el Módulo 9 |

La `Idempotency-Key` sigue el [borrador del IETF](https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header) (versión 07, octubre de 2025). **Es un borrador, no un RFC**: puede cambiar.

## Por qué el dinero va como texto

Un número JSON puede leerse como decimal binario y perder centavos. Como texto, el valor viaja exacto y coincide con el decimal exacto del [libro mayor](../datos-y-consistencia/libro-mayor.md).
