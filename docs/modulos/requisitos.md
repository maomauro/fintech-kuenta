---
sidebar_position: 2
title: "Módulo 2 · Requisitos, restricciones y regulación"
---

# Módulo 2 · Requisitos, restricciones y regulación

**Entregable:** catálogo de requisitos y atributos de calidad priorizados.

Un arquitecto no diseña a partir de lo que cree que hace falta, sino de lo que se exige: el negocio, la ley y los límites técnicos. Este módulo convierte el caso de negocio en requisitos medibles, antes de elegir ninguna tecnología.

## Qué se hizo

1. Se **investigó la regulación colombiana** antes de definir nada, en dos rondas.
2. Se actualizaron las definiciones del Módulo 1 que la regulación cambiaba, en una sola pasada.
3. Se dibujaron cuatro procesos BPMN adicionales, hasta tener ocho.
4. Se derivaron **24 requisitos funcionales** de los procesos y de las normas.
5. Se definieron y priorizaron **10 atributos de calidad** con metas medibles.
6. Se listaron las **restricciones** y los **casos de uso**.

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Requisitos funcionales](../requisitos/requisitos-funcionales.md) | RF-01 a RF-24, cada uno con su origen |
| [Atributos de calidad](../requisitos/atributos-de-calidad.md) | RNF-01 a RNF-10, priorizados y con meta |
| [Restricciones y regulación](../requisitos/restricciones-y-regulacion.md) | Lo que limita el diseño y las normas con su fuente |
| [Casos de uso](../requisitos/casos-de-uso.md) | Actores, objetivos y su relación con los procesos |

## Lo que cambió respecto al Módulo 1

| Antes | Ahora | Por qué |
|---|---|---|
| Fintech de ahorros, pagos y créditos | Fintech de depósitos y pagos, constituida como **SEDPE** | Una SEDPE no puede otorgar créditos |
| "Cuenta de ahorros" | **Depósito de bajo monto** | Es el término legal del Decreto 222 de 2020 |
| Sin tope | Saldo y débitos mensuales hasta **8 SMLMV** | Lo exige el producto |
| Transferencias solo entre cuentas Kuenta | También **a otras entidades por Bre-B** | Decisión de producto |
| Tres procesos BPMN | **Ocho** | Cada requisito debe poder rastrearse a un proceso |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| Figura legal | SEDPE | Permite captar depósitos de bajo monto y ofrecer pagos |
| Nombre técnico del producto | Depósito de bajo monto | Término legal; el nombre comercial se valida con un abogado |
| Bre-B | Dentro de la primera versión | Un depósito aislado de los demás bancos tiene poco valor |
| Finanzas abiertas | Fuera, como etapa siguiente | Falta verificar desde cuándo son obligatorias |
| Orden de prioridad de la calidad | Seguridad, integridad, disponibilidad, cumplimiento, rendimiento | Es dinero de otras personas |
| Dimensionamiento | 50.000 clientes el primer año y 50 transacciones por segundo de pico | Hipótesis ficticia, a validar |
| Regla de trabajo | Investigar primero, definir después | Evita rehacer definiciones |

## Estado

- [x] Regulación investigada y verificada (con puntos pendientes)
- [x] Definiciones del Módulo 1 actualizadas
- [x] Procesos BPMN completos
- [x] Requisitos funcionales
- [x] Atributos de calidad priorizados
- [x] Restricciones y casos de uso
- [ ] Verificar en fuente oficial lo marcado como pendiente

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario) y [1](./caso-de-negocio.md#glosario).

| Sigla o término | Significado |
|---|---|
| Atributo de calidad | Propiedad que el sistema debe cumplir bien, como seguridad o disponibilidad; también se llama requisito no funcional |
| Caso de uso | Lo que un actor quiere lograr con el sistema, descrito sin entrar en cómo se construye |
| DORA | *DevOps Research and Assessment*: cuatro métricas de entrega de software (frecuencia de despliegue, tiempo de entrega, tasa de fallo de cambios y tiempo de recuperación) |
| Fogafín | Fondo de Garantías de Instituciones Financieras: seguro de depósitos; cubre hasta $50.000.000 por persona |
| GMF | Gravamen a los Movimientos Financieros: impuesto sobre retiros y transferencias, con exenciones para depósitos de bajo monto |
| Listas restrictivas | Listas de personas con las que una entidad no debe vincularse por riesgo de lavado de activos |
| p95 | Percentil 95: el 95 % de las operaciones termina dentro de ese tiempo |
| Requisito funcional | Algo que el sistema debe hacer |
| Restricción | Límite al diseño que viene de la ley, de la figura legal o de una decisión ya tomada |
| RPO | *Recovery Point Objective*: máximo de datos que se pueden perder en una falla, medido en tiempo |
| RTO | *Recovery Time Objective*: tiempo máximo que puede tardar el servicio en volver tras una falla |
| SAC | Sistema de Atención al Consumidor Financiero: políticas y procesos para atender consultas, quejas y reclamos |
| SARLAFT | Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo |
| UIAF | Unidad de Información y Análisis Financiero: recibe los reportes de operaciones sospechosas |
| UVB | Unidad de Valor Básico: unidad con la que se expresa el tope de una transferencia por Bre-B |
| UVT | Unidad de Valor Tributario: unidad con la que se expresan los montos de los impuestos |
