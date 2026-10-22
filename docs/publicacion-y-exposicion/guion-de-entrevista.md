---
sidebar_position: 2
title: Guion de entrevista
---

# Guion de entrevista

Decisión D del Módulo 15. Sirve para presentar el proyecto en 2 o en 10 minutos. Cada afirmación se respalda con una página del sitio.

## Presentación de 2 minutos

> Diseñé la arquitectura de **Kuenta**, una fintech colombiana ficticia, constituida como SEDPE, que ofrece depósitos de bajo monto y pagos a personas con poco acceso bancario. Lo hice como un curso práctico de 16 módulos: desde el caso de negocio y la regulación hasta la nube, la seguridad, los costos y las decisiones, todo publicado en un repositorio y un sitio.
>
> El corazón es un **monolito modular** con ocho módulos y un libro mayor de partida doble, porque lo que más importa es que el dinero cuadre. Corre en AWS, en São Paulo, con red cerrada y tres cuentas separadas. Cada decisión importante tiene un ADR con sus alternativas, y los riesgos están puntuados y abiertos a la vista.
>
> Lo que más me interesa mostrar no es una tecnología, sino cómo se decide: qué se sacrificó en cada caso y qué señal me haría cambiar de opinión.

## Recorrido de 10 minutos

| Minutos | Qué mostrar | Enlace |
|---|---|---|
| 0 a 1 | El problema y el público | [Módulo 1](../modulos/caso-de-negocio.md) |
| 1 a 2 | Prioridades de calidad y principios | [Módulo 2](../modulos/requisitos.md), [Módulo 4](../modulos/arquitectura-empresarial.md) |
| 2 a 4 | Estilo, límites y diagrama de contenedores | [Módulo 5](../modulos/arquitectura-de-aplicacion.md) |
| 4 a 5 | Libro mayor, outbox y sagas | [Módulo 6](../modulos/datos-y-consistencia.md) |
| 5 a 6 | Despliegue en AWS | [Módulo 8](../modulos/arquitectura-en-aws.md) |
| 6 a 7 | Seguridad y recuperación | [Módulo 9](../modulos/seguridad-y-cumplimiento.md), [Módulo 10](../modulos/resiliencia-y-operacion.md) |
| 7 a 8 | Entrega y costos | [Módulo 11](../modulos/entrega-ci-cd-e-iac.md), [Módulo 12](../modulos/costos-finops.md) |
| 8 a 9 | ADR, trade-offs y riesgos | [Módulo 13](../modulos/decisiones-y-trade-offs.md) |
| 9 a 10 | Cómo evoluciona | [Módulo 14](../modulos/gobierno-y-evolucion.md) |

## Cifras para tener a mano

| Dato | Valor |
|---|---|
| Dimensionamiento (hipótesis) | 50.000 clientes el primer año; 50 transacciones por segundo de pico |
| Módulos de la aplicación | 8, con un esquema de datos cada uno |
| Región y cuentas | São Paulo; producción, pruebas y seguridad y registros |
| SLO principal | 99,95 % en transferencias y depósitos (unos 22 minutos de presupuesto de error al mes) |
| Disponibilidad compuesta de AWS | 99,88 %, por debajo del SLO (riesgo R-01) |
| Recuperación | Zona: RPO 0. Datos: RPO 5 min y RTO 1 h. Región: RPO 15 min y RTO 4 h |
| Amenazas modeladas | 16 |
| ADR y riesgos | 10 ADR; 13 riesgos puntuados |
| Costo de nube | Unos 18.060 USD al año sin soporte y 20.266 con soporte (supuestos por validar) |

## Tres historias para contar

Formato: situación, decisión, resultado y qué aprendí.

1. **Elegir monolito modular.** Situación: equipo pequeño y dinero de terceros. Decisión: un solo despliegue con límites fuertes y umbrales medidos para extraer módulos. Resultado: una transacción protege el libro mayor y la opción de separar queda abierta.
2. **Aceptar un RTO de 4 horas.** Situación: una segunda región activa cuesta mucho para una entidad de bajo monto. Decisión: respaldo y restauración entre regiones, con infraestructura como código. Resultado: costo bajo y un riesgo aceptado por escrito (ADR-007 y R-08), con una condición clara para revisarlo.
3. **Medir antes de comprometer gasto.** Situación: los volúmenes eran supuestos. Decisión: estimar con supuestos explícitos y comprar compromisos de ahorro solo tras 3 meses de datos. Resultado: el gasto comprometido se apoyará en datos reales.

## Qué haría distinto

- Habría verificado antes la normativa de Bre-B y de la Registraduría, que quedaron pendientes.
- Habría comparado el precio de Aurora con el de RDS en São Paulo para sustentar el ADR-006.
- Empezaría la construcción con el análisis de `verify()` de Spring Modulith desde el primer pull request.

## Preguntas para hacer al entrevistador

- ¿Cómo se registran hoy las decisiones de arquitectura y quién las revisa?
- ¿Qué métrica de entrega miran: frecuencia de despliegue, plazo de cambio o tasa de fallo?
- ¿Qué parte del sistema les cuesta más cambiar y por qué?
