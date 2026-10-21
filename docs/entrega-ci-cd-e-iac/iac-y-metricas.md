---
sidebar_position: 3
title: Infraestructura como código y métricas
---

# Infraestructura como código y métricas

Decisiones D y E del Módulo 11.

## D. Infraestructura como código

La infraestructura de AWS se describe en archivos versionados, se revisa por pull request y se aplica desde el pipeline. Así el [diagrama de despliegue](../arquitectura-en-aws/diagrama-de-despliegue.md) es reproducible y sirve para reconstruir en otra región ([plan de recuperación](../resiliencia-y-operacion/plan-de-recuperacion.md)).

### D1. Herramienta

| Opción | Lectura |
|---|---|
| **OpenTofu** (elegida) | Licencia MPL-2.0; funciona con los proveedores de Terraform y usa un registro propio ([repositorio](https://github.com/opentofu/opentofu), [FAQ](https://opentofu.org/faq/)). El lenguaje declarativo se transfiere a otras nubes |
| Terraform | Misma familia de lenguaje, con licencia BUSL desde que HashiCorp cambió de licencia |
| CloudFormation o CDK | Nativos de AWS; atan el conocimiento a una sola nube |

El proyecto es solo AWS (RES-08), pero la elección no depende de eso: se prefiere una licencia abierta y un lenguaje común.

### D2. Estructura y reglas

| Tema | Decisión |
|---|---|
| Módulos | Uno por capa: red, datos, cómputo, seguridad y observabilidad |
| Entornos y región | El mismo código, con variables por entorno y por región |
| Estado | Remoto, cifrado y separado por entorno y cuenta |
| Cambios | Solo por pull request con el `plan` a la vista; se aplican únicamente desde el pipeline, y a producción con aprobación |
| Deriva | Verificación periódica de que lo desplegado coincide con el código |
| Secretos | Nunca en el código: Secrets Manager ([Módulo 9](../seguridad-y-cumplimiento/controles.md)) |
| Etiquetas | Todo recurso lleva etiquetas de entorno, módulo y responsable, para los costos del Módulo 12 |
| Verificación | Revisión estática de la infraestructura en el PR (OWASP API8: mala configuración) |

## E. Métricas de entrega

[DORA](https://dora.dev/guides/dora-metrics/) hoy mide cinco indicadores. RNF-07 se actualizó de cuatro a cinco.

| Métrica | Qué mide | Meta |
|---|---|---|
| Frecuencia de despliegue | Cuántos despliegues hay en un período | Diaria (RNF-07) |
| Plazo de cambio | Tiempo desde el commit hasta producción | Menos de 1 día (propuesta) |
| Tiempo de recuperación de un despliegue fallido | Tiempo para recuperarse de un despliegue que exige intervención | Menos de 1 hora (RNF-07) |
| Tasa de fallo de cambios | Despliegues que exigen intervención inmediata | Menos de 15 % (RNF-07) |
| Tasa de retrabajo | Despliegues no planeados por un incidente en producción | Sin meta: se mide |

Las métricas se calculan desde los registros del pipeline y se revisan con los [objetivos de servicio](../resiliencia-y-operacion/objetivos-de-servicio.md): si el presupuesto de error se agota, se congelan los cambios no urgentes.

## Lo que queda fuera

Esta página es **diseño**: no incluye el código de la infraestructura ni el archivo del pipeline. Si más adelante se quisiera un ejemplo, iría en `infraestructura/`.
