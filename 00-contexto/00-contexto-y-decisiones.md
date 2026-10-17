# Kuenta — Contexto y decisiones del proyecto

_Documento vivo y **fuente de verdad del contexto del proyecto**. Última actualización: 2026-10-16. Se actualiza a medida que se toman decisiones o se hacen aclaraciones. Las siglas se escriben con su significado la primera vez que aparecen; el glosario completo está en la sección 11._

## 1. Objetivo
Diseñar la arquitectura completa de **Kuenta**, una fintech colombiana ficticia de depósitos y pagos (constituida como SEDPE; los créditos llegan en una etapa posterior), desde el punto de vista de un arquitecto de software recién contratado: **paso a paso y "como debe ser"**. El resultado queda documentado, diagramado y **publicado en un VPS (servidor virtual privado)** como sitio navegable, para consultarlo y exponerlo en entrevistas. Debe ser completo: que no falte nada.

**Principio de trabajo: todo se define desde cero.** Nada se construye ni se decide por adelantado; cada paso se acuerda antes de ejecutarlo.

## 2. Decisiones tomadas
| Decisión | Resultado | Fecha |
|---|---|---|
| Escenario | **Fintech colombiana** ficticia de depósitos y pagos, constituida como SEDPE (ver "Figura legal"). Los créditos quedan para una etapa posterior, porque una SEDPE no puede otorgarlos | 2026-10-16 |
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
| Público objetivo (Módulo 1) | **Personas naturales con poco acceso bancario** en la primera versión | 2026-10-15 |
| Producto ancla (Módulo 1) | **Depósito de bajo monto** digital (ahorro y pagos); los créditos llegan en una etapa posterior con otra figura legal o con un aliado | 2026-10-16 |
| Interesados (Módulo 1) | Cinco grupos: **clientes, reguladores, inversionistas, equipo interno y aliados/integraciones** | 2026-10-15 |
| Alcance de la primera versión (Módulo 1) | **Dentro:** registro y verificación de identidad (KYC), depósito de bajo monto digital, depósitos y retiros (incluido efectivo en corresponsales bancarios), transferencias entre cuentas Kuenta y a otras entidades por Bre-B, consulta de saldo y movimientos, notificaciones, atención básica y reclamos, antifraude básico y reportes mínimos. **Fuera:** créditos, pagos de servicios y recargas, tarjeta física, cobros a comercios, inversiones, operación fuera de Colombia. Detalles regulatorios se verifican en el Módulo 2 | 2026-10-16 |
| Convenciones BPMN (Módulo 1) | Tareas con **verbo + objeto**; todo camino termina en un evento de fin; el cliente siempre queda notificado del resultado; los caminos excluyentes pueden converger en una misma tarea de notificación | 2026-10-15 |
| Identidad en la apertura de cuenta (Módulo 1) | La validación de identidad la hace la **Registraduría Nacional del Estado Civil (simulada)**, tratada como sistema externo. Cómo se accede de verdad se verifica en el Módulo 7 | 2026-10-16 |
| Monto mínimo de apertura (Módulo 1) | **Sin monto mínimo**: la cuenta se abre vacía y el depósito es un proceso aparte. Regulación verificada en el Módulo 2 (ver "Regulación verificada") | 2026-10-16 |
| Corresponsales bancarios (Módulo 1) | **Incluidos como aliados** para depositar y retirar efectivo; agregan el proceso BPMN "Depositar efectivo". Su regulación se verificó en el Módulo 2 | 2026-10-16 |
| Figura legal (Módulo 2) | **SEDPE** (Sociedad Especializada en Depósitos y Pagos Electrónicos, Ley 1735 de 2014) que ofrece **depósitos de bajo monto**. Una SEDPE no puede otorgar crédito (Ley 1735, art. 1 par. 1): los créditos quedan para una etapa posterior con otra figura legal (banco o compañía de financiamiento) o con un aliado; se retoma en el ADR del Módulo 13 | 2026-10-16 |
| Tope del depósito de bajo monto (Módulo 2) | **8 SMLMV** de saldo máximo y de débitos mensuales (hoy $14.007.240 con SMLMV 2026 de $1.750.905, Decreto 159 de 2026, transitorio). El sistema debe controlarlo y bloquear lo que lo supere; el valor del SMLMV es parametrizable | 2026-10-16 |
| Nombre del producto (Módulo 2) | En documentos y diagramas técnicos se usa **"depósito de bajo monto"** (término legal, Decreto 222 de 2020). El nombre comercial se valida con un abogado antes de publicarlo | 2026-10-16 |
| Transferencias a otras entidades (Módulo 2) | **Dentro de la primera versión**, por **Bre-B** (sistema de pagos inmediatos). Implica requisitos de disponibilidad (98,5 % a 99,5 % según el Decreto 1069 de 2025), nombre enmascarado del beneficiario antes de confirmar e integración externa (Módulo 7). Por verificar: si Bre-B es obligatoria para una SEDPE | 2026-10-16 |
| Regulación verificada (Módulo 2) | **Depósitos de bajo monto:** Decreto 222 de 2020 / Decreto 2555 de 2010 (saldo y débitos mensuales máx. 8 SMLMV, un depósito por persona y entidad, terminación si queda sin fondos 3 meses o más, apertura sin presencia física). **SEDPE:** capital mínimo de $5.846.000.000 a valores de 2014, ajustado cada enero por IPC (fuente de tercero, sin confirmar); autorización en dos etapas. **Fogafín:** inscripción de 0,115 por mil del capital suscrito (una vez), prima de 0,15 % anual sobre depósitos asegurados y cobertura de $50.000.000 por persona (Resolución 002 de 2026). **SARLAFT/KYC:** apertura a distancia permitida (biometría, firma digital, bases de datos); debida diligencia simplificada para bajo monto (identidad al abrir y completar información en 3 días hábiles); listas restrictivas antes de abrir y de forma continua; reporte de operaciones sospechosas a la UIAF. **Corresponsales:** reciben y entregan efectivo, hacen transferencias y consultas; solo con terminal conectado y no operan si falla la comunicación; la entidad responde por completo y entrega comprobante. **GMF:** exención de retiros hasta 65 UVT para bajo monto (Estatuto Tributario, art. 879 num. 25). **Ley 1328 de 2009:** Sistema de Atención al Consumidor (SAC), defensor del consumidor, tarifas publicadas, costo informado antes de cada operación, extracto mensual gratis, aviso previo de cambios. **Nube y ciberseguridad:** Circular Externa 005 de 2019 y 007 de 2018. **Datos personales:** Ley 1581 de 2012 (biométricos sensibles; autorización previa, expresa e informada). **Pagos:** Decreto 1069 de 2025 (Bre-B) y Decreto 368 de 2026 (finanzas abiertas; las SEDPE son proveedoras de datos obligatorias). **No verificado aún:** capital SEDPE indexado, conservación de documentos SARLAFT, plazos de quejas y SAC, acceso a la Registraduría, obligatoriedad de Bre-B, tarifa del GMF y UVT 2026; algunas normas se leyeron en copias de terceros y se confirman en fuente oficial antes de publicar | 2026-10-16 |
| Regla "investigar primero" | En cada módulo, **primero se investiga lo que pueda cambiar las definiciones** (normativa, límites, costos) y solo después se define y se documenta, para no rehacer | 2026-10-16 |
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
- **Investigar primero:** al iniciar cada módulo se investiga lo que pueda cambiar las definiciones y solo después se define y se documenta una sola vez.

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
- Resolución 002 de 2026 de Fogafín: https://www.fogafin.gov.co/sites/default/files/2026-05/Resolucion%20JD%20002%20de%202026.pdf
- Nombre de los depósitos (Ámbito Jurídico): https://www.ambitojuridico.com/noticias/mercantil/financiero-cambiario-y-seguros/aunque-comparten-naturaleza-juridica-depositos-de
- GMF en depósitos de bajo monto (INCP): https://incp.org.co/publicaciones/infoincp-publicaciones/impuestos/2024/06/cual-es-la-exencion-del-gmf-para-depositos-de-bajo-monto/
- Capítulo SARLAFT (copia de 2022, tercero): https://www.hklaw.com/-/media/files/insights/publications/2022/11/sfccircularbasicajurdicasarlaft.pdf?la=en
- Decreto 2672 de 2012, corresponsales (copia de tercero): https://www.dmsjuridica.com/buscador_20179478954/legislacion/decretos/2023/08/03/decreto-2672-de-2012/?pdf=45212
- Ley 1328 de 2009: http://www.secretariasenado.gov.co/senado/basedoc/ley_1328_2009.html
- Decreto 1069 de 2025 (Bre-B): https://www.hklaw.com/en/insights/publications/2025/11/nuevo-decreto-regula-las-ordenes-de-pago-y-las-transferencias
- Decreto 368 de 2026 (finanzas abiertas): https://www.hklaw.com/en/insights/publications/2026/04/nuevo-decreto-incorpora-el-sistema-de-finanzas-abiertas-en-colombia
- Circular Externa 4 de 2026 (SFC): https://normativa.colpensiones.gov.co/compilacion/docs/circular_superfinanciera_0004_2026.htm
- Requisitos SEDPE (tercero, sin confirmar): https://prifinance.com/en/payments/colombia-payment-license/
- SOA Governance (Erl): https://informit.com/store/soa-governance-9780132478397

