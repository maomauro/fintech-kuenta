---
sidebar_position: 2
title: Principios de arquitectura
---

# Principios de arquitectura

Reglas que guían **todas** las decisiones de diseño de Kuenta. Cada principio tiene cuatro partes (formato de TOGAF): nombre, enunciado, justificación e implicaciones. Se derivan de los [atributos de calidad](../requisitos/atributos-de-calidad.md) y de las [restricciones](../requisitos/restricciones-y-regulacion.md) ya definidos, y no dependen de ninguna tecnología.

## Qué principio prevalece

Cuando dos principios chocan, **gana el de menor número**: el orden sigue la prioridad de los atributos de calidad. Hay una excepción: una obligación legal expresa no se negocia, y si un principio choca con la ley, gana la ley.

## Resumen

| Id | Principio | Atributo de calidad que lo respalda |
|---|---|---|
| PA-01 | Seguridad y privacidad desde el diseño | RNF-01 |
| PA-02 | El dinero siempre cuadra | RNF-02 |
| PA-03 | Diseñar para fallar | RNF-03, RNF-06, RNF-09 |
| PA-04 | Cumplir es parte del diseño | RNF-04 |
| PA-05 | Un solo dueño por cada dato | RNF-02, RNF-04 |
| PA-06 | Lo más simple que cumpla | RNF-07 |
| PA-07 | Evolución en pasos pequeños | RNF-07 |
| PA-08 | Automatizar la entrega y la evidencia | RNF-04, RNF-07 |

## PA-01 Seguridad y privacidad desde el diseño

- **Enunciado:** toda decisión protege primero la información y el dinero de las personas.
- **Justificación:** es el dinero de otras personas y sus datos biométricos. Es el atributo de mayor prioridad y lo exige la Ley 1581 de 2012.
- **Implicaciones:** cifrado en tránsito y en reposo, autenticación de múltiples factores en las consolas, el mínimo de datos personales necesarios y revisión de seguridad dentro de la Definition of Done.

## PA-02 El dinero siempre cuadra

- **Enunciado:** ninguna operación se pierde, se duplica ni se deja a medias.
- **Justificación:** un error de saldo destruye la confianza y tiene consecuencias legales. Ante un conflicto, la exactitud prevalece sobre la velocidad.
- **Implicaciones:** operaciones que se pueden repetir sin efecto doble, registros de movimientos que no se modifican (las correcciones son nuevos asientos), conciliación diaria y manejo explícito de los fallos a medio camino.

## PA-03 Diseñar para fallar

- **Enunciado:** se asume que todo componente puede fallar y el sistema se recupera dentro de sus objetivos.
- **Justificación:** la disponibilidad meta es de 99,95 % en depósitos y transferencias, con RPO de 5 minutos y RTO de 1 hora. No se alcanza esperando que nada falle.
- **Implicaciones:** copias y recuperación probadas, observabilidad con alertas, degradación controlada y reintentos seguros.

## PA-04 Cumplir es parte del diseño

- **Enunciado:** cada obligación regulatoria es un requisito con dueño, historia y evidencia.
- **Justificación:** operar sin cumplir no es viable, y el trabajo regulatorio pospuesto se acumula como deuda de cumplimiento.
- **Implicaciones:** trazabilidad de la norma al requisito, la historia y la prueba; la Definition of Done incluye los requisitos regulatorios; registro de auditoría de cada operación.

## PA-05 Un solo dueño por cada dato

- **Enunciado:** cada dato pertenece a un dominio y los demás lo consultan, no lo copian ni lo modifican.
- **Justificación:** los datos duplicados se desincronizan y rompen la integridad y la auditoría.
- **Implicaciones:** acceso entre dominios por interfaces definidas y no por la base de datos de otro, y un catálogo de datos con su dominio responsable.

## PA-06 Lo más simple que cumpla

- **Enunciado:** se empieza con la solución más simple que cumpla los requisitos y se complica solo con una razón medible.
- **Justificación:** la complejidad innecesaria cuesta en operación y en fallos, sobre todo en un producto nuevo con un equipo pequeño.
- **Implicaciones:** cada separación o pieza nueva se justifica con un ADR (registro de decisión de arquitectura), con la razón y su medida.

## PA-07 Evolución en pasos pequeños

- **Enunciado:** los cambios son pequeños, frecuentes y reversibles.
- **Justificación:** los cambios pequeños fallan menos y se corrigen más rápido, que es lo que miden las métricas DORA.
- **Implicaciones:** pruebas automatizadas, despliegues frecuentes, cambios de datos compatibles con la versión anterior y capacidad de volver atrás.

## PA-08 Automatizar la entrega y la evidencia

- **Enunciado:** lo repetible se automatiza y la evidencia de auditoría se genera sola.
- **Justificación:** lo manual falla y consume tiempo; la evidencia reunida a mano llega tarde o incompleta.
- **Implicaciones:** un flujo de entrega continua, infraestructura como código y trazabilidad automática del requisito al despliegue (se diseña en el Módulo 11).

:::note Fuentes y estado
- Formato de un principio (nombre, enunciado, justificación, implicaciones): [KnowledgeHut](https://www.knowledgehut.com/blog/it-service-management/togaf-architecture-principles), una fuente secundaria; falta contrastarlo con el texto oficial de TOGAF.
- Los ocho principios son una **propuesta** derivada de los requisitos de Kuenta; se revisan al avanzar los módulos.
:::
