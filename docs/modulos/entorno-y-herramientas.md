---
sidebar_position: 0
title: "Módulo 0 · Entorno y herramientas"
---

# Módulo 0 · Entorno y herramientas

**Entregable:** repositorio, sitio base y modelo vacío en Archi.

Antes de diseñar nada hay que preparar el lugar de trabajo: dónde viven los archivos, con qué herramientas se produce cada pieza y cómo se publica el resultado.

## Herramientas

El proyecto sigue el principio de **documentación como código**: todo se guarda como archivos de texto o modelos que se pueden versionar, y el sitio se genera a partir de ellos.

```
Archi / Structurizr / draw.io  →  repositorio Git  →  Docusaurus  →  VPS
```

| Herramienta | Qué es y para qué sirve en Kuenta | Cómo corre | Se usa en |
|---|---|---|---|
| **Archi** | Programa de escritorio para modelar arquitectura empresarial con **ArchiMate**, un lenguaje estándar con capas de negocio, aplicación y tecnología. Aquí produce el mapa de capacidades y las vistas que relacionan negocio con sistemas. Exporta un reporte HTML navegable. No dibuja BPMN ni UML. | Programa de escritorio | Módulos 0 y 4 |
| **Structurizr** | Permite describir la arquitectura como **texto** en vez de dibujarla a mano. De un solo modelo genera varios diagramas C4: contexto, contenedores y componentes. Así los diagramas se mantienen coherentes entre sí. | Contenedor Docker (Structurizr Lite) | Módulo 5 |
| **draw.io** | Editor de diagramas libres. Aquí se usa para procesos BPMN, diagramas UML (secuencia y clases) y el diagrama de despliegue en AWS. El soporte exacto de BPMN y UML se verifica al llegar a esos módulos. | Aplicación web o de escritorio | Módulos 1, 5 y 8 |
| **Excalidraw** | Pizarra de bocetos con trazo a mano alzada. Sirve para explorar ideas rápido antes de formalizarlas en un modelo. | Aplicación web | Todo el proyecto |
| **Docusaurus** | Generador de sitios web de documentación. Convierte los archivos Markdown de `docs/` en este sitio, con menú, buscador y navegación. Licencia MIT (código) y CC-BY-4.0 (documentación). | Contenedor Docker (Node.js 24) | Módulos 0 y 15 |
| **Git y GitHub** | Git guarda el historial de cada cambio; GitHub es el respaldo y la vitrina pública del repositorio. Los mensajes siguen el estándar *Conventional Commits* y cada módulo se trabaja en su propia rama. | Instalación normal | Todo el proyecto |
| **Docker** | Ejecuta las herramientas dentro de **contenedores**: cajas aisladas con la herramienta y todo lo que necesita. Evita instalar Node.js o Java en el equipo y permite repetir el mismo entorno en el servidor. | Docker Desktop | Todo el proyecto |
| **VPS, nginx y Cloudflare** | El VPS (servidor virtual privado) aloja el sitio publicado. nginx es el servidor web que entrega las páginas; Cloudflare gestiona el dominio y protege la entrada. | Servidor propio | Módulo 15 |

### Por qué estas herramientas

- **Son gratuitas**, así que cualquiera puede reproducir el proyecto sin costo.
- **Cada una cubre una función distinta**: modelar la empresa (Archi), describir la aplicación (Structurizr), dibujar procesos y despliegue (draw.io), documentar (Docusaurus), versionar (Git) y publicar (VPS).
- **Todo queda en archivos** que se pueden revisar, comparar y reconstruir.

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| Ubicación del repositorio | Fuera de carpetas sincronizadas con servicios en la nube | La carpeta oculta `.git` tiene miles de archivos pequeños y la sincronización automática puede generar conflictos |
| Entorno de herramientas | Docker | No instalar Node.js ni Java en el equipo y poder repetir el mismo entorno en el servidor |
| Repositorio en GitHub | Público | Servir de respaldo y de vitrina del proyecto |
| Mensajes de commit | *Conventional Commits*: `tipo(alcance): descripción` | Historial legible y ordenado |
| Ramas | `main` estable y una rama corta por módulo, integrada con un *pull request* (solicitud de integración) al cerrarlo | Practicar un flujo de trabajo de equipo |
| Sitio | Docusaurus en la carpeta `sitio/`, leyendo el contenido de `docs/` | Separar el contenido de la aplicación que lo publica |

## Estructura del repositorio