## 8. Lecturas recomendadas
Fundamentals of Software Architecture (Richards y Ford); Designing Data-Intensive Applications (Kleppmann); Building Microservices (Newman); SOA Governance (Erl).

## 9. Estado actual y pendientes
- **Foco actual:** **Módulos 0 y 1 cerrados. Módulo 2 (Requisitos funcionales y no funcionales, restricciones y regulación) en proyecto**, rama `modulo-02-requisitos`. Hecho: regulación verificada (dos rondas), figura legal SEDPE, tope de 8 SMLMV, nombre técnico "depósito de bajo monto" y Bre-B dentro de la primera versión; documentación y procesos BPMN actualizados. Pendiente: requisitos funcionales, atributos de calidad priorizados, catálogo en `docs/requisitos/` y nota del módulo.
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
| 2026-10-15 | **Módulo 0 cerrado** y fusionado a `main`. Inicia el Módulo 1: se deciden público objetivo, producto ancla, interesados y alcance (sección 2) |
| 2026-10-16 | Módulo 1: BPMN de apertura de cuenta y de transferencia entre cuentas, con la Registraduría simulada; se decide apertura sin monto mínimo y se incluyen corresponsales bancarios como aliados, con el proceso "Depositar efectivo". Nota del módulo publicada en el sitio (sección 2) |
| 2026-10-16 | Módulo 1 cerrado y fusionado a `main`. Inicia el Módulo 2: se verifica la regulación y se decide la figura SEDPE, el tope de 8 SMLMV, el nombre técnico "depósito de bajo monto" y las transferencias por Bre-B en la primera versión. Se adopta la regla "investigar primero" y se actualizan documentos y procesos BPMN en una sola vez (sección 2) |

