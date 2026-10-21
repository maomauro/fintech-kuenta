---
sidebar_position: 7
title: "Módulo 7 · Integración y APIs"
---

# Módulo 7 · Integración y APIs

**Entregable:** contratos de ejemplo y mapa de integraciones. Cinco páginas del sitio, el mapa de integraciones (Mermaid y copia en draw.io) y tres contratos OpenAPI.

Con los datos y la consistencia definidos, la arquitecta o el arquitecto decide **cómo habla Kuenta con el mundo**: con quién, de qué manera, con qué estilo de API y qué pasa cuando un tercero falla. Este módulo no elige servicios de AWS; el tipo de API gateway se decide en el Módulo 8 y los valores de tiempos y reintentos en el Módulo 10.

## Qué se hizo

1. Se investigó lo que podía cambiar las definiciones: el compendio de Bre-B (DSP-465), las pruebas de certificación (DSP-470), los requisitos de la Registraduría, el Decreto 368 de 2026 de finanzas abiertas, los tipos de API gateway de AWS, el borrador de `Idempotency-Key` y las versiones de OpenAPI.
2. Se definió el mapa de integraciones y el módulo dueño de cada una (decisión A).
3. Se definió el estilo común de las APIs (decisión B).
4. Se definieron la puerta de entrada, el BFF y el modelo canónico (decisión C).
5. Se definió el comportamiento ante fallos de cada tercero (decisión D).
6. Se escribieron tres contratos OpenAPI de ejemplo y las páginas del sitio (decisión E).
7. Se corrigió el Módulo 5: la conciliación con las redes de corresponsales pasó de Pagos a **Efectivo**.

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Mapa de integraciones](../integracion-y-apis/mapa-de-integraciones.md) | Reglas, diagrama y tabla de integraciones |
| [Estilo de las APIs](../integracion-y-apis/estilo-de-apis.md) | REST, versión, errores, idempotencia, dinero y paginación |
| [Puerta de entrada y modelo canónico](../integracion-y-apis/gateway-y-modelo-canonico.md) | API gateway, BFF y por qué no hay modelo canónico global |
| [Resiliencia](../integracion-y-apis/resiliencia.md) | Técnicas y comportamiento por integración |
| [Contratos de ejemplo](../integracion-y-apis/contratos.md) | Descripción de los tres contratos |
| `contratos-api/*.yaml` | Los contratos OpenAPI |
| `modelos/integraciones/*.drawio` | Copia editable del mapa |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Mapa de integraciones | Un adaptador por integración dentro del módulo dueño; síncrono, asíncrono por outbox o por lotes; entradas de terceros en rutas y credenciales aparte | Los cambios de un tercero no se esparcen (PA-05) |
| B. Estilo de APIs | REST con JSON, OpenAPI 3.1 primero el contrato, `/v1`, RFC 9457, `Idempotency-Key`, 202 para Bre-B, dinero como texto decimal, cursor | Una sola forma de integrar; el dinero no se duplica ni pierde centavos |
| C. Gateway y modelo canónico | API gateway gestionado sin lógica de negocio; sin BFF; sin modelo canónico global | Poco equipo y pocos módulos: menos piezas |
| D. Resiliencia | Tiempo límite, reintentos idempotentes, cortacircuitos, compartimentos; lo accesorio no bloquea y lo regulatorio no se omite | Un tercero caído no tumba a Kuenta |
| E. Entregable | Tres contratos (transferencias, efectivo, movimientos); sin contrato de Bre-B | Los anexos técnicos de Bre-B no son públicos |

## Estado

- [x] Mapa de integraciones
- [x] Estilo de APIs
- [x] Puerta de entrada y modelo canónico
- [x] Resiliencia
- [x] Tres contratos OpenAPI
- [x] Páginas del sitio
- [x] Copia en draw.io
- [x] Corrección Efectivo → Redes en el Módulo 5
- [ ] Revisar la copia en draw.io abierta en la aplicación (hecha sin abrirla)
- [ ] Pasar los contratos por un validador oficial de OpenAPI
- [ ] Leer los anexos 2, 4 y 5 de la DSP-465 y la DSP-471: estados, consulta de estado, reintentos, reversos, idempotencia y disponibilidad de Bre-B
- [ ] Confirmar en el texto oficial si Bre-B es obligatorio para Kuenta (el umbral de 1.500.000 productos viene de un resumen de terceros)
- [ ] Investigar el canal y el formato de los reportes a UIAF y Superfinanciera
- [ ] Confirmar el camino real de acceso a la Registraduría y su costo
- [ ] Fijar tiempos límite, reintentos y umbrales (Módulo 10)
- [ ] Decidir el tipo de API gateway (Módulo 8)

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario) a [6](./datos-y-consistencia.md#glosario).

| Sigla o término | Significado |
|---|---|
| API gateway | Puerta de entrada gestionada que recibe las peticiones y aplica autenticación, límites y validación antes de pasarlas |
| BFF | *Backend for Frontend*: una API hecha a la medida de un canal (app, web) |
| Capa anticorrupción (adaptador) | Código que traduce entre el idioma de un tercero y el propio, para que no se filtre al resto |
| Bulkhead (compartimento) | Recursos separados por integración para que una lenta no afecte a las demás |
| Cortacircuitos | Dejar de llamar a un tercero un rato tras fallos seguidos |
| Bus de integración (ESB) | Intermediario central por donde pasan y se transforman los mensajes entre sistemas; aquí no se usa |
| Idempotency-Key | Cabecera con una llave única para que un reintento no repita el efecto |
| Modelo canónico | Formato único de datos al que todos los sistemas traducen; aquí no hay uno global |
| OpenAPI | Especificación para describir APIs REST en un archivo |
| RFC 9457 | Formato estándar de errores en HTTP (`problem+json`) |
| Contract-first | Escribir el contrato de la API antes que el código |
| mTLS | TLS en ambos sentidos: el cliente también se identifica con un certificado |
| DICE, SEBRA | Sistemas del Banco de la República de los que depende Bre-B (DSP-470) |
