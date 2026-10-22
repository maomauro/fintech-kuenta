---
sidebar_position: 9
title: "ADR-009 · Blue/green integrado de ECS y OpenTofu"
---

# ADR-009 · Blue/green integrado de ECS y OpenTofu

- **Estado:** aceptada
- **Fecha:** 2026-10-21
- **Decide:** el autor
- **Origen:** Módulo 11

## Contexto y problema

Cómo se despliega sin caída y cómo se describe la infraestructura.

## Factores de decisión

- Vuelta atrás rápida.
- Infraestructura reproducible.
- Licencia abierta.

## Opciones consideradas

- Blue/green integrado de ECS con OpenTofu
- Despliegue progresivo con CodeDeploy
- Terraform
- CloudFormation o CDK

## Resultado de la decisión

Blue/green integrado de ECS con reversión automática por alarmas, y OpenTofu con módulos por capa.

## Consecuencias

- Bueno: sin caída y con reversión automática.
- Bueno: OpenTofu usa licencia MPL-2.0 y es compatible con los proveedores de Terraform.
- Malo: no se confirmó que blue/green integrado soporte Fargate (riesgo R-05).

## Más información

[Pipeline y despliegue](../entrega-ci-cd-e-iac/pipeline-y-despliegue.md) e [IaC y métricas](../entrega-ci-cd-e-iac/iac-y-metricas.md)
