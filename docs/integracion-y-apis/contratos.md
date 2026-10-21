---
sidebar_position: 5
title: Contratos de ejemplo
---

# Contratos de ejemplo

Tres contratos OpenAPI 3.1 en la carpeta [`contratos-api/`](https://github.com/maomauro/fintech-kuenta/tree/main/contratos-api). Son **ilustrativos**: muestran el estilo definido, no son el contrato oficial de Bre-B (los anexos técnicos no son públicos, por eso no se escribió).

Los esquemas compartidos (dinero, error, cabeceras) están en [`comunes.yaml`](https://github.com/maomauro/fintech-kuenta/blob/main/contratos-api/comunes.yaml).

## Transferencias (clientes)

Archivo: [`transferencias.openapi.yaml`](https://github.com/maomauro/fintech-kuenta/blob/main/contratos-api/transferencias.openapi.yaml)

| Operación | Ruta | Notas |
|---|---|---|
| Consultar destino | `POST /transferencias/consultas-destino` | Devuelve el nombre del beneficiario enmascarado antes de confirmar (RF-13; Bre-B, DSP-465, num. 6.1.e) |
| Crear transferencia | `POST /transferencias` | `Idempotency-Key` obligatoria. Destino: depósito Kuenta o llave Bre-B. 201 si es interna, 202 `en_proceso` si va por Bre-B |
| Consultar transferencia | `GET /transferencias/{transferenciaId}` | Estados al cliente: `en_proceso`, `completada`, `rechazada`. **Nunca** revela una retención de cumplimiento |

## Efectivo (terminales)

Archivo: [`efectivo.openapi.yaml`](https://github.com/maomauro/fintech-kuenta/blob/main/contratos-api/efectivo.openapi.yaml)

| Operación | Ruta | Notas |
|---|---|---|
| Autorizar depósito | `POST /efectivo/depositos/autorizaciones` | Antes de recibir el efectivo |
| Confirmar depósito | `POST /efectivo/depositos/autorizaciones/{id}/confirmacion` | 409 `AUTORIZACION_VENCIDA` si pasó el plazo: no se acredita nada |
| Autorizar retiro | `POST /efectivo/retiros` | Debita y autoriza la entrega |
| Confirmar retiro | `POST /efectivo/retiros/{id}/confirmacion` | `entregado` o `no_entregado`; este último compensa con un movimiento contrario |
| Consultar operación | `GET /efectivo/operaciones/{id}` | Para el terminal que perdió la respuesta |

## Movimientos (consulta)

Archivo: [`movimientos.openapi.yaml`](https://github.com/maomauro/fintech-kuenta/blob/main/contratos-api/movimientos.openapi.yaml)

| Operación | Ruta | Notas |
|---|---|---|
| Saldo | `GET /depositos/{id}/saldo` | Saldo, reservado y disponible |
| Movimientos | `GET /depositos/{id}/movimientos` | Filtros `desde`, `hasta`, `tipo`; `limite` de 1 a 100 (50 por defecto); `cursor` |

## Validación

Se comprobó que el YAML sea válido y que todas las referencias internas se resuelvan. **No se ha pasado por un validador oficial de OpenAPI.**
