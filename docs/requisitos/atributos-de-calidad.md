---
sidebar_position: 2
title: Atributos de calidad
---

# Atributos de calidad

Lo que el sistema debe **cumplir bien**, no solo hacer. Están ordenados por prioridad: cuando dos atributos chocan, gana el de menor número. Las metas marcadas como *propuesta* no vienen de una norma sino de una decisión de arquitectura.

| # | Id | Atributo | Meta | Base |
|---|---|---|---|---|
| 1 | RNF-01 | Seguridad | Cifrado de la información confidencial en tránsito y en reposo; autenticación de múltiples factores en las consolas de administración; vulnerabilidades críticas corregidas en 7 días como máximo | Circular Externa 005 de 2019; el plazo es propuesta |
| 2 | RNF-02 | Integridad del dinero | Cero diferencias en saldos; ninguna operación duplicada; conciliación diaria con Bre-B y con los corresponsales | Propuesta |
| 3 | RNF-03 | Disponibilidad | Transferencias y depósitos: 99,95 % (unas 4,4 horas de caída al año). Resto de servicios: 99,9 % (unas 8,8 horas al año) | Circular Externa 005 de 2019 y Bre-B |
| 4 | RNF-04 | Cumplimiento y auditoría | 100 % de las operaciones con registro de auditoría; ubicación de los datos informada a la Superintendencia; aviso a la Superintendencia 15 días antes de procesar en la nube | Circular Externa 005 de 2019, SARLAFT |
| 5 | RNF-05 | Rendimiento | Transferencia por Bre-B de punta a punta en 20 segundos como máximo; transferencia entre cuentas Kuenta p95 de 3 segundos; consulta de saldo p95 de 2 segundos; apertura del depósito en 5 minutos como máximo | Documento técnico de Bre-B y propuesta |
| 6 | RNF-06 | Recuperación | RPO de 5 minutos y RTO de 1 hora como máximo | Propuesta (la norma no fija valores) |
| 7 | RNF-07 | Evolutividad | Agregar un producto sin reescribir lo existente; despliegue diario; menos de 15 % de cambios con fallo; recuperación de un fallo en menos de 1 hora (métricas DORA) | Objetivo de arquitectura |
| 8 | RNF-08 | Usabilidad e inclusión | App utilizable con conexión limitada; apertura sin visitar una oficina | Público objetivo |
| 9 | RNF-09 | Observabilidad | Alerta en menos de 5 minutos ante la caída de un servicio crítico | Propuesta |
| 10 | RNF-10 | Capacidad | 50.000 clientes el primer año y un pico de 50 transacciones por segundo | Hipótesis ficticia, a validar |

## Cómo leer las metas

- **p95:** el 95 % de las operaciones debe terminar dentro de ese tiempo.
- **RPO** (*Recovery Point Objective*): cuántos datos se pueden perder como máximo en una falla, medidos en tiempo.
- **RTO** (*Recovery Time Objective*): cuánto tiempo puede tardar el servicio en volver tras una falla.
- **DORA:** las cuatro métricas de entrega de software (frecuencia de despliegue, tiempo de entrega, tasa de fallo de cambios y tiempo de recuperación).

## Por qué este orden

El dinero de otras personas manda sobre todo lo demás: primero que sea seguro (1) y exacto (2), después que esté disponible (3) y que se pueda demostrar a un regulador (4). La velocidad (5) y la evolución (7) importan, pero ceden ante los cuatro primeros.

:::note Por verificar
- El contenido de la Circular Externa 007 de 2018 (ciberseguridad): el PDF consultado no traía su anexo.
- El porcentaje de disponibilidad que exige Bre-B: el documento técnico del Banco de la República no lo da.
- El valor de la UVB (Unidad de Valor Básico) en 2026, para comparar el tope de 1.000 UVB de Bre-B con el tope de 8 SMLMV.
:::
