---
sidebar_position: 2
title: "ADR-002 · Java 25 con Spring Boot y Spring Modulith"
---

# ADR-002 · Java 25 con Spring Boot y Spring Modulith

- **Estado:** aceptada
- **Fecha:** 2026-10-21
- **Decide:** el autor
- **Origen:** Módulo 13 (nuevo)

## Contexto y problema

Qué lenguaje y marcos se usan para construir el monolito modular.

## Factores de decisión

- Es el stack principal del autor.
- Versión con soporte largo.
- Verificación automática de los límites entre módulos.
- Registro transaccional de eventos para el patrón outbox.

## Opciones consideradas

- Java 25 LTS con Spring Boot 4.1 y Spring Modulith 2.1
- Java 21 LTS con Spring Boot 3.5 y Spring Modulith 1.4
- Kotlin sobre la JVM
- C# con .NET

## Resultado de la decisión

Java 25 LTS con Spring Boot 4.1 y Spring Modulith 2.1 (versiones vigentes el 21 de octubre de 2026).

## Consecuencias

- Bueno: Java 25 tiene soporte Premier hasta septiembre de 2030 y Extended hasta septiembre de 2033 (Oracle).
- Bueno: Spring Modulith verifica la estructura de módulos, ofrece pruebas por módulo y un registro de publicación de eventos que se escribe en la misma transacción, con reintento de los incompletos. Eso cubre buena parte del outbox del ADR-003.
- Malo: Spring Boot 4 y Modulith 2 son recientes; la versión mínima de Java y la compatibilidad exacta no se confirmaron (riesgo R-12).
- Malo: el modo outbox completo exige una librería adicional (Namastack Outbox o JobRunr).

## Más información

[Spring Boot](https://spring.io/projects/spring-boot), [Spring Modulith](https://spring.io/projects/spring-modulith), [eventos de Modulith](https://docs.spring.io/spring-modulith/reference/events.html) y [hoja de ruta de Java SE](https://oracle.com/java/technologies/java-se-support-roadmap.html)
