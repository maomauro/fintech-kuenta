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
- [ ] Modelo vacío en Archi
- [ ] Glosario común
