---
sidebar_position: 3
title: Plan de releases
---

# Plan de releases

Cómo se reparte el backlog en entregas. La primera versión de Kuenta se entrega en **dos releases**: un MVP y un segundo release que la completa con las transferencias por Bre-B.

## Mapa de historias

Se lee de izquierda a derecha, siguiendo lo que hace un cliente. Cada columna es una actividad; debajo van las historias, separadas por release.

| Actividad | Release 1 (MVP) | Release 2 |
|---|---|---|
| Abrir el depósito | HU-01, HU-02, HU-03, HU-04, HU-05 | |
| Cumplir la regulación | HU-06, HU-07, HU-08, HU-11, HU-12, HU-13 | HU-23 |
| Mover efectivo | HU-14, HU-15 | |
| Transferir | HU-16 | HU-17 (Bre-B) |
| Proteger | HU-09, HU-10 | |
| Atender | HU-18, HU-19, HU-20, HU-21 | HU-22 |

## Release 1: MVP

El **mínimo legal y viable**: una persona puede abrir su depósito desde la app, meter y sacar efectivo en un corresponsal y transferir a otra cuenta Kuenta, con todo el control que la ley exige antes de operar.

- Incluye 20 de las 23 historias.
- No incluye nada que dependa de integrar un sistema externo de pagos, que es el punto de mayor riesgo de integración.

### Orden de construcción sugerido

1. **Apertura mínima:** HU-01, HU-02, HU-03, HU-05, HU-04.
2. **Control del producto:** HU-06 (listas restrictivas), HU-08 (tope) y HU-12 (auditoría).
3. **Efectivo:** HU-14 y HU-15.
4. **Transferencia entre cuentas:** HU-16.
5. **Protección:** HU-09, HU-10, HU-11 y HU-13.
6. **Atención:** HU-18 a HU-21 y HU-07.

El orden sigue los atributos de calidad: seguridad, integridad del dinero y auditoría se construyen antes de abrir el producto al público. Las historias HU-06 y HU-11 son **obligatorias antes de operar** y no se pueden dejar para después.

## Release 2: completa la primera versión

- **HU-17, transferencias por Bre-B.** Se mantiene dentro de la primera versión, tal como se decidió en el Módulo 2, pero se entrega después del MVP.
- **HU-23, terminación de depósitos inactivos.** Un depósito solo puede quedar sin fondos 3 meses después de abrirse, así que la historia debe estar lista antes de que pasen 3 meses de operación. Es un caso de **deuda de cumplimiento** controlada: se pospone con una fecha límite.
- **HU-22, aviso de cambios del contrato.** No hay cambios que avisar mientras el contrato no se modifica.

## Riesgos y supuestos del corte

- **Valor sin Bre-B.** Sin pagos a otras entidades, el producto es menos útil para el cliente. Es una hipótesis que se valida con el uso del MVP, no un hecho.
- **Si Bre-B resulta obligatoria para una SEDPE**, tendría que entrar en el MVP. Está marcado como pendiente de verificar en [restricciones y regulación](../requisitos/restricciones-y-regulacion.md).
- **El plazo de HU-23 es una decisión propia**, basada en que la regla de 3 meses no puede cumplirse antes. Debe revisarse si cambia la norma.
- No hay estimaciones de esfuerzo ni fechas: se definen cuando exista un equipo con capacidad medida.
