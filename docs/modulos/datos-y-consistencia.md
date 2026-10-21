---
sidebar_position: 6
title: "Módulo 6 · Datos y consistencia"
---

# Módulo 6 · Datos y consistencia

**Entregable:** modelo de datos de alto nivel y flujo de eventos. Cuatro páginas del sitio con sus diagramas (entidad-relación, libro mayor, eventos, sagas y estados) y una copia editable en draw.io de cada uno.

Con los módulos definidos, la arquitecta o el arquitecto decide **quién es dueño de cada dato, cómo se registra el dinero y cómo se mantienen coherentes los procesos que cruzan módulos o sistemas externos**. Este módulo no elige tecnologías ni servicios de AWS; eso llega en el Módulo 8.

## Qué se hizo

1. Se investigó lo que podía cambiar las definiciones: el documento técnico de Bre-B, los patrones de saga y *transactional outbox* de AWS y los plazos de conservación de documentos.
2. Se definió el dueño de cada dato por módulo (decisión A).
3. Se diseñó el libro mayor con partida doble ligera, saldo, correcciones e idempotencia (decisión B).
4. Se definieron los eventos y cómo se publican dentro del monolito (decisión C).
5. Se definieron los flujos que son saga y sus estados (decisión D).
6. Se publicaron los diagramas en Mermaid con copias editables en draw.io, y se añadió un botón para **ampliar** los diagramas en el sitio.
7. Se corrigió el Módulo 5: «Avisa» pasó a «Publica evento».

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Modelo de datos](../datos-y-consistencia/modelo-de-datos.md) | Dueño de cada dato, regla de no leer tablas ajenas y diagrama entidad-relación general |
| [Libro mayor](../datos-y-consistencia/libro-mayor.md) | Partida doble ligera, saldo, correcciones, idempotencia y detalle del libro |
| [Flujo de eventos](../datos-y-consistencia/eventos.md) | Outbox, catálogo de eventos, contenido mínimo y quién publica y quién consume |
| [Sagas y estados](../datos-y-consistencia/sagas.md) | Transferencia Bre-B (estados y secuencia) y estados del efectivo |
| `modelos/datos/*.drawio` | Copias editables en draw.io |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Dueño de los datos | Cada módulo es dueño de su esquema; nadie lee tablas ajenas; archivos de identidad fuera de la base; datos personales separados del dinero | PA-05; protege el libro mayor frente a la Ley 1581 |
| B. Libro mayor | Partida doble ligera con apuntes que suman cero; cuentas de tránsito; saldo guardado en la misma transacción con bloqueo de fila y recálculo periódico; correcciones con movimiento contrario; llave de idempotencia; decimal exacto y solo COP | PA-02: «el dinero cuadra» se verifica con una suma |
| C. Eventos | Auditoría por llamada directa en la misma transacción; el resto por eventos con *transactional outbox*; consumidores idempotentes; sin datos personales en los eventos; transporte interno | Lo accesorio no bloquea ni se pierde; PA-06 |
| D. Sagas | Solo Bre-B, depósito y retiro de efectivo; orquestadas como máquinas de estados dentro del módulo dueño; estado *pendiente* sin liberar la reserva; reserva como bloqueo semántico | Intervienen sistemas externos; Bre-B exige respuesta en 20 s |
| E. Entregable | Cinco piezas en Mermaid con copias en draw.io; páginas en `docs/datos-y-consistencia/` y copias en `modelos/datos/`; botón de ampliar | Structurizr no genera diagramas entidad-relación; el sitio ya dibuja Mermaid |

## Estado

- [x] Dueño de cada dato
- [x] Libro mayor
- [x] Eventos y outbox
- [x] Sagas y estados
- [x] Páginas del sitio y botón de ampliar
- [x] Copias en draw.io
- [x] Corrección de «Avisa» en el Módulo 5
- [ ] Revisar las copias en draw.io abiertas en la aplicación (hechas sin abrirlas en draw.io)
- [ ] Confirmar con la circular DSP-465 y sus anexos los estados, reintentos, reversos, idempotencia y consulta de estado de Bre-B (Módulo 7)
- [ ] Confirmar en fuente oficial el nombre enmascarado del beneficiario (RF-13) (Módulo 7)
- [ ] Confirmar con fuente oficial el plazo de conservación de los registros del libro y de SARLAFT (artículo 96 del EOSF); hasta entonces nada se borra y el plazo es un parámetro
- [ ] Fijar tiempos de vencimiento, reintentos y límite de revisión manual (Módulo 10)
- [ ] Decidir el servicio de mensajería de AWS, si hace falta (Módulo 8)

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario), [1](./caso-de-negocio.md#glosario), [2](./requisitos.md#glosario), [3](./metodologia-agil.md#glosario), [4](./arquitectura-empresarial.md#glosario) y [5](./arquitectura-de-aplicacion.md#glosario).

| Sigla o término | Significado |
|---|---|
| Apunte | Línea de un libro mayor: un valor positivo o negativo sobre una cuenta; los apuntes de una operación suman cero |
| Bloqueo de fila | Impedir que dos operaciones modifiquen a la vez la misma fila hasta terminar la transacción |
| Bloqueo semántico | Marcar un valor como apartado (la reserva) mientras un proceso está a medias, porque las sagas no dan aislamiento |
| Compensación | Paso que deshace el efecto de uno anterior cuando una saga falla |
| Consistencia eventual | Los datos de distintos lugares coinciden con un pequeño retraso, no al instante |
| Cuenta de tránsito | Cuenta interna del libro por donde pasa el dinero que sale o entra por Bre-B o por un corresponsal |
| Evento | Aviso de un hecho que ya ocurrió |
| Idempotencia | Propiedad de una operación que, repetida, no duplica sus efectos |
| ISO 20022 | Estándar de mensajería financiera que usa Bre-B |
| Libro mayor | Registro donde queda cada movimiento de dinero; solo se agrega |
| Llave de idempotencia | Identificador único de una operación, para reconocer un reintento |
| Orquestación | Saga dirigida por un coordinador que decide el siguiente paso |
| Coreografía | Saga donde cada parte reacciona a los eventos de las otras, sin coordinador |
| Outbox transaccional | Guardar el evento en la misma transacción que el dato y publicarlo después con otro proceso |
| Partida doble | Cada operación se registra con apuntes que suman cero |
| Reserva | Valor apartado del saldo disponible mientras se espera la confirmación de una operación |
| Saga | Proceso de varios pasos locales con compensaciones, para mantener coherencia sin una sola transacción |
| Saldo disponible | Saldo menos las reservas activas |
