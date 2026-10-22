---
sidebar_position: 13
title: "Módulo 13 · Decisiones y trade-offs"
---

# Módulo 13 · Decisiones y trade-offs

**Entregable:** diez ADR, una tabla de trade-offs y una matriz de riesgos. Tres páginas en `docs/decisiones-y-trade-offs/` y diez archivos en `docs/adr/`. Es solo documentación.

Con todas las piezas de la arquitectura definidas, la arquitecta o el arquitecto deja **escritas las decisiones, lo que se sacrificó por cada una y los riesgos que se aceptan**.

## Qué se hizo

1. Se eligió el formato MADR 4.0 en español (decisión A).
2. Se verificó el stack del monolito: Java 25 LTS, Spring Boot 4.1 y Spring Modulith 2.1 (ADR-002).
3. Se registraron diez ADR, uno por decisión importante del curso (decisión B).
4. Se identificaron los puntos de compromiso y de sensibilidad (decisión C).
5. Se consolidaron los riesgos y pendientes del curso en una matriz (decisión D).

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Índice de ADR](../decisiones-y-trade-offs/indice-de-adrs.md) | Formato y lista de las diez decisiones |
| [ADR-001 a ADR-010](../adr/adr-001-monolito-modular.md) | Una decisión por archivo, con alternativas y consecuencias |
| [Trade-offs](../decisiones-y-trade-offs/trade-offs.md) | Puntos de compromiso y de sensibilidad |
| [Matriz de riesgos](../decisiones-y-trade-offs/matriz-de-riesgos.md) | Trece riesgos puntuados, con respuesta y origen |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Formato | MADR 4.0 en español, un archivo por ADR | Estándar abierto y breve |
| B. Alcance | Diez ADR; el ADR-002 es la única decisión nueva | Registrar lo decidido con sus alternativas |
| C. Trade-offs | Tabla estilo ATAM | Hacer visible lo que se sacrificó |
| D. Riesgos | Probabilidad por impacto de 1 a 5, con respuesta y responsable | Priorizar qué atender antes de producción |
| E. Stack | Java 25 LTS, Spring Boot 4.1 y Spring Modulith 2.1 | Stack del autor, soporte largo y verificación de módulos |

## Estado

- [x] Diez ADR
- [x] Trade-offs
- [x] Matriz de riesgos
- [ ] Confirmar la versión mínima de Java de Spring Boot 4.1 y la compatibilidad de Spring Modulith 2.1
- [ ] Comparar el precio de Aurora en São Paulo para revisar el ADR-006
- [ ] Atender los riesgos altos antes de producción (R-01, R-02, R-06, R-07, R-13)

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario) a [12](./costos-finops.md#glosario).

| Sigla o término | Significado |
|---|---|
| ADR | Architecture Decision Record: registro de una decisión de arquitectura |
| MADR | Markdown Architectural Decision Records: formato abierto para escribir ADR |
| ATAM | Architecture Tradeoff Analysis Method: método para evaluar una arquitectura contra sus atributos de calidad |
| Punto de compromiso | Decisión que favorece un atributo de calidad a costa de otro |
| Punto de sensibilidad | Parámetro que cambia mucho un atributo de calidad |
| Spring Modulith | Librería de Spring para estructurar y verificar aplicaciones modulares |
