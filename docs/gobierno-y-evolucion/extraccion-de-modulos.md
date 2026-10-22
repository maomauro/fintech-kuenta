---
sidebar_position: 2
title: Extracción de módulos
---

# Extracción de módulos

Decisión C del Módulo 14. El [ADR-001](../adr/adr-001-monolito-modular.md) define un monolito modular: un módulo pasa a servicio **solo cuando una señal medida lo justifica**, no por preferencia ni por moda.

## Umbrales

Los valores son **propuestas del autor**, sin datos reales. Se calibran con las mediciones del primer año.

| Señal | Umbral propuesto | Métrica | Fuente de la métrica |
|---|---|---|---|
| Escala | Un módulo usa más de la mitad del CPU de las tareas durante 4 semanas y sigue superando su SLO de latencia después de optimizarlo | CPU por módulo y p95 | Observabilidad ([Módulo 10](../resiliencia-y-operacion/observabilidad-y-operacion.md)) |
| Despliegue | Más de la cuarta parte de las reversiones o de los bloqueos de un trimestre se deben a cambios de otro módulo | Reversiones por causa | Métricas DORA ([Módulo 11](../entrega-ci-cd-e-iac/iac-y-metricas.md)) |
| Equipo | Más de dos equipos modifican el mismo módulo con conflictos frecuentes | Autores y conflictos por módulo | Historial de git |
| Cumplimiento | Un regulador o una auditoría exige aislar el módulo | Requisito escrito | [Matriz de cumplimiento](../seguridad-y-cumplimiento/matriz-de-cumplimiento.md) |
| Disponibilidad | Un módulo consume más de la mitad del presupuesto de error durante dos meses seguidos | Presupuesto de error por módulo | SLO |

Una sola señal basta si es clara. Una señal sin métrica no cuenta.

## Lo que ya facilita la extracción

| Decisión previa | Por qué ayuda |
|---|---|
| Un esquema de datos por módulo, sin lecturas cruzadas ([Módulo 6](../datos-y-consistencia/modelo-de-datos.md)) | Los datos del módulo ya están separados |
| Comunicación por interfaces y eventos con outbox | El módulo ya se habla con los demás por contratos |
| Contratos OpenAPI versionados ([Módulo 7](../integracion-y-apis/contratos.md)) | Las interfaces ya son estables |
| `verify()` en cada pull request | Evita que el acoplamiento se acumule |

## Candidatos probables

| Orden | Módulo | Motivo | Riesgo principal |
|---|---|---|---|
| 1 | Notificaciones | Es accesorio y tolera retrasos | Casi ninguno |
| 2 | Efectivo y corresponsales | Muchas integraciones con terceros y ritmo de cambio propio | Sagas con el libro mayor |
| 3 | Atención al cliente | Cambia por razones distintas al dinero | Consultas que cruzan datos |
| Último | Cuentas y libro mayor | Es el corazón de la consistencia | Perder la transacción única |

## Proceso

1. **Señal y métrica:** registrar la medición que justifica el cambio.
2. **ADR:** escribir el ADR con alternativas y consecuencias. Reemplaza la parte del [ADR-003](../adr/adr-003-libro-mayor-outbox.md) que dice "sin colas externas".
3. **Canal de mensajes:** introducir un canal entre el monolito y el nuevo servicio (por ejemplo, SQS o SNS) y estimar su costo con el método del [Módulo 12](../costos-finops/estimacion-anual.md).
4. **Estrangular gradualmente** ([Strangler Fig](https://martinfowler.com/bliki/StranglerFigApplication.html)): una fachada envía el tráfico al servicio nuevo de a poco y el comportamiento antiguo se retira por partes.
5. **Migrar los datos** del esquema del módulo y verificar la conciliación.
6. **Retirar** el código antiguo y actualizar el [diagrama de contenedores](../arquitectura-aplicacion/diagramas-c4.md).
