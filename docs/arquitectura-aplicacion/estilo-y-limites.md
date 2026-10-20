---
sidebar_position: 1
title: Estilo y límites de dominio
---

# Estilo y límites de dominio

Dos decisiones de la arquitectura de aplicación de Kuenta: **cómo se organiza** el core transaccional (el estilo) y **dónde van los límites** entre sus partes. Se respaldan en los [principios de arquitectura](../arquitectura-empresarial/principios.md) y en el [mapa de capacidades](../arquitectura-empresarial/mapa-de-capacidades.md) del Módulo 4.

## Seis preguntas, en orden

Los enfoques de descomposición y los estilos no se contienen unos a otros: son preguntas distintas que se responden en orden. Cambiar una respuesta afecta a las siguientes, pero no tiene por qué romper las anteriores.

| # | Pregunta | Opciones (ejemplos) | En Kuenta |
|---|---|---|---|
| 1 | ¿Qué debe hacer y con qué calidad? | Requisitos funcionales y de calidad | Módulo 2 |
| 2 | ¿Dónde van los límites? | Capacidades, DDD, Event Storming, equipos, datos | Módulos 4 y 5 |
| 3 | ¿Cómo conviven esos límites? | Monolito modular, microservicios, SOA | Módulo 5 |
| 4 | ¿Cómo se ordena el código dentro de cada uno? | Capas, hexagonal, CQRS | Módulo 5 |
| 5 | ¿Cómo se hablan entre sí y con terceros? | APIs, eventos, colas | Módulos 6 y 7 |
| 6 | ¿Dónde corre? | Contenedores, nube, regiones | Módulos 8 a 10 |

La zonificación va primero: si los límites están bien trazados, se puede pasar de un edificio a varias casas sin rediseñar la ciudad.

## Decisión: monolito modular

El core de Kuenta es un **monolito modular**: una sola aplicación y un solo despliegue, con varias réplicas, organizada en módulos. Cada módulo tiene sus datos propios y una puerta pública; ninguno entra a las tablas de otro.

**Por qué**

