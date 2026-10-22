# Kuenta — Arquitectura de una fintech

Proyecto de arquitectura de software para **Kuenta**, una fintech colombiana ficticia de **depósitos y pagos** (constituida como SEDPE), diseñada sobre **AWS** (Amazon Web Services). Reúne el caso de negocio, los requisitos, los modelos, los diagramas, los contratos de API, el diseño de infraestructura y las decisiones de arquitectura, y se publica como un sitio navegable.

> Estado: el proyecto avanza módulo a módulo. Los Módulos 0 a 14 están cerrados. Hoy está en el **Módulo 15: publicación y exposición**, el último.

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
| `modelos/c4/` y `modelos/uml/` | Copias editables en draw.io de los diagramas del Módulo 5: C4 (contexto, contenedores, componentes y clases del nivel 4) en `c4/`, y UML (casos de uso y tres secuencias) en `uml/`. La fuente de verdad de C4 y secuencias sigue siendo `modelos/structurizr/kuenta.dsl`. |
| `modelos/datos/` | Copias editables en draw.io de los diagramas del Módulo 6: modelo de datos, libro mayor, flujo de eventos y sagas (Bre-B y efectivo). La fuente de verdad son las páginas de `docs/datos-y-consistencia/`, escritas en Mermaid. |
| `modelos/integraciones/` | Copia editable en draw.io del mapa de integraciones del Módulo 7. La fuente de verdad es la página de `docs/integracion-y-apis/`, escrita en Mermaid. |
| `modelos/despliegue/` | Copia editable en draw.io del diagrama de despliegue en AWS del Módulo 8. La fuente de verdad es la página de `docs/arquitectura-en-aws/`, escrita en Mermaid. |
| `modelos/seguridad/` | Copia editable en draw.io del diagrama de fronteras de confianza del Módulo 9. La fuente de verdad es la página de `docs/seguridad-y-cumplimiento/`, escrita en Mermaid. |
| `modelos/recuperacion/` | Copia editable en draw.io del diagrama de escenarios de recuperación del Módulo 10. La fuente de verdad es la página de `docs/resiliencia-y-operacion/`, escrita en Mermaid. |
| `modelos/entrega/` | Copia editable en draw.io del diagrama del flujo de despliegue del Módulo 11. La fuente de verdad es la página de `docs/entrega-ci-cd-e-iac/`, escrita en Mermaid. |
| `modelos/bpmn/` | Los procesos de negocio de Kuenta dibujados en BPMN (Business Process Model and Notation), como abrir un depósito de bajo monto o depositar efectivo en un corresponsal. |
| `diagramas/` | Diagramas fuente (draw.io, Excalidraw) y sus imágenes exportadas (PNG, SVG) para incrustarlas en el sitio. |
| `contratos-api/` | Contratos de API (Application Programming Interface, interfaz de programación de aplicaciones) escritos en OpenAPI, antes de construir nada. |
| `infraestructura/` | Despliegue del sitio en el VPS (servidor virtual privado): Dockerfile, nginx, compose y el vhost del gateway, en `infraestructura/sitio/`. El código de infraestructura en AWS no se escribe: el diseño está en `docs/entrega-ci-cd-e-iac/`. |
| `.github/workflows/` | Flujo de GitHub Actions que construye la imagen del sitio y la publica en GHCR (GitHub Container Registry). |
| `entrevista/` | Apunta al guion y al banco de preguntas, que viven en `docs/publicacion-y-exposicion/` para que el sitio los publique. |
| `referencias/` | Lecturas y enlaces públicos que respaldan las decisiones. |

## Herramientas

Archi, Structurizr, draw.io y Excalidraw, Docusaurus, Git y Docker. La descripción de cada una está en la nota del Módulo 0 del sitio (`docs/modulos/entorno-y-herramientas.md`).

## Módulos

El proyecto se organiza en 16 módulos (0 a 15), desde el entorno de trabajo hasta la publicación del sitio y el guion de entrevista. El detalle vive en `00-contexto/`.

## Licencia

El código (`infraestructura/`, `.github/` y `sitio/`) se publica bajo la licencia MIT (`LICENSE`). El contenido (documentos, diagramas, modelos y contratos de ejemplo) se publica bajo CC BY 4.0 (`LICENSE-CONTENIDO.md`).

Kuenta es una entidad **ficticia** creada con fines de aprendizaje. Este material no es asesoría legal, financiera ni regulatoria: las referencias normativas y los precios deben verificarse en las fuentes oficiales antes de cualquier uso real.
