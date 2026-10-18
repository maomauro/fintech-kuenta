---
sidebar_position: 4
title: "Módulo 4 · Arquitectura empresarial ligera"
---

# Módulo 4 · Arquitectura empresarial ligera

**Entregable:** mapa de capacidades y principios de arquitectura (en Archi).

Antes de elegir tecnologías, una arquitecta o un arquitecto describe **qué necesita saber hacer la empresa** y **qué reglas guían las decisiones**. Es una arquitectura empresarial *ligera*: solo lo necesario para decidir bien, sin el peso de un marco completo.

## Qué se hizo

1. Se investigó cómo se construye un mapa de capacidades y cómo se redactan los principios de arquitectura.
2. Se definió un mapa de **dos niveles**: 7 dominios y 27 capacidades, derivadas de los procesos, las épicas y la regulación.
3. Cada capacidad se clasificó por tipo (diferenciadora, obligatoria o de apoyo) y por release.
4. Se redactaron **8 principios** en formato TOGAF, ordenados por prioridad.
5. Se generó el modelo en Archi con dos vistas y se publicaron las imágenes.

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Mapa de capacidades](../arquitectura-empresarial/mapa-de-capacidades.md) | Imágenes, dominios y catálogo de 27 capacidades |
| [Principios de arquitectura](../arquitectura-empresarial/principios.md) | PA-01 a PA-08 con justificación e implicaciones |
| `modelos/archi/kuenta.archimate` | El modelo en Archi, con las capacidades y los principios |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| Niveles del mapa | Dos: dominios y capacidades | Kuenta es pequeña; un tercer nivel solo para lo crítico |
| Origen de las capacidades | Procesos, épicas y regulación, más un grupo de apoyo sin detallar | Mantiene la trazabilidad con lo ya definido |
| Dominios de negocio | Clientes e identidad; Cuentas y depósitos; Pagos y transferencias; Efectivo y corresponsales; Riesgo y cumplimiento; Atención y experiencia; Gestión corporativa y apoyo | Son la base de los límites de la aplicación del Módulo 5 |
| Coloreado | Por tipo de capacidad; el release como propiedad y segunda vista | Kuenta parte de cero, así que no hay madurez que medir |
| Principios | Formato TOGAF, 8 principios, el orden marca la prevalencia | Siguen la prioridad de los atributos de calidad |

## Estado

- [x] Mapa de capacidades en dos niveles
- [x] Clasificación por tipo y release
- [x] Principios de arquitectura
- [x] Modelo en Archi
- [ ] Contrastar los criterios con la especificación oficial de ArchiMate y con BIAN
- [ ] Abrir el modelo en Archi y confirmar que las vistas se ven bien

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario), [1](./caso-de-negocio.md#glosario), [2](./requisitos.md#glosario) y [3](./metodologia-agil.md#glosario).

| Sigla o término | Significado |
|---|---|
| BIAN | *Banking Industry Architecture Network*: red que publica un modelo de referencia de capacidades para la banca |
| Capacidad de negocio | Lo que una organización necesita saber hacer para cumplir su estrategia; combina personas, procesos, información y tecnología |
| Dominio de negocio | Grupo de capacidades relacionadas que comparten conocimiento y datos |
| Mapa de calor | Mapa de capacidades coloreado según un criterio, como el tipo, la madurez o el release |
| Mapa de capacidades | Representación visual de las capacidades de una organización, agrupadas por niveles |
| Principio de arquitectura | Regla general que guía las decisiones de diseño; tiene nombre, enunciado, justificación e implicaciones |