- **El dinero cuadra** ([PA-02](../arquitectura-empresarial/principios.md#pa-02-el-dinero-siempre-cuadra)): una transferencia entre cuentas Kuenta es una sola transacción, sin sagas.
- **Lo más simple que cumpla** ([PA-06](../arquitectura-empresarial/principios.md#pa-06-lo-más-simple-que-cumpla)): la hipótesis de 50.000 clientes y 50 TPS cabe en una aplicación con réplicas, y un equipo pequeño opera mejor una pieza que ocho.
- **Un solo dueño por cada dato** ([PA-05](../arquitectura-empresarial/principios.md#pa-05-un-solo-dueño-por-cada-dato)): la disciplina de módulos lo hace verificable.
- **Evolución en pasos pequeños** ([PA-07](../arquitectura-empresarial/principios.md#pa-07-evolución-en-pasos-pequeños)): los límites se descubren al construir, y equivocarse es barato dentro de un monolito.

**Qué se acepta a cambio**

- Un fallo grave puede afectar a toda la aplicación; las réplicas lo mitigan.
- Si los módulos se enredan, se pierde la ventaja: los límites se protegen con reglas verificables.
- Escalar es todo o nada, salvo que se mude un módulo.

### Interno y externo

El estilo solo afecta lo **interno**. Lo externo (Bre-B, otros bancos, corresponsales) es igual en los dos estilos: va por la red, con confirmación de terceros.

| | Interna (entre módulos de Kuenta) | Externa (Bre-B, redes, terceros) |
|---|---|---|
| **Monolito modular** | Llamada dentro del mismo programa y una sola transacción de base de datos: todo o nada | Por la red, con confirmación de terceros |
| **Microservicios** | Por la red entre servicios, con sagas | Por la red, con confirmación de terceros |

Una transferencia entre dos cuentas Kuenta es interna y atómica. Una transferencia por Bre-B es externa: Kuenta reserva, envía, espera la confirmación y, si falla, libera la reserva. Eso se diseña igual en ambos estilos; el monolito no lo elimina, solo evita sumarle complejidad interna.

### Cuándo pasar a microservicios

Un módulo se muda a servicio **solo si cumple al menos una señal y hay una métrica que la respalde**. La mudanza consiste en extraer el módulo, darle su propia base de datos y hablarle por su puerta pública.

| Señal | Ejemplo en Kuenta |
|---|---|
| Escala desigual | Pagos satura por Bre-B mientras Atención casi no se usa |
| Equipos que se pisan | Varios equipos tocan el mismo código y se bloquean entre sí; bajan la frecuencia de despliegue y el tiempo de entrega |
| Ritmo de cambio distinto | Un módulo cambia a diario y otro cada trimestre |
| Aislamiento exigido | Un requisito regulatorio o de seguridad pide separarlo |
| Tecnología distinta | Un módulo necesita otra tecnología, como un motor antifraude con IA |
| Fallos en cascada | Un módulo menor tumba repetidamente a los críticos |

Los umbrales concretos se definen en los Módulos 10 y 14, cuando haya objetivos de servicio y gobierno con los que medirlos.

## Decisión: los ocho módulos

### De los dominios a los módulos

1. **Se parte de los dominios.** Los 7 dominios de negocio del Módulo 4 son el punto de partida. «Gestión corporativa y apoyo» (CAP-24 a 27) no se vuelve módulo: son sistemas de apoyo que se compran y aparecen como externos.
2. **Se prueba cada candidato.** Un buen límite tiene un solo lenguaje, un dueño claro de sus datos y las mismas razones para cambiar. Seis dominios pasan sin cambios.
3. **Se separan dos capacidades que no encajan.**
   - **CAP-19 Notificar al cliente** vive en Atención, pero la usan todos los módulos. Si quedara dentro de Atención, todos dependerían de ella.
   - **CAP-18 Auditar operaciones** vive en Riesgo y cumplimiento, pero su dato es un registro que solo se agrega, alimentado por todos los módulos, y cambia por razones distintas a las de la detección de fraude.

### Resultado

| Módulo | Capacidades | Origen |
|---|---|---|
| Identidad y apertura | CAP-01, 02, 03 | Dominio Clientes e identidad |
| Cuentas y depósitos | CAP-04 a 08 | Dominio Cuentas y depósitos |
| Pagos y transferencias | CAP-09, 10, 11 | Dominio Pagos y transferencias |
| Efectivo y corresponsales | CAP-12, 13, 14 | Dominio Efectivo y corresponsales |
| Cumplimiento y riesgo | CAP-15, 16, 17 | Dominio Riesgo y cumplimiento |
| Atención al cliente | CAP-20 a 23 | Dominio Atención y experiencia |
| Notificaciones | CAP-19 | Separada de Atención |
| Auditoría | CAP-18 | Separada de Riesgo y cumplimiento |

Cuadran las cuentas: 3 + 5 + 3 + 3 + 3 + 4 + 1 + 1 = 23 capacidades en módulos, más las 4 de apoyo que quedan como sistemas externos, para las 27 del mapa.

### Reglas de los módulos

- **Datos propios.** Cada módulo es dueño de su esquema; los demás piden los datos por su puerta pública. Atención, por ejemplo, consulta saldos pidiéndoselos a Cuentas.
- **Puerta pública.** Cada módulo expone una interfaz y todo lo demás es interno.
- **Dependencias hacia un solo lado.** Las flechas entre módulos están en el [diagrama de módulos](./diagramas-c4.md#nivel-3--componentes) y no deben formar ciclos.

Separar Notificaciones y Auditoría es una **decisión de diseño**, no una verdad: podrían quedar dentro de Atención y de Cumplimiento. Se separaron por la dependencia de todos los módulos y por la naturaleza del dato.

## Sistemas de apoyo

Recursos humanos, compras, contabilidad y tesorería no diferencian a Kuenta de otra fintech. La pregunta para ellos no es cómo construirlos sino **si se construyen, se compran o se contratan como servicio**, y lo habitual es contratarlos. Aparecen en el [diagrama de contexto](./diagramas-c4.md#nivel-1--contexto) como sistemas externos, sin diseñarlos por dentro. El caso con diseño propio es la **contabilidad**: el módulo Cuentas entrega los asientos de cada movimiento y el dinero tiene que cuadrar en ambos lados (se detalla en los Módulos 6 y 7).

:::note Fuentes y estado
- Señales para pasar a microservicios y recomendación de empezar con un monolito modular: [Milan Jovanović](https://milanjovanovic.tech/blog/modular-monolith-vs-microservices.md), una fuente de práctica y no una norma. Las señales concretas son una síntesis propia.
- Descomposición por capacidad de negocio y por subdominio: [microservices.io](https://microservices.io/patterns/decomposition/decompose-by-business-capability.html).
- Falta contrastar con el libro de Evans la relación entre dominio de negocio, contexto delimitado y módulo, y con Erl el papel de SOA. El resto de enfoques de descomposición (Event Storming, volatilidad, Ley de Conway, datos) es conocimiento general y no se ha verificado con fuente.
:::
