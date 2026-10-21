---
sidebar_position: 3
title: Puerta de entrada y modelo canónico
---

# Puerta de entrada y modelo canónico

Decisión C del Módulo 7.

| # | Decisión | Motivo |
|---|---|---|
| C1 | **API gateway gestionado** delante del monolito, sin lógica de negocio: autenticación, límite de peticiones, WAF, validación contra OpenAPI, mTLS para terceros y separación de superficies | Quita trabajo repetitivo al monolito. El tipo (REST API o HTTP API) se decide en el Módulo 8 |
| C2 | **Sin BFF por ahora** | Hay tres grupos de rutas con permisos distintos (clientes, terminales, back-office). Se crea un BFF solo si las necesidades de los canales divergen de forma medible |
| C3 | **Sin modelo canónico global** | Cada adaptador traduce. ISO 20022 vive solo en el adaptador de Bre-B. El [catálogo de eventos](../datos-y-consistencia/eventos.md) es el único vocabulario compartido: versionado y sin datos personales |
| C4 | Las puertas públicas internas son interfaces de código | Si un módulo se vuelve servicio, su interfaz se publica como OpenAPI |

## Nota sobre costo y latencia

Según la [documentación de AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html), solo el tipo *REST API* ofrece WAF, claves de API con planes de uso, validación de peticiones y *endpoints* privados; ambos tipos admiten mTLS. Cada salto suma latencia, y Bre-B exige respuesta en 20 s: se mide en el Módulo 8.

## Modelo canónico: por qué no

Un modelo único para todos obliga a que cada cambio pase por un acuerdo general y termina siendo el mínimo común de todos. Con pocos módulos y un equipo, la traducción en el borde de cada integración es más barata de mantener. Se reevalúa si el número de integraciones crece mucho.