## 11. Glosario de siglas y términos
| Sigla o término | Significado |
|---|---|
| ADR | Architecture Decision Record: registro de decisión de arquitectura (qué se decidió, por qué y con qué consecuencias) |
| API | Application Programming Interface: interfaz de programación de aplicaciones; la forma en que un sistema ofrece funciones a otros |
| arc42 | Plantilla ligera para documentar arquitecturas de software (es un nombre propio) |
| ArchiMate | Lenguaje estándar para modelar arquitectura empresarial (negocio, aplicación, tecnología) |
| AWS | Amazon Web Services: la nube de Amazon |
| BPMN | Business Process Model and Notation: notación para dibujar procesos de negocio |
| Bre-B | Sistema de pagos inmediatos de Colombia, que permite transferencias entre entidades al instante (Decreto 1069 de 2025) |
| C4 | Context, Containers, Components, Code: método para diagramar arquitectura en cuatro niveles de detalle |
| CI/CD | Continuous Integration / Continuous Delivery: integración y entrega continuas; automatiza probar y desplegar cambios |
| CLI | Command-Line Interface: herramienta que se maneja escribiendo comandos |
| Contenedor | Caja aislada que lleva una aplicación con todo lo que necesita para ejecutarse (Docker es la herramienta más usada) |
| DDD | Domain-Driven Design: diseño guiado por el dominio; modela el software según el lenguaje y las reglas del negocio |
| Debida diligencia simplificada | Versión reducida del conocimiento del cliente que la norma permite para productos de bajo riesgo, como el depósito de bajo monto |
| Depósito de bajo monto | Producto de depósito electrónico para personas naturales con tope de saldo y de débitos mensuales de 8 SMLMV; se puede abrir a distancia (Decreto 222 de 2020) |
| Docker | Herramienta para crear y ejecutar contenedores |
| DSL | Domain-Specific Language: lenguaje específico de dominio; aquí, el texto con el que Structurizr describe un modelo C4 |
| EA | Enterprise Architecture: arquitectura empresarial |
| FinOps | Financial Operations: práctica de gestionar y optimizar el costo de la nube |
| Fogafín | Fondo de Garantías de Instituciones Financieras: seguro de depósitos; cubre hasta $50.000.000 por persona |
| Gateway | Puerta de entrada única que recibe las llamadas a las APIs y las dirige a cada servicio |
| GMF | Gravamen a los Movimientos Financieros (impuesto sobre retiros y transferencias); tiene exenciones para depósitos de bajo monto |
| HTML | HyperText Markup Language: lenguaje con el que se escriben las páginas web |
| IaC | Infrastructure as Code: infraestructura como código; crear servidores y redes mediante archivos en vez de clics |
| Listas restrictivas | Listas de personas con las que una entidad no debe vincularse por riesgo de lavado de activos o financiación del terrorismo |
| MVP | Minimum Viable Product: producto mínimo viable; la versión más pequeña que ya aporta valor |
| PNG, SVG | Formatos de imagen: PNG es de píxeles; SVG es vectorial (se amplía sin perder calidad) |
| Repo | Repositorio: carpeta de proyecto con el historial de todos sus cambios (lo gestiona Git) |
| SAC | Sistema de Atención al Consumidor Financiero: políticas y procesos para atender consultas, quejas y reclamos (Ley 1328 de 2009) |
| SARLAFT | Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo: controles obligatorios contra el lavado de dinero |
| SEDPE | Sociedad Especializada en Depósitos y Pagos Electrónicos: figura legal de Kuenta (Ley 1735 de 2014); no puede otorgar créditos |
| SFC | Superintendencia Financiera de Colombia: entidad que vigila a las entidades financieras |
| SMLMV | Salario Mínimo Legal Mensual Vigente; en 2026 es $1.750.905 (Decreto 159 de 2026, transitorio) |
| SOA | Service-Oriented Architecture: arquitectura orientada a servicios |
| TOGAF | The Open Group Architecture Framework: método de arquitectura empresarial |
| UIAF | Unidad de Información y Análisis Financiero: recibe los reportes de operaciones sospechosas |
| UML | Unified Modeling Language: lenguaje unificado de modelado (diagramas de secuencia, clases, etc.) |
| UVT | Unidad de Valor Tributario: unidad con la que se expresan los montos de impuestos |
| VPS | Virtual Private Server: servidor virtual privado que se alquila |
| WSL 2 | Windows Subsystem for Linux, versión 2: Linux ligero que corre dentro de Windows; Docker Desktop lo usa |