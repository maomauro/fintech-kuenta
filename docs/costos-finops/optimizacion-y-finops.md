---
sidebar_position: 3
title: Optimización y FinOps
---

# Optimización y FinOps

Decisiones C, D y E del Módulo 12.

## C. Optimización

| Palanca | Qué se hace | Cuándo |
|---|---|---|
| Graviton (ARM) | Fargate y RDS sobre ARM, más baratos que x86 | Desde el inicio |
| Desarrollo efímero | Se destruye fuera del horario hábil con [infraestructura como código](../entrega-ci-cd-e-iac/iac-y-metricas.md) | Desde el inicio |
| Un solo NAT fuera de producción | Pruebas y desarrollo no necesitan una salida por zona | Desde el inicio |
| Planes de ahorro e instancias reservadas | Se compran **después de medir 3 meses** de uso estable | Mes 4 en adelante |
| Endpoints de VPC frente a NAT | Comparar el costo de cada endpoint con el tráfico que ahorra al NAT | Revisión trimestral |
| Retención de logs | Revisar los 100 GB al mes y la retención de 1 año contra lo que exige la regulación | Cuando se defina el plazo ([Módulo 9](../seguridad-y-cumplimiento/matriz-de-cumplimiento.md)) |
| RDS frente a Aurora | Comparar con precios de Aurora São Paulo; la decisión queda para el ADR del Módulo 13 | Módulo 13 |

## Alcance más allá de la nube

El [Mapa general](../intro.md) advierte contra estimar solo la nube. Estas líneas se suman al total y las cifras las define el autor, no este documento:

| Línea | Total anual (USD) |
|---|---|
| Soporte de AWS | 2.206 (Business Support+, propuesta; mínimo de 29 por mes por cuenta o 9 % del gasto mensual hasta 10.000) |
| Prueba de penetración anual | Por definir |
| Auditoría y cumplimiento (SARLAFT, SIC, SFC) | Por definir |
| Personal de operación y guardias | Por definir |
| Licencias de herramientas (escaneo de código, si se paga) | Por definir |

## D. Etiquetas y presupuestos

- Cada recurso lleva las etiquetas `modulo`, `entorno` y `responsable`, aplicadas por la infraestructura como código.
- Un presupuesto de AWS Budgets por cuenta, con alertas al 80 % y al 100 % del total mensual (es decir, el total anual dividido en doce).
- Las alertas de costo llegan por el mismo canal que las alarmas operativas ([observabilidad](../resiliencia-y-operacion/observabilidad-y-operacion.md)).

## E. Revisión y métrica

- **Revisión mensual** de gasto real contra la estimación, con el responsable de cada módulo.
- **Costo por transacción** como indicador unitario: gasto anual de nube entre las transacciones del año. Hoy no hay dato; se calcula con la primera medición.
- **Reglas de desviación:** una diferencia mayor al 20 % frente a la estimación obliga a explicarla en la revisión.