| Carpeta | Para qué sirve |
|---|---|
| `00-contexto/` | Objetivo, decisiones, temario y glosario de siglas: el punto de partida del proyecto |
| `sitio/` | Aplicación Docusaurus que genera este sitio |
| `docs/` | Contenido del sitio: módulos, requisitos y decisiones de arquitectura |
| `modelos/` | Modelos de arquitectura: ArchiMate (Archi), C4 (Structurizr) y BPMN |
| `diagramas/` | Diagramas fuente y sus imágenes exportadas |
| `contratos-api/` | Contratos de API de ejemplo en OpenAPI |
| `infraestructura/` | Diseño en AWS, infraestructura como código y despliegue en el VPS |
| `entrevista/` | Guion y preguntas típicas para exponer la arquitectura |
| `referencias/` | Lecturas y enlaces públicos |

Los artefactos se guardan **por tipo** (modelos, diagramas, contratos) para no duplicarlos entre módulos; las notas de cada módulo enlazan a ellos.

## Estado

- [x] Repositorio creado y publicado en GitHub
- [x] Sitio base con Docusaurus ejecutándose en Docker
- [x] Modelo vacío en Archi (`modelos/archi/kuenta.archimate`)
- [x] Glosario común (al final de esta página)

## Glosario

Siglas y términos usados en el proyecto, con su significado completo. Crece al cerrar cada módulo.

| Sigla o término | Significado |
|---|---|
| ADR | Architecture Decision Record: registro de decisión de arquitectura (qué se decidió, por qué y con qué consecuencias) |
| API | Application Programming Interface: interfaz de programación de aplicaciones; la forma en que un sistema ofrece funciones a otros |
| arc42 | Plantilla ligera para documentar arquitecturas de software (es un nombre propio) |
| Archi | Programa gratuito para modelar arquitectura empresarial con ArchiMate |
| ArchiMate | Lenguaje estándar para modelar arquitectura empresarial (negocio, aplicación, tecnología) |
| AWS | Amazon Web Services: la nube de Amazon |
| BPMN | Business Process Model and Notation: notación para dibujar procesos de negocio |
| C4 | Context, Containers, Components, Code: método para diagramar arquitectura en cuatro niveles de detalle |
| CI/CD | Continuous Integration / Continuous Delivery: integración y entrega continuas; automatiza probar y desplegar cambios |
| CLI | Command-Line Interface: herramienta que se maneja escribiendo comandos |
| Commit | Punto guardado en el historial de Git: un conjunto de cambios con un mensaje que explica qué se hizo |
| Contenedor | Caja aislada que lleva una aplicación con todo lo que necesita para ejecutarse (Docker es la herramienta más usada) |
| Conventional Commits | Convención para escribir mensajes de commit con el formato `tipo(alcance): descripción` |
| DDD | Domain-Driven Design: diseño guiado por el dominio; modela el software según el lenguaje y las reglas del negocio |
| Docker | Herramienta para crear y ejecutar contenedores |
| Docusaurus | Generador de sitios web de documentación a partir de archivos Markdown |
| DSL | Domain-Specific Language: lenguaje específico de dominio; aquí, el texto con el que Structurizr describe un modelo C4 |
| EA | Enterprise Architecture: arquitectura empresarial |
| FinOps | Financial Operations: práctica de gestionar y optimizar el costo de la nube |
| Gateway | Puerta de entrada única que recibe las llamadas a las APIs y las dirige a cada servicio |
| Git | Sistema que guarda el historial de cambios de un proyecto y permite trabajar en ramas |
| GitHub | Servicio en internet donde se aloja el repositorio de Git y se comparte públicamente |
| HTML | HyperText Markup Language: lenguaje con el que se escriben las páginas web |
| IaC | Infrastructure as Code: infraestructura como código; crear servidores y redes mediante archivos en vez de clics |
| Markdown | Formato de texto sencillo (títulos, listas, tablas) con el que se escriben las páginas de `docs/` |
| MVP | Minimum Viable Product: producto mínimo viable; la versión más pequeña que ya aporta valor |
| PNG, SVG | Formatos de imagen: PNG es de píxeles; SVG es vectorial (se amplía sin perder calidad) |
| Pull request | Solicitud de integración: propuesta para unir los cambios de una rama con `main`, que se revisa antes de aceptarla |
| Rama (branch) | Línea de trabajo paralela dentro de Git; aquí hay una por módulo y `main` es la estable |
| Repo | Repositorio: carpeta de proyecto con el historial de todos sus cambios (lo gestiona Git) |
| SOA | Service-Oriented Architecture: arquitectura orientada a servicios |
| Structurizr | Herramienta que describe la arquitectura como texto y genera diagramas C4 |
| TOGAF | The Open Group Architecture Framework: método de arquitectura empresarial |
| UML | Unified Modeling Language: lenguaje unificado de modelado (diagramas de secuencia, clases, etc.) |
| VPS | Virtual Private Server: servidor virtual privado que se alquila |
| WSL 2 | Windows Subsystem for Linux, versión 2: Linux ligero que corre dentro de Windows; Docker Desktop lo usa |
