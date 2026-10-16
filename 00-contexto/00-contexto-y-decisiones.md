# Kuenta — Contexto y decisiones del proyecto

_Documento vivo y **fuente de verdad del contexto del proyecto**. Última actualización: 2026-10-15. Se actualiza a medida que se toman decisiones o se hacen aclaraciones. Las siglas se escriben con su significado la primera vez que aparecen; el glosario completo está en la sección 11._

## 1. Objetivo
Diseñar la arquitectura completa de **Kuenta**, una fintech colombiana ficticia de ahorros, pagos y créditos, desde el punto de vista de un arquitecto de software recién contratado: **paso a paso y "como debe ser"**. El resultado queda documentado, diagramado y **publicado en un VPS (servidor virtual privado)** como sitio navegable, para consultarlo y exponerlo en entrevistas. Debe ser completo: que no falte nada.

**Principio de trabajo: todo se define desde cero.** Nada se construye ni se decide por adelantado; cada paso se acuerda antes de ejecutarlo.

## 2. Decisiones tomadas
| Decisión | Resultado | Fecha |
|---|---|---|
| Escenario | **Fintech colombiana** de ahorros, pagos y créditos (ficticia) | 2026-10-15 |
| Nombre de la fintech | **Kuenta** (juego con "cuenta"; ficticia, sin verificar coincidencia con marcas reales) | 2026-10-15 |
| Nube principal | **AWS (Amazon Web Services)**. El proyecto se centra solo en esta nube | 2026-10-15 |
| Temario | **16 módulos aprobados** (ver sección 3) | 2026-10-15 |
| Ubicación del repositorio | **`C:\dev\fintech-kuenta`** (opción B elegida por el autor). Motivos: evitar que OneDrive sincronice la carpeta oculta `.git` (riesgo de conflictos), mejor velocidad con Docker y coherencia con sus otros proyectos en `C:\dev`. El respaldo lo dará GitHub. La carpeta vacía creada antes dentro de OneDrive queda sin uso; qué hacer con ella lo decide el autor (ver 5.1) | 2026-10-15 |
| Documento de contexto | Este documento es la **fuente de verdad** del contexto; se actualiza al cerrar cada módulo. Los **entregables** viven en el repo | 2026-10-15 |
| Política de Git | **Mensajes de commit:** estándar Conventional Commits (https://www.conventionalcommits.org/), formato `tipo(alcance): descripción`; tipos `docs`, `feat`, `chore`, `fix`, `refactor`; primera línea de hasta 72 caracteres, en presente, un cambio lógico por commit. **Ramas:** `main` es la rama estable y publicada; una rama corta por módulo (por ejemplo `modulo-01-caso-negocio`) que se integra a `main` con un pull request (solicitud de integración en GitHub) al cerrar el módulo | 2026-10-15 |
| Repo en GitHub | **Público** desde el inicio (decisión de el autor, 2026-10-15). Nombre: `fintech-kuenta`. `referencias/` solo guarda enlaces y lecturas públicas. Todo lo que se haga commit es visible, incluido el historial | 2026-10-15 |
| Estructura del sitio | Docusaurus vive en la carpeta **`sitio/`** (opción A elegida por el autor), configurada para leer el contenido de `../docs`; así `docs/` queda limpia y la raíz del repo ordenada | 2026-10-15 |
| Entorno de trabajo | **Docker** como estrategia: las herramientas que lo permitan corren en contenedores (cajas aisladas con la herramienta y sus dependencias ya incluidas), para no instalar Node.js ni Java en el equipo y para reforzar Docker. Docker Desktop usa WSL 2 (Windows Subsystem for Linux, un Linux ligero dentro de Windows). Pendiente verificar las imágenes oficiales | 2026-10-15 |
| Herramientas ya instaladas en el equipo de el autor | Docker Desktop, Archi y Git (versiones sin verificar) | 2026-10-15 |
| Infraestructura de publicación | VPS propio (skill infraestructura-vps): Docker, nginx compartido (servidor web), Cloudflare, subdominio bajo sitiosapps.com | — |

## 3. Temario aprobado (16 módulos, numeración vigente)
| # | Módulo | Entregable |
|---|---|---|
| 0 | Entorno y herramientas (incluye glosario común) | Repo (repositorio), sitio base y modelo vacío en Archi |
| 1 | Caso de negocio, interesados y alcance (incluye BPMN: Business Process Model and Notation, notación para modelar procesos de negocio) | Documento de contexto y objetivos; procesos en BPMN |
| 2 | Requisitos funcionales y no funcionales, restricciones y regulación (incluye casos de uso) | Catálogo de requisitos y atributos de calidad priorizados |
| 3 | **Metodología ágil: épicas, historias de usuario, criterios de aceptación, backlog (lista priorizada de trabajo) y MVP (Minimum Viable Product, producto mínimo viable)** (módulo nuevo) | Backlog inicial priorizado |
| 4 | Arquitectura empresarial ligera: capacidades, dominios y principios | Mapa de capacidades y principios (Archi) |
| 5 | Arquitectura de aplicación: estilo, límites de dominio, C4 (Context, Containers, Components, Code: contexto, contenedores, componentes y código) y UML (Unified Modeling Language, lenguaje unificado de modelado: secuencia y clases) | Diagramas de contexto y contenedores; secuencias clave |
| 6 | Datos y consistencia: modelo entidad-relación, eventos y sagas (secuencias de pasos con compensación entre servicios) | Modelo de datos de alto nivel y flujo de eventos |
| 7 | Integración y APIs (Application Programming Interface, interfaz de programación de aplicaciones): contratos, gateway (puerta de entrada de las APIs), terceros | Contratos de ejemplo y mapa de integraciones |
| 8 | Arquitectura en AWS (diagramación de AWS) | Diagrama de despliegue y tabla de servicios |
| 9 | Seguridad y cumplimiento: identidad, cifrado, auditoría, antifraude | Modelo de amenazas y controles |
| 10 | Resiliencia y operación: continuidad, observabilidad, objetivos de servicio | Plan de recuperación y objetivos de nivel de servicio |
| 11 | Entrega: CI/CD (Continuous Integration / Continuous Delivery, integración y entrega continuas) e IaC (Infrastructure as Code, infraestructura como código) | Diseño del flujo de despliegue |
| 12 | Costos (FinOps: Financial Operations, gestión financiera de la nube) | Estimación en **total anual** |
| 13 | Decisiones y trade-offs (compromisos entre alternativas) con ADR (Architecture Decision Record, registro de decisión de arquitectura) | ADR de decisiones clave y evaluación de riesgos |
| 14 | Gobierno y evolución | Lineamientos y plan de evolución |
| 15 | Publicación y exposición | Sitio en el VPS y guion de entrevista |

## 4. Reglas de trabajo
**Estructura y ritmo**
- Un módulo a la vez: se explica el porqué, se toman las decisiones y se construye el entregable.
- Cada módulo incluye: concepto, por qué importa, cómo lo hace un arquitecto real, práctica, entregable y una pregunta típica de entrevista.
- Al final del proyecto, lista de verificación de completitud contra una arquitectura completa.
- Nada cambia de alcance, orden o numeración sin acordarlo y registrarlo en este documento.

**Terminología**
- Todo término técnico se explica con descripción y detalle, y toda sigla se escribe con su significado completo la primera vez que aparece. Las siglas se reúnen en el glosario (sección 11).

**Método**
- Se prefiere mostrar y hacer antes que describir: diagramas visuales, prácticas con las herramientas, cuestionarios de repaso, tablas comparativas y construcción real de los entregables.

**Valores y fuentes**
- Costos y valores siempre en **total anual**.
- Precios y especificaciones se toman de la página oficial del proveedor, con la URL de la fuente.

## 5. Herramientas (todas gratuitas)
| Necesidad | Herramienta | Cómo corre (propuesta, por confirmar en el Módulo 0) |
|---|---|---|
| Modelo formal ArchiMate (negocio → tecnología); exporta reporte HTML (HyperText Markup Language, lenguaje de páginas web) navegable | Archi (ya instalado) | Programa de escritorio |
| Diagramas C4 como código | Structurizr (DSL: Domain-Specific Language, lenguaje específico de dominio; y CLI: Command-Line Interface, herramienta de línea de comandos) | Contenedor Docker (Structurizr Lite) |
| Diagramas libres, BPMN y UML (soporte a verificar al llegar a esos módulos) | draw.io; Excalidraw para bocetos | Aplicación web o de escritorio |
| Sitio navegable de documentación | Docusaurus (licencia verificada 2026-10-15: MIT para el código y CC-BY-4.0 para la documentación; requiere Node.js 20 o superior; no publica imagen Docker oficial, así que se usa la imagen oficial de Node) | Contenedor Docker (imagen oficial `node:24`, Node.js 24 LTS) |
| Control de versiones | Git (ya instalado) y GitHub | Instalación normal |
| Contenedores | Docker Desktop (ya instalado) | Instalación normal |
| Publicación | VPS propio | Docker + nginx |

Notas: Archi modela en ArchiMate (lenguaje de modelado de arquitectura empresarial); no hace BPMN ni UML. El reporte HTML de Archi y la documentación en Markdown (texto con formato sencillo) serían dos sitios; se decide cómo integrarlos más adelante. La cuenta de AWS es opcional (solo para probar algo real); verificar condiciones de la capa gratuita en la página oficial antes de abrirla. Los nombres exactos de las imágenes Docker se verifican en las páginas oficiales antes de usarlas.

### 5.1 Repositorio del proyecto (estructura)
**Ruta definitiva (decidida 2026-10-15): `C:\dev\fintech-kuenta`.** La carpeta vacía creada antes dentro de OneDrive queda sin uso; el autor decide si la elimina o la conserva.

```
fintech-kuenta/
├─ README.md                  ← qué es, cómo navegarlo
├─ 00-contexto/               ← decisiones, temario, glosario (copia del documento del proyecto)
├─ sitio/                     ← aplicación Docusaurus (lee el contenido de ../docs)
├─ docs/                      ← contenido del sitio (Markdown)
│  ├─ modulos/                ← 00-entorno … 15-publicacion (una nota por módulo)
│  ├─ requisitos/             ← catálogo, historias de usuario, casos de uso
│  └─ adr/                    ← decisiones de arquitectura
├─ modelos/
│  ├─ archi/                  ← modelo ArchiMate (.archimate)
│  ├─ structurizr/            ← modelo C4 (.dsl)
│  └─ bpmn/                   ← procesos de negocio
├─ diagramas/                 ← fuentes (draw.io, Excalidraw) y exportados (PNG, SVG)
├─ contratos-api/             ← OpenAPI de ejemplo
├─ infraestructura/           ← diseño AWS, ejemplos de IaC, despliegue en el VPS
├─ entrevista/                ← guion y preguntas típicas
└─ referencias/               ← lecturas y enlaces públicos
```
Criterio: los artefactos viven por tipo (modelos, diagramas, contratos) para no duplicarse entre módulos; las notas viven por módulo y enlazan a esos artefactos; `docs/` alimenta el sitio publicado.

**Estado (2026-10-15):** el esqueleto de carpetas y el `README.md` **ya están creados** en `C:\dev\fintech-kuenta`. Cada carpeta lleva un archivo vacío `.gitkeep` (Git no guarda carpetas vacías; se borra cuando la carpeta recibe contenido real). `00-contexto/` contiene la copia de este documento. **Git aún no está inicializado.**

## 6. Aclaraciones conceptuales acumuladas
**Rol del arquitecto.** Define el qué y el porqué estructural (división del sistema, tecnología, integración, reglas). El líder técnico y el equipo deciden el cómo detallado. El arquitecto sigue involucrado: revisa cumplimiento, resuelve dudas y ajusta el diseño.

**Quién dibuja qué (práctica habitual, varía por empresa).** Arquitecto: contexto y contenedores (C4 niveles 1 y 2), despliegue en la nube, modelos ArchiMate, secuencias críticas. Arquitecto o líder técnico: componentes (C4 nivel 3). Arquitecto de datos o equipo: entidad-relación. Analista o Product Owner (dueño del producto): casos de uso. Desarrollador o líder técnico: clases (C4 nivel 4).

**Arquitectura empresarial (EA: Enterprise Architecture) vs. de software/solución.** La arquitectura empresarial define rumbo, dominios, estándares y hoja de ruta para toda la organización (marcos: TOGAF, ArchiMate). La arquitectura de solución diseña un sistema concreto (C4, ADR, arc42). La arquitectura empresarial interviene antes (contexto), al arrancar (alineación), durante (revisión de cumplimiento) y después (panorama actualizado). En el ejercicio, el autor hace ambos papeles: arquitectura empresarial ligera + diseño de solución.

**SOA, DDD, microservicios y AWS Well-Architected.** No compiten: SOA (Service-Oriented Architecture, arquitectura orientada a servicios) y microservicios son estilos de arquitectura; DDD (Domain-Driven Design, diseño guiado por el dominio) es un enfoque de modelado del dominio del negocio; Well-Architected ("bien diseñado") es un marco de buenas prácticas de nube (seis pilares: excelencia operativa, seguridad, confiabilidad, eficiencia de rendimiento, optimización de costos y sostenibilidad). Orden de uso: DDD define límites → SOA/microservicios los convierte en servicios → Well-Architected evalúa la solución en AWS. Tensiones reales: modelo canónico (SOA) vs. contextos delimitados (DDD); reutilización y gobierno centralizado vs. autonomía de equipos. Se resuelven documentando decisiones (ADR, módulo 13). Definir glosario común en el módulo 0.

**Marcos estándar de referencia.** TOGAF 10 (The Open Group Architecture Framework: método de arquitectura empresarial), ArchiMate 3.2 (notación), ISO/IEC/IEEE 42010:2022 (norma internacional para describir arquitecturas; ISO: Organización Internacional de Normalización, IEC: Comisión Electrotécnica Internacional, IEEE: Instituto de Ingenieros Eléctricos y Electrónicos), C4 y arc42 (documentación ligera).

## 7. Referencias consultadas
- TOGAF 10: https://www.architectureandgovernance.com/elevating-ea/the-open-group-launches-togaf-standard-10th-edition-seeks-boundaryless-information-flow/
- ArchiMate 3.2: https://pubs.opengroup.org/architecture/archimate32-doc.singlepage
- ISO/IEC/IEEE 42010: https://sebokwiki.org/wiki/ISO/IEC/IEEE_42010
- C4 model: https://c4model.com/
- Archi (reporte HTML, historial de versiones): https://devlog.archimatetool.com/?p=35
- Archi: https://www.archimatetool.com/
- Structurizr: https://docs.structurizr.com/
- draw.io: https://www.drawio.com/
- Docusaurus: https://docusaurus.io/
- Excalidraw: https://excalidraw.com/
- AWS Well-Architected: https://aws.amazon.com/architecture/well-architected/
- Circular Externa 005 de 2019 (Superintendencia Financiera de Colombia, computación en la nube): https://www.ambitojuridico.com/sites/default/files/BancoMedios/Archivos/circexterna-005-19%28superfinanciera%29.pdf
- SOA Governance (Erl): https://informit.com/store/soa-governance-9780132478397

## 8. Lecturas recomendadas
Fundamentals of Software Architecture (Richards y Ford); Designing Data-Intensive Applications (Kleppmann); Building Microservices (Newman); SOA Governance (Erl).

## 9. Estado actual y pendientes
- **Foco actual:** **Módulo 0 (Entorno y herramientas) en proyecto.** Entregable: repo, sitio base y modelo vacío en Archi. Hecho: mapa visual del flujo de herramientas, decisión de usar Docker, inventario de herramientas instaladas (Docker Desktop, Archi y Git), repo en `C:\dev\fintech-kuenta` con esqueleto de carpetas, `README.md` y copia de este documento en `00-contexto/`. **Siguiente paso (paso 0.5, en proyecto):** Git ya está inicializado y el primer commit hecho (`8bc936a`). El repo público https://github.com/maomauro/fintech-kuenta ya existe y `main` está subida. La rama `modulo-00-entorno` ya está creada. En ella se genera el sitio base en `sitio/` con Docusaurus (Docker) y el modelo vacío de Archi. Después: sitio base con Docusaurus en Docker, modelo vacío en Archi, glosario común y repaso con pregunta de entrevista.
- **Pendiente de decidir con el autor:** licencia del repo público (sin licencia, por defecto, nadie puede reutilizar el contenido legalmente).
- **Pendiente de confirmar con el autor:** qué hacer con la carpeta vacía de OneDrive; si el equipo usa WSL 2 como motor de Docker Desktop.
- **Pendiente por verificar al llegar a cada módulo:** imagen oficial de Structurizr; versiones instaladas de Docker Desktop, Archi y Git; soporte BPMN/UML en draw.io; condiciones de la capa gratuita de AWS; enlaces de documentación oficial de AWS; detalles de la normativa de la Superintendencia Financiera.
- **Lista de temas para profundizar (fuera del flujo principal):** _(vacía)_

## 10. Registro de cambios
| Fecha | Cambio |
|---|---|
| 2026-10-15 | Creación del documento: escenario fintech, nube AWS, temario de 16 módulos aprobado |
| 2026-10-15 | Se nombra la fintech **Kuenta**; se registra la carpeta del repositorio y su estructura propuesta (sección 5.1) |
| 2026-10-15 | El autor aclara que todo se define desde cero: la carpeta queda vacía y lista; el esqueleto, el README y Git se construyen de forma guiada en el Módulo 0 (secciones 1, 5.1 y 9) |
| 2026-10-15 | Inicia el Módulo 0. Se elige **Docker** como estrategia de entorno (secciones 2 y 5) y se acuerda explicar los términos con detalle y escribir las siglas completas (sección 4) |
| 2026-10-15 | Se escriben las siglas con su significado y se agrega el glosario (sección 11) |
| 2026-10-15 | El autor informa que ya tiene instalados Docker Desktop, Archi y Git. Elige la **opción B: el repo vive en `C:\dev\fintech-kuenta`** (secciones 2, 5.1 y 9) |
| 2026-10-15 | Se crea el esqueleto de carpetas y el `README.md` en `C:\dev\fintech-kuenta`. El autor confirma que el documento del proyecto es la fuente de verdad y que `00-contexto/` guarda su copia. El autor pide recomendación sobre ramas y mensajes de commit (secciones 2, 5.1 y 9) |
| 2026-10-15 | El autor adopta **Conventional Commits** y **una rama por módulo** con `main` estable (sección 2) |
| 2026-10-15 | Git inicializado en `C:\dev\fintech-kuenta` (rama `main`, identidad ya configurada, Git 2.53.0); primer commit "chore: crea esqueleto del repositorio y README" (reescrito con `--amend` antes de subir; hoy `8bc936a`). El autor decide que el repo de GitHub sea **público** (sección 2) |
| 2026-10-15 | Repo creado en GitHub (público): https://github.com/maomauro/fintech-kuenta ; `main` subida (secciones 2 y 9) |
| 2026-10-15 | Se ajusta la copia del documento para el repo público: sin referencias a material de terceros ni rutas locales (secciones 2 y 5.1) |
| 2026-10-15 | Rama `modulo-00-entorno` creada. Docusaurus verificado en fuentes oficiales (MIT + CC-BY-4.0, Node.js 20+, sin imagen Docker oficial; se usa `node:24`). El autor elige la carpeta `sitio/` para la aplicación (secciones 2, 5 y 5.1) |
| 2026-10-15 | Se centra el proyecto solo en AWS: se retira todo lo relacionado con otras nubes (secciones 2, 3 y 9) |
| 2026-10-15 | Se reescribe este documento con enfoque de proyecto (sin enfoque didáctico) y se agrega la página Herramientas al sitio |

## 11. Glosario de siglas y términos
| Sigla o término | Significado |
|---|---|
| ADR | Architecture Decision Record: registro de decisión de arquitectura (qué se decidió, por qué y con qué consecuencias) |
| API | Application Programming Interface: interfaz de programación de aplicaciones; la forma en que un sistema ofrece funciones a otros |
| ArchiMate | Lenguaje estándar para modelar arquitectura empresarial (negocio, aplicación, tecnología) |
| arc42 | Plantilla ligera para documentar arquitecturas de software (es un nombre propio) |
| AWS | Amazon Web Services: la nube de Amazon |
| BPMN | Business Process Model and Notation: notación para dibujar procesos de negocio |
| C4 | Context, Containers, Components, Code: método para diagramar arquitectura en cuatro niveles de detalle |
| CI/CD | Continuous Integration / Continuous Delivery: integración y entrega continuas; automatiza probar y desplegar cambios |
| CLI | Command-Line Interface: herramienta que se maneja escribiendo comandos |
| Contenedor | Caja aislada que lleva una aplicación con todo lo que necesita para ejecutarse (Docker es la herramienta más usada) |
| DDD | Domain-Driven Design: diseño guiado por el dominio; modela el software según el lenguaje y las reglas del negocio |
| Docker | Herramienta para crear y ejecutar contenedores |
| DSL | Domain-Specific Language: lenguaje específico de dominio; aquí, el texto con el que Structurizr describe un modelo C4 |
| EA | Enterprise Architecture: arquitectura empresarial |
| FinOps | Financial Operations: práctica de gestionar y optimizar el costo de la nube |
| Gateway | Puerta de entrada única que recibe las llamadas a las APIs y las dirige a cada servicio |
| HTML | HyperText Markup Language: lenguaje con el que se escriben las páginas web |
| IaC | Infrastructure as Code: infraestructura como código; crear servidores y redes mediante archivos en vez de clics |
| MVP | Minimum Viable Product: producto mínimo viable; la versión más pequeña que ya aporta valor |
| PNG, SVG | Formatos de imagen: PNG es de píxeles; SVG es vectorial (se amplía sin perder calidad) |
| Repo | Repositorio: carpeta de proyecto con el historial de todos sus cambios (lo gestiona Git) |
| SOA | Service-Oriented Architecture: arquitectura orientada a servicios |
| TOGAF | The Open Group Architecture Framework: método de arquitectura empresarial |
| UML | Unified Modeling Language: lenguaje unificado de modelado (diagramas de secuencia, clases, etc.) |
| VPS | Virtual Private Server: servidor virtual privado que se alquila |
| WSL 2 | Windows Subsystem for Linux, versión 2: Linux ligero que corre dentro de Windows; Docker Desktop lo usa |