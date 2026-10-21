---
sidebar_position: 11
title: "Módulo 11 · Entrega: CI/CD e IaC"
---

# Módulo 11 · Entrega: CI/CD e IaC

**Entregable:** diseño del flujo de despliegue. Tres páginas del sitio y una copia editable del diagrama en draw.io. Es solo diseño: no incluye código de la infraestructura ni el archivo del pipeline.

Con el despliegue, la seguridad y la operación definidos, la arquitecta o el arquitecto decide **cómo llega cada cambio a producción de forma repetible, segura y demostrable**. El costo de los entornos y del escaneo se estima en el Módulo 12.

## Qué se hizo

1. Se investigó: autenticación de GitHub Actions en AWS con OpenID Connect, despliegue blue/green integrado de ECS, escaneo de imágenes en ECR, entornos de GitHub, OpenTofu frente a Terraform y las métricas DORA vigentes.
2. Se definieron el flujo de ramas y los entornos (decisión A).
3. Se definieron el pipeline y la evidencia automática (decisión B) y el despliegue y las migraciones (decisión C).
4. Se eligió la herramienta de infraestructura como código y sus reglas (decisión D).
5. Se fijaron las métricas de entrega y se publicó el diseño (decisión E).
6. Se actualizó RNF-07: DORA pasó de cuatro a cinco métricas.

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Flujo de despliegue](../entrega-ci-cd-e-iac/flujo-de-despliegue.md) | Principios, diagrama, entornos y aprobación |
| [Pipeline y despliegue](../entrega-ci-cd-e-iac/pipeline-y-despliegue.md) | Puertas de calidad, OIDC, evidencia, blue/green, migraciones y banderas |
| [Infraestructura como código y métricas](../entrega-ci-cd-e-iac/iac-y-metricas.md) | OpenTofu, reglas y las cinco métricas DORA |
| `modelos/entrega/*.drawio` | Copia editable del diagrama del flujo |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Flujo y entornos | Ramas cortas y `main` siempre desplegable; tres entornos en cuentas separadas con datos sintéticos; una sola imagen promovida; quien escribe no aprueba | PA-08 y Módulo 9 (separación de funciones) |
| B. Pipeline | Puertas de calidad en cada PR y al integrar; OIDC con un rol por entorno; evidencia automática por despliegue | Definition of Done de nivel 2 (Módulo 3); amenaza T-14 |
| C. Despliegue | Blue/green integrado de ECS con reversión automática; migraciones de expandir y contraer; banderas de funcionalidad | Sin caída y con vuelta atrás rápida |
| D. IaC | OpenTofu con módulos por capa, estado remoto por entorno, cambios por PR y aplicación desde el pipeline | Reproducible (Módulo 10) y licencia abierta |
| E. Métricas | Cinco métricas DORA con las metas de RNF-07 | Medir si la entrega mejora |

## Estado

- [x] Flujo de despliegue y entornos
- [x] Pipeline y evidencia automática
- [x] Blue/green, migraciones y banderas
- [x] Infraestructura como código y métricas
- [x] Copia en draw.io
- [x] RNF-07 actualizado a cinco métricas DORA
- [ ] Revisar la copia en draw.io abierta en la aplicación (hecha sin abrirla)
- [ ] Confirmar en la guía de ECS que blue/green integrado soporta Fargate (el anuncio no lo nombra)
- [ ] Elegir el lenguaje y los marcos del monolito (ADR, Módulo 13)
- [ ] Plazo legal de retención de la evidencia de despliegue
- [ ] Costo de los entornos y del escaneo mejorado de imágenes (Módulo 12)
- [ ] Fijar el tiempo de observación del blue/green con pruebas (propuesta: 10 minutos)

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario) a [10](./resiliencia-y-operacion.md#glosario).

| Sigla o término | Significado |
|---|---|
| CI/CD | Integración continua y entrega continua: automatizar la verificación y el despliegue de cada cambio |
| Pipeline | Secuencia automática de etapas que lleva un cambio hasta producción |
| Trunk-based | Trabajo con ramas muy cortas y una rama principal siempre desplegable |
| Digest | Huella única de una imagen de contenedor |
| OIDC | OpenID Connect: forma de que GitHub se identifique ante AWS con credenciales temporales, sin llaves guardadas |
| SAST | Static Application Security Testing: análisis de seguridad del código sin ejecutarlo |
| SCA | Software Composition Analysis: análisis de vulnerabilidades en las librerías usadas |
| Blue/green | Despliegue con la versión nueva junto a la vigente y cambio de tráfico con vuelta atrás rápida |
| Tiempo de observación (bake time) | Lapso en que ambas versiones siguen vivas tras mover el tráfico |
| Expandir y contraer | Patrón de migración en dos pasos para que dos versiones convivan sobre la misma base de datos |
| Bandera de funcionalidad | Interruptor que activa o apaga una función sin desplegar de nuevo |
| IaC | Infraestructura como código: describir la infraestructura en archivos versionados |
| OpenTofu | Herramienta de infraestructura como código, de código abierto y compatible con los proveedores de Terraform |
| Deriva (drift) | Diferencia entre lo desplegado y lo descrito en el código |
| DORA | Métricas de entrega de software: frecuencia, plazo de cambio, recuperación, fallo y retrabajo |
