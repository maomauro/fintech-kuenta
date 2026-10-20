---
sidebar_position: 5
title: "Módulo 5 · Arquitectura de aplicación"
---

# Módulo 5 · Arquitectura de aplicación

**Entregable:** diagramas de contexto, contenedores y componentes (C4), tres diagramas de secuencia, un diagrama de casos de uso y un diagrama de clases de alto nivel (nivel 4, opcional). Cada uno se publica en el sitio y tiene una copia editable en draw.io.

Con los requisitos, los dominios, las capacidades y los principios ya definidos, la arquitecta o el arquitecto decide **cómo se organiza la aplicación**: qué estilo usa y dónde van los límites entre sus partes. Este módulo no elige tecnologías ni nube; eso llega después.

## Qué se hizo

1. Se investigaron los enfoques para trazar límites (capacidades, DDD, Event Storming, equipos, datos) y la diferencia entre enfoque y estilo.
2. Se decidió el estilo del core: **monolito modular**, con una regla explícita para mudar un módulo a servicio.
3. Se pasó de 7 dominios y 27 capacidades a **8 módulos** con datos propios y puertas públicas.
4. Se modeló Kuenta en Structurizr y se generaron los diagramas C4 y las secuencias UML.
5. Se configuró el sitio para dibujar los diagramas desde texto (Mermaid).
6. Se crearon copias editables en draw.io de los diagramas, para ampliarlos y retocarlos, y un diagrama de casos de uso.

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Estilo y límites de dominio](../arquitectura-aplicacion/estilo-y-limites.md) | Las seis preguntas, el monolito modular, la regla de mudanza y los ocho módulos |
| [Diagramas C4](../arquitectura-aplicacion/diagramas-c4.md) | Contexto, contenedores, componentes (los módulos) y un diagrama de clases opcional del núcleo del dinero |
| [Secuencias UML](../arquitectura-aplicacion/secuencias.md) | Apertura de depósito, transferencia entre cuentas y depósito en corresponsal |
| `modelos/structurizr/kuenta.dsl` | El modelo C4 en texto |
| `modelos/structurizr/exportar.sh` | Exporta las vistas a Mermaid |
| `modelos/c4/*.drawio` | Copias editables en draw.io: contexto, contenedores, componentes y clases (nivel 4) |
| `modelos/uml/*.drawio` | Copias editables en draw.io: casos de uso y las tres secuencias |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Estilo del core | Monolito modular; un módulo pasa a servicio solo con una señal respaldada por una métrica | PA-02, PA-05, PA-06 y PA-07; 50.000 clientes y 50 TPS caben en una aplicación con réplicas |
| B. Límites | 8 módulos: Identidad y apertura, Cuentas y depósitos, Pagos y transferencias, Efectivo y corresponsales, Cumplimiento y riesgo, Atención al cliente, Notificaciones y Auditoría | Un dominio por módulo, más dos capacidades separadas por ser transversales |
| C. Entregable | Contexto y contenedores en C4 y tres secuencias UML (apertura, transferencia, depósito en corresponsal); se añadió la vista de componentes y, a pedido del autor, un diagrama de clases de alto nivel de Cuentas y depósitos (nivel 4, opcional) | Cubre los flujos principales y muestra el resultado de la decisión B; el nivel 4 se limita a un componente porque C4 lo da como opcional |
| D. Publicación de diagramas | Mermaid exportado desde Structurizr y dibujado por el sitio | Queda en git, sigue el tema claro u oscuro y evita exportar imágenes a mano |
| Sistemas de apoyo | Se compran o contratan; aparecen como sistemas externos | No diferencian a Kuenta; se diseña solo su conexión |

## Estado

- [x] Estilo del core y regla de mudanza
- [x] Ocho módulos con sus capacidades
- [x] Modelo en Structurizr con tres vistas y tres secuencias
- [x] Páginas del sitio y configuración de Mermaid
- [x] Revisar a ojo los diagramas en el sitio, en modo claro y oscuro
- [x] Copias en draw.io de los diagramas C4 y UML, y diagrama de casos de uso
- [ ] Revisar las copias en draw.io abiertas en la aplicación (hechas sin abrirlas en draw.io)
- [ ] Probar el comando `export` de la imagen `structurizr/structurizr`
- [ ] Contrastar con el libro de Evans la relación dominio, contexto delimitado y módulo
- [ ] Contrastar con Erl el papel de SOA (Módulo 7)
- [ ] Definir los umbrales de las señales de mudanza (Módulos 10 y 14)

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario), [1](./caso-de-negocio.md#glosario), [2](./requisitos.md#glosario), [3](./metodologia-agil.md#glosario) y [4](./arquitectura-empresarial.md#glosario).

| Sigla o término | Significado |
|---|---|
| C4 | Modelo para describir la arquitectura en cuatro niveles: contexto, contenedores, componentes y código |
| Componente (C4) | Parte de un contenedor; en Kuenta, cada uno de los 8 módulos del monolito |
| Contenedor (C4) | Algo que se despliega por separado, como una aplicación móvil, una base de datos o el monolito; no es un contenedor de Docker |
| Contexto delimitado | Límite dentro del cual un término del negocio tiene un solo significado (*bounded context*, de DDD) |
| DDD | *Domain-Driven Design*: diseño guiado por el dominio del negocio; su parte estratégica ayuda a trazar los límites |
| Estilo arquitectónico | Forma de organizar y desplegar las partes de un sistema: monolito modular, microservicios, SOA |
| Event Storming | Taller en el que se mapean los eventos del negocio para descubrir límites |
| Microservicios | Estilo en el que cada parte es un servicio que se despliega por separado, con su propia base de datos |
| Monolito modular | Una sola aplicación y un solo despliegue, organizada en módulos con datos propios y puertas públicas |
| Puerta pública | La interfaz que expone un módulo; lo demás es interno |
| Réplica | Copia en ejecución de la misma aplicación, para atender más carga o seguir si otra cae |
| Saga | Serie de pasos locales con compensaciones, para mantener la coherencia entre servicios sin una sola transacción |
| Sistema de apoyo | Sistema que la empresa necesita pero que no la diferencia, como nómina o contabilidad; se compra o se contrata |
| Vista dinámica | En Structurizr, vista que muestra una secuencia de pasos entre elementos; se exporta como diagrama de secuencia |
