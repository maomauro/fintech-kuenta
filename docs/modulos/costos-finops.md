---
sidebar_position: 12
title: "Módulo 12 · Costos (FinOps)"
---

# Módulo 12 · Costos (FinOps)

**Entregable:** estimación de costos en total anual. Tres páginas del sitio. Es una estimación con supuestos explícitos, no un presupuesto aprobado.

Con la arquitectura, la seguridad, la operación y la entrega definidas, la arquitecta o el arquitecto estima **cuánto cuesta sostener Kuenta en un año** y cómo se controla ese costo.

## Qué se hizo

1. Se consultaron los precios de São Paulo en los datos de la AWS Pricing Calculator (las páginas de precios cargan las tarifas con JavaScript).
2. Se fijaron los supuestos de volumen y los tamaños por entorno (decisiones A y B).
3. Se estimó el total anual por entorno y se sumó el soporte de AWS.
4. Se definieron las palancas de optimización, las etiquetas, los presupuestos y la revisión mensual (decisiones C, D y E).

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Estimación anual](../costos-finops/estimacion-anual.md) | Total por entorno, detalle por servicio y rubros que más pesan |
| [Supuestos y fuentes](../costos-finops/supuestos-y-fuentes.md) | Volúmenes, tamaños, fuentes y nivel de confianza de cada precio |
| [Optimización y FinOps](../costos-finops/optimizacion-y-finops.md) | Palancas, líneas fuera de la nube, etiquetas, presupuestos y revisión |

## Resultado

| Concepto | Total anual (USD) |
|---|---:|
| Nube, sin soporte | 18.060 |
| Soporte de AWS (propuesta) | 2.206 |
| **Total de nube con soporte** | **20.266** |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Supuestos de volumen | 5 millones de solicitudes, 100 GB de logs, 500 GB de NAT y 100 GB de base de datos al mes | Dimensionar sin datos reales; se reemplazan tras 3 meses |
| B. Tamaños | Producción con 2 tareas ARM y RDS Multi-AZ; pruebas y desarrollo reducidos | Coherente con los [objetivos de servicio](../resiliencia-y-operacion/objetivos-de-servicio.md) |
| C. Optimización | Graviton, desarrollo efímero, un NAT fuera de producción y compromisos de ahorro tras medir | No comprometer gasto sin datos |
| D. Alcance | Nube más soporte, y líneas separadas para pruebas de penetración, auditoría y personal | Evitar el error de estimar solo la nube |
| E. FinOps | Etiquetas, presupuestos con alertas, revisión mensual y costo por transacción | Mantener el costo bajo control |

## Estado

- [x] Estimación anual por entorno
- [x] Supuestos, tamaños y fuentes
- [x] Palancas de optimización y FinOps
- [ ] Rehacer la estimación en `calculator.aws` y comparar contra el total
- [ ] Confirmar GuardDuty, Security Hub, Route 53, endpoints de VPC (precio por hora) y copias entre regiones
- [ ] Cifras de pruebas de penetración, auditoría y personal (las define el autor)
- [ ] Comparar RDS con Aurora en São Paulo (ADR del Módulo 13)
- [ ] Reemplazar los supuestos de volumen con mediciones tras 3 meses

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario) a [11](./entrega-ci-cd-e-iac.md#glosario).

| Sigla o término | Significado |
|---|---|
| FinOps | Práctica de gestionar y optimizar el costo de la nube entre tecnología y negocio |
| LCU | Load Balancer Capacity Unit: unidad con la que AWS cobra el uso del balanceador de carga |
| NAT Gateway | Servicio que permite a la red privada salir a internet sin tener dirección pública |
| Savings Plan | Compromiso de gasto por 1 o 3 años a cambio de un descuento |
| Costo por transacción | Gasto de nube dividido entre el número de transacciones |
