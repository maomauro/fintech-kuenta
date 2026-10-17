# Kuenta — Arquitectura de una fintech

Proyecto de arquitectura de software para **Kuenta**, una fintech colombiana ficticia de **depósitos y pagos** (constituida como SEDPE), diseñada sobre **AWS** (Amazon Web Services). Reúne el caso de negocio, los requisitos, los modelos, los diagramas, los contratos de API, el diseño de infraestructura y las decisiones de arquitectura, y se publica como un sitio navegable.

> Estado: el proyecto avanza módulo a módulo. Los Módulos 0 y 1 están cerrados. Hoy está en el **Módulo 2: requisitos, restricciones y regulación**.

## Cómo navegar este repositorio

| Carpeta | Para qué sirve |
|---|---|
| `00-contexto/` | Punto de partida del proyecto: objetivo, decisiones tomadas, temario y glosario de siglas. Es lo primero que se lee para entender el alcance. |
| `sitio/` | La aplicación web (Docusaurus) que convierte la documentación en un sitio navegable. Contiene configuración y tema, no contenido. |
| `docs/modulos/` | Una nota por módulo: qué se hizo, qué se decidió y por qué. Cuenta la historia del proyecto en orden. |
| `docs/requisitos/` | Qué debe hacer el sistema (requisitos funcionales), qué tan bien debe hacerlo (no funcionales), historias de usuario y casos de uso. |
| `docs/adr/` | Un archivo por cada decisión de arquitectura importante, escrito como ADR (Architecture Decision Record, registro de decisión de arquitectura): contexto, opciones, decisión y consecuencias. |
| `modelos/archi/` | El modelo de arquitectura empresarial en ArchiMate hecho con Archi: capacidades de negocio, aplicaciones y tecnología. |
| `modelos/structurizr/` | El modelo C4 (Context, Containers, Components, Code: contexto, contenedores, componentes y código) escrito como texto, de donde salen los diagramas de la arquitectura de aplicación. |
| `modelos/bpmn/` | Los procesos de negocio de Kuenta dibujados en BPMN (Business Process Model and Notation), como abrir un depósito de bajo monto o depositar efectivo en un corresponsal. |
| `diagramas/` | Diagramas fuente (draw.io, Excalidraw) y sus imágenes exportadas (PNG, SVG) para incrustarlas en el sitio. |
| `contratos-api/` | Contratos de API (Application Programming Interface, interfaz de programación de aplicaciones) escritos en OpenAPI, antes de construir nada. |
| `infraestructura/` | Diseño de la solución en AWS, ejemplos de IaC (Infrastructure as Code, infraestructura como código) y el despliegue del sitio en el VPS (servidor virtual privado). |
| `entrevista/` | Guion y preguntas típicas para exponer la arquitectura ante otras personas. |
| `referencias/` | Lecturas y enlaces públicos que respaldan las decisiones. |

## Herramientas

Archi, Structurizr, draw.io y Excalidraw, Docusaurus, Git y Docker. La descripción de cada una está en la nota del Módulo 0 del sitio (`docs/modulos/entorno-y-herramientas.md`).

## Módulos

El proyecto se organiza en 16 módulos (0 a 15), desde el entorno de trabajo hasta la publicación del sitio y el guion de entrevista. El detalle vive en `00-contexto/`.
