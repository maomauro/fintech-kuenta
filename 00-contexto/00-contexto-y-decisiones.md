# Kuenta — Contexto y decisiones del proyecto

_Documento vivo y **fuente de verdad del contexto del proyecto**. Última actualización: 2026-10-20. Se actualiza a medida que se toman decisiones o se hacen aclaraciones. Las siglas se escriben con su significado la primera vez que aparecen; el glosario completo está en la sección 11._

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
| Alcance de la primera versión (Módulo 1) | **Dentro:** registro y verificación de identidad (KYC), depósito de bajo monto digital, depósitos y retiros (incluido efectivo en corresponsales bancarios), transferencias entre cuentas Kuenta y a otras entidades por Bre-B, consulta de saldo y movimientos, notificaciones, atención básica y reclamos, antifraude básico y reportes mínimos. **Fuera:** créditos, pagos de servicios y recargas, tarjeta física, cobros a comercios, inversiones, finanzas abiertas (etapa siguiente), operación fuera de Colombia. Detalles regulatorios se verifican en el Módulo 2 | 2026-10-16 |
| Convenciones BPMN (Módulo 1) | Tareas con **verbo + objeto**; todo camino termina en un evento de fin; el cliente siempre queda notificado del resultado; los caminos excluyentes pueden converger en una misma tarea de notificación | 2026-10-15 |
| Identidad en la apertura de cuenta (Módulo 1) | La validación de identidad la hace la **Registraduría Nacional del Estado Civil (simulada)**, tratada como sistema externo. Cómo se accede de verdad se verifica en el Módulo 7 | 2026-10-16 |
| Monto mínimo de apertura (Módulo 1) | **Sin monto mínimo**: la cuenta se abre vacía y el depósito es un proceso aparte. Regulación verificada en el Módulo 2 (ver "Regulación verificada") | 2026-10-16 |
| Corresponsales bancarios (Módulo 1) | **Incluidos como aliados** para depositar y retirar efectivo; agregan el proceso BPMN "Depositar efectivo". Su regulación se verificó en el Módulo 2 | 2026-10-16 |
| Figura legal (Módulo 2) | **SEDPE** (Sociedad Especializada en Depósitos y Pagos Electrónicos, Ley 1735 de 2014) que ofrece **depósitos de bajo monto**. Una SEDPE no puede otorgar crédito (Ley 1735, art. 1 par. 1): los créditos quedan para una etapa posterior con otra figura legal (banco o compañía de financiamiento) o con un aliado; se retoma en el ADR del Módulo 13 | 2026-10-16 |
| Tope del depósito de bajo monto (Módulo 2) | **8 SMLMV** de saldo máximo y de débitos mensuales (hoy $14.007.240 con SMLMV 2026 de $1.750.905, Decreto 159 de 2026, transitorio). El sistema debe controlarlo y bloquear lo que lo supere; el valor del SMLMV es parametrizable | 2026-10-16 |
| Nombre del producto (Módulo 2) | En documentos y diagramas técnicos se usa **"depósito de bajo monto"** (término legal, Decreto 222 de 2020). El nombre comercial se valida con un abogado antes de publicarlo | 2026-10-16 |
| Transferencias a otras entidades (Módulo 2) | **Dentro de la primera versión**, por **Bre-B** (sistema de pagos inmediatos). Implica requisitos de disponibilidad (98,5 % a 99,5 % según el Decreto 1069 de 2025), nombre enmascarado del beneficiario antes de confirmar e integración externa (Módulo 7). Por verificar: si Bre-B es obligatoria para una SEDPE | 2026-10-16 |
| Regulación verificada (Módulo 2) | **Depósitos de bajo monto:** Decreto 222 de 2020 / Decreto 2555 de 2010 (saldo y débitos mensuales máx. 8 SMLMV, un depósito por persona y entidad, terminación si queda sin fondos 3 meses o más, apertura sin presencia física). **SEDPE:** capital mínimo de $5.846.000.000 a valores de 2014, ajustado cada enero por IPC (fuente de tercero, sin confirmar); autorización en dos etapas. **Fogafín:** inscripción de 0,115 por mil del capital suscrito (una vez), prima de 0,15 % anual sobre depósitos asegurados y cobertura de $50.000.000 por persona (Resolución 002 de 2026). **SARLAFT/KYC:** apertura a distancia permitida (biometría, firma digital, bases de datos); debida diligencia simplificada para bajo monto (identidad al abrir y completar información en 3 días hábiles); listas restrictivas antes de abrir y de forma continua; reporte de operaciones sospechosas a la UIAF. **Corresponsales:** reciben y entregan efectivo, hacen transferencias y consultas; solo con terminal conectado y no operan si falla la comunicación; la entidad responde por completo y entrega comprobante. **GMF:** exención de retiros hasta 65 UVT para bajo monto (Estatuto Tributario, art. 879 num. 25). **Ley 1328 de 2009:** Sistema de Atención al Consumidor (SAC), defensor del consumidor, tarifas publicadas, costo informado antes de cada operación, extracto mensual gratis, aviso previo de cambios. **Nube y ciberseguridad:** Circular Externa 005 de 2019 y 007 de 2018. **Datos personales:** Ley 1581 de 2012 (biométricos sensibles; autorización previa, expresa e informada). **Pagos:** Decreto 1069 de 2025 (Bre-B) y Decreto 368 de 2026 (finanzas abiertas; las SEDPE son proveedoras de datos obligatorias). **No verificado aún:** capital SEDPE indexado, conservación de documentos SARLAFT, plazos de quejas y SAC, acceso a la Registraduría, obligatoriedad de Bre-B, tarifa del GMF y UVT 2026; algunas normas se leyeron en copias de terceros y se confirman en fuente oficial antes de publicar | 2026-10-16 |
| Finanzas abiertas (Módulo 2) | **Fuera de la primera versión**, como etapa siguiente. El Decreto 368 de 2026 incluye a las SEDPE como proveedoras de datos obligatorias; falta verificar desde cuándo. Restricción de diseño: las APIs y el modelo de datos no deben impedir exponer datos a terceros con consentimiento del cliente | 2026-10-16 |
| Atributos de calidad (Módulo 2) | Diez atributos aprobados el 2026-10-17, en este orden de prioridad: seguridad, integridad del dinero, disponibilidad (99,95 % en transferencias y depósitos; 99,9 % en el resto), cumplimiento y auditoría, rendimiento (Bre-B en 20 s), recuperación (RPO 5 min, RTO 1 h), evolutividad, usabilidad, observabilidad y capacidad. Detalle en `docs/requisitos/atributos-de-calidad.md` | 2026-10-17 |
| Dimensionamiento (Módulo 2) | Hipótesis ficticia: **50.000 clientes el primer año** y pico de **50 transacciones por segundo**; a validar | 2026-10-17 |
| Marco de trabajo (Módulo 3) | **Scrum** con roles simulados (Product Owner, Developers, Scrum Master); sprints de 2 semanas (propuesta). La Definition of Done tiene dos niveles (listo para usar y auditable) e incluye los requisitos regulatorios | 2026-10-17 |
| Product Goal (Módulo 3) | "Que una persona abra su depósito de bajo monto y haga sus pagos del día a día sin ir a una oficina, cumpliendo la regulación" | 2026-10-17 |
| Formato de historias (Módulo 3) | Épica, historia ("Como... quiero... para...") y criterios de aceptación Dado/Cuando/Entonces. Backlog inicial: 7 épicas y 23 historias que cubren los 24 requisitos | 2026-10-17 |
| Corte del MVP (Módulo 3) | **Release 1 (MVP)** sin Bre-B: 20 historias. **Release 2** completa la primera versión con Bre-B, la terminación de depósitos inactivos (antes del mes 3 de operación) y el aviso de cambios del contrato. El cumplimiento va como historias en el mismo backlog | 2026-10-17 |
| Mapa de capacidades (Módulo 4) | **Dos niveles**: 7 dominios y 27 capacidades, derivadas de los 8 procesos, las 7 épicas y la regulación, más un grupo de apoyo sin detallar. Clasificadas por tipo (diferenciadora, obligatoria, de apoyo) y por release. Detalle en `docs/arquitectura-empresarial/mapa-de-capacidades.md` | 2026-10-18 |
| Dominios de negocio (Módulo 4) | Clientes e identidad; Cuentas y depósitos; Pagos y transferencias; Efectivo y corresponsales; Riesgo y cumplimiento; Atención y experiencia; Gestión corporativa y apoyo. En el Módulo 5 se refinan como límites de la aplicación | 2026-10-18 |
| Principios (Módulo 4) | Formato TOGAF (nombre, enunciado, justificación, implicaciones). Ocho principios en orden de prevalencia: seguridad y privacidad desde el diseño; el dinero siempre cuadra; diseñar para fallar; cumplir es parte del diseño; un solo dueño por cada dato; lo más simple que cumpla; evolución en pasos pequeños; automatizar la entrega y la evidencia. La ley no se negocia. Propuesta a revisar | 2026-10-18 |
| Estilo del core (Módulo 5) | **Monolito modular**: una sola aplicación y un solo despliegue, con varias réplicas, módulos con datos propios y puertas públicas. Un módulo pasa a servicio solo si cumple una señal (escala desigual, equipos que se pisan, ritmo de cambio distinto, aislamiento exigido, tecnología distinta o fallos en cascada) respaldada por una métrica; los umbrales se definen en los Módulos 10 y 14. El estilo solo afecta lo interno: lo externo (Bre-B, redes) va por la red en ambos estilos | 2026-10-19 |
| Módulos del monolito (Módulo 5) | **Ocho**: Identidad y apertura, Cuentas y depósitos, Pagos y transferencias, Efectivo y corresponsales, Cumplimiento y riesgo, Atención al cliente, Notificaciones y Auditoría. Un dominio por módulo, más dos capacidades (CAP-19 y CAP-18) separadas por ser transversales. «Gestión corporativa y apoyo» (CAP-24 a 27) no es módulo: son sistemas de apoyo que se compran y aparecen como externos | 2026-10-19 |
| Entregable y publicación de diagramas (Módulo 5) | C4 de contexto y contenedores y tres secuencias UML (apertura de depósito, transferencia entre cuentas, depósito en corresponsal), más una vista adicional de componentes (los módulos) y, a pedido del autor, un diagrama de clases de alto nivel de Cuentas y depósitos (C4 nivel 4, opcional, escrito a mano). Se publican como **Mermaid exportado desde Structurizr** y dibujado por el sitio (`@docusaurus/theme-mermaid`, `securityLevel: loose`). Las secuencias salen de vistas dinámicas del mismo modelo. Además, copias editables en draw.io (`modelos/c4/` y `modelos/uml/`, derivadas de `kuenta.dsl`, que sigue siendo la fuente de verdad) y un diagrama UML de casos de uso (CU-01 a CU-12), a pedido del autor | 2026-10-19 |
| Dueño de los datos (Módulo 6) | Cada módulo es dueño de su esquema dentro de la misma base de datos y ninguno lee las tablas de otro: lo pide por la puerta pública del dueño. Las referencias entre módulos son solo identificadores. Los archivos de identidad viven fuera de la base (almacenamiento de objetos; servicio en el Módulo 8) y la base guarda la referencia. Los datos personales se separan del dinero: depósito, movimiento y auditoría guardan solo el identificador del cliente. Las copias de lectura alimentadas por eventos se permiten solo con una razón medible y un solo dueño | 2026-10-20 |
| Libro mayor (Módulo 6) | **Partida doble ligera**: cada operación escribe apuntes inmutables que suman cero; el dinero que sale a Bre-B o a un corresponsal pasa por cuentas internas de tránsito. El saldo se guarda y se actualiza en la misma transacción con bloqueo de fila, y un proceso periódico lo recalcula y avisa si no coincide; saldo disponible = saldo menos reservas activas. Las correcciones son movimientos contrarios (la aplicación no tiene `UPDATE` ni `DELETE` sobre el libro). Toda operación que mueve dinero lleva llave de idempotencia. Valores en decimal exacto y una sola moneda (COP). La contabilidad formal sigue siendo del sistema contable externo | 2026-10-20 |
| Eventos (Módulo 6) | Mezcla según lo que se juegue: **Auditoría por llamada directa en la misma transacción**; Notificaciones, asientos para contabilidad y reportes por **eventos con transactional outbox** (entrega al menos una vez, consumidores idempotentes). Cada evento lleva identificador, tipo y versión, fecha, correlación y los datos justos, nunca datos personales. Transporte interno (tabla outbox y despachador); un servicio de mensajería de AWS solo si un módulo pasa a servicio o una integración externa lo pide (Módulo 8). En los diagramas del Módulo 5, «Avisa» pasa a «Publica evento»; «Registra» (Auditoría) se mantiene | 2026-10-20 |
| Sagas (Módulo 6) | Solo donde interviene un sistema externo: **transferencia por Bre-B, depósito de efectivo y retiro de efectivo**. Transferencia entre cuentas y apertura no son saga. Son **orquestadas dentro del módulo dueño** (Pagos; Efectivo), como máquinas de estados en su propio esquema. Bre-B: iniciada, reservada, enviada, confirmada, rechazada o pendiente; sin respuesta en 20 s queda pendiente y nunca se libera la reserva sin conocer el resultado; pasado un límite parametrizable pasa a revisión manual. La compensación del retiro es un movimiento contrario. La reserva actúa como bloqueo semántico. Tiempos de vencimiento, número de reintentos y límite de revisión manual se fijan en el Módulo 10 | 2026-10-20 |
| Entregable del Módulo 6 | Cinco piezas escritas en **Mermaid** (Structurizr no genera diagramas entidad-relación): modelo de datos general, detalle del libro mayor, flujo de eventos, saga de Bre-B (estados y secuencia) y estados del efectivo. Páginas en `docs/datos-y-consistencia/`, nota en `docs/modulos/datos-y-consistencia.md` y copias editables en draw.io en `modelos/datos/`. Se agrega al sitio un botón **«Ampliar»** para todos los diagramas Mermaid (`sitio/src/clientModules/ampliarMermaid.js`) | 2026-10-20 |
| Mapa de integraciones (Módulo 7) | Un adaptador por integración dentro del módulo dueño (capa anticorrupción); un solo módulo habla con cada tercero; síncrono si el cliente espera, asíncrono por outbox si no bloquea, lotes para conciliación y reportes; las entradas de terceros usan rutas y credenciales distintas de la API de clientes. Bre-B (Pagos, Release 2), Registraduría simulada (Identidad), listas restrictivas y UIAF/Superfinanciera (Cumplimiento), redes de corresponsales (Efectivo), proveedor de notificaciones (Notificaciones), sistema contable (Cuentas); finanzas abiertas en etapa posterior. Corrección al Módulo 5: la conciliación con redes es de Efectivo, no de Pagos | 2026-10-21 |
| Estilo de APIs (Módulo 7) | REST con JSON sobre HTTPS; contrato primero en OpenAPI 3.1.x; versión en la ruta (`/v1`); errores RFC 9457 con `codigo` de negocio; `Idempotency-Key` obligatoria en operaciones que mueven dinero (misma llave y mismo contenido devuelve el resultado original; distinto contenido 422; en curso 409; es un borrador del IETF, no un RFC); la transferencia Bre-B responde 202 `en_proceso`; dinero como texto decimal con `COP`; fechas ISO 8601 UTC; paginación por cursor; seguridad solo en principios (Módulo 9) | 2026-10-21 |
| Gateway y modelo canónico (Módulo 7) | API gateway gestionado delante del monolito sin lógica de negocio (el tipo REST API o HTTP API se decide en el Módulo 8); sin BFF por ahora; sin modelo canónico global (ISO 20022 solo en el adaptador de Bre-B; el catálogo de eventos es el único vocabulario compartido); las puertas públicas internas son interfaces de código, publicables como OpenAPI si un módulo pasa a servicio | 2026-10-21 |
| Resiliencia de integraciones (Módulo 7) | Tiempo límite explícito, reintentos solo si es idempotente, cortacircuitos, compartimentos por integración e identificador de correlación; lo accesorio nunca bloquea y lo regulatorio nunca se omite; comportamiento definido por tercero; simuladores y pruebas de certificación de Bre-B; valores en el Módulo 10 | 2026-10-21 |
| Entregable del Módulo 7 | Mapa de integraciones (Mermaid y copia en draw.io en `modelos/integraciones/`) y tres contratos OpenAPI de ejemplo en `contratos-api/` (transferencias, efectivo, movimientos, más `comunes.yaml`); no se escribe contrato de Bre-B porque sus anexos técnicos no son públicos. Páginas en `docs/integracion-y-apis/` y nota en `docs/modulos/integracion-y-apis.md`. Los contratos solo se verificaron estructuralmente, sin validador oficial | 2026-10-21 |
| Región y cuentas (Módulo 8) | Región principal **São Paulo (`sa-east-1`)**: Colombia no tiene región de AWS, la Local Zone de Bogotá está anunciada sin servicios y la región de Chile sin fecha; São Paulo viene habilitada por defecto y México Central exige activación. Cuentas separadas de producción, pruebas y seguridad y registros; respaldos copiados a una segunda región (plan en el Módulo 10). La Circular 005 de 2019 no exige datos en Colombia pero sí informar la región (6.3), verificar jurisdicción equivalente (3.7) y avisar 15 días antes | 2026-10-21 |
| Cómputo (Módulo 8) | El monolito en contenedores con **ECS Fargate**, mínimo dos tareas en dos zonas de disponibilidad, detrás de un balanceador interno (ALB). Descartados EKS y EC2 | 2026-10-21 |
| Base de datos (Módulo 8) | **RDS para PostgreSQL Multi-AZ** (instancia principal con standby sincrónico, sin lecturas en el standby), un esquema por módulo, respaldos y restauración a un instante (registros subidos cada 5 minutos, encaja con el RPO de 5 minutos; la restauración crea una instancia nueva). Descartados el clúster Multi-AZ con lectores y Aurora (se evalúa en el Módulo 12 y el ADR del Módulo 13) | 2026-10-21 |
| Entrada y red (Módulo 8) | Route 53, WAF y **API Gateway tipo REST API** (WAF, validación y planes de uso solo existen en este tipo; mTLS en ambos) hacia el ALB interno por enlace privado (VPC link V2); subredes privadas de aplicación y datos; salidas a terceros por NAT; endpoints privados a los servicios de AWS; sin SQS ni SNS por ahora. Cierra la decisión C1 del Módulo 7 | 2026-10-21 |
| Entregable del Módulo 8 | Diagrama de despliegue en **Mermaid** con copia en draw.io (`modelos/despliegue/`) y tabla de servicios (servicio, para qué, quién lo usa, atributo de calidad). Páginas en `docs/arquitectura-en-aws/` y nota en `docs/modulos/arquitectura-en-aws.md`. Los precios van en el Módulo 12 | 2026-10-21 |
| Modelo de amenazas (Módulo 9) | Método **STRIDE** sobre los flujos del diagrama de contexto y del despliegue, con el OWASP API Security Top 10 de 2023 como lista de chequeo de las APIs. Activos: dinero y libro, datos personales y biometría, credenciales y llaves, disponibilidad de pagos. Dieciséis amenazas con riesgo (propuesta a validar) y control; el fraude de negocio lo cubre Cumplimiento y riesgo | 2026-10-21 |
| Identidad y acceso (Módulo 9) | Clientes: autenticación fuerte, confirmación adicional en operaciones de dinero ligada a la operación, credenciales de corta vida y autorización por objeto en cada puerta pública. Terminales: mTLS y credencial propia revocable. Personal: acceso único con MFA, mínimo privilegio, acceso temporal y separación de funciones | 2026-10-21 |
| Protección de datos (Módulo 9) | Cifrado en tránsito y en reposo con llaves propias en KMS; cifrado por campo para documento y biometría; datos personales separados del dinero; sin datos personales en registros y eventos; retención y borrado como parámetros | 2026-10-21 |
| Detección, respuesta y desarrollo seguro (Módulo 9) | Auditoría (Módulo 6), CloudTrail y alarmas; plan de respuesta a incidentes con reporte a la Superintendencia (por correo, con taxonomía y TLP, Circular 033 de 2020), COLCERT y clientes afectados; análisis de código, dependencias e imágenes y pruebas de seguridad en el pipeline (Módulo 11); prueba de penetración y pruebas de continuidad con ciberataques simulados | 2026-10-21 |
| Cumplimiento y entregable (Módulo 9) | **Matriz de cumplimiento** (requisito, fuente, control, evidencia, responsable) sobre las Circulares 005 de 2019, 007 de 2018 y 033 de 2020, la Ley 1581 y SARLAFT; políticas simuladas (aprobación de la junta y rol responsable de seguridad). Páginas en `docs/seguridad-y-cumplimiento/`, nota en `docs/modulos/seguridad-y-cumplimiento.md` y copia en draw.io en `modelos/seguridad/`. AWS lista ISO 27001, 27017, 27018 y SOC 1, 2 y 3 | 2026-10-21 |
| Objetivos de servicio (Módulo 10) | Siete objetivos: disponibilidad 99,95 % en transferencias y depósitos y 99,9 % en el resto (medida en el gateway, 30 días, sin contar errores 4xx), Bre-B en 20 s en al menos 99,5 % de las órdenes (compendio DSP-465, num. 3.1.d y 5.1.e), transferencia interna p95 de 3 s, saldo p95 de 2 s, apertura en 5 min y diferencia de conciliación cero. Presupuesto de error de unos 22 min al mes para 99,95 %; al agotarlo se congelan los cambios no urgentes. **Riesgo:** la suma de los acuerdos de AWS (API Gateway 99,95 %, balanceador 99,99 %, ECS con Fargate 99,99 %, RDS Multi-AZ 99,95 %) da 99,88 %, por debajo de 99,95 %; son umbrales de crédito y no la disponibilidad real, por lo que se mide desde el primer día | 2026-10-21 |
| Recuperación (Módulo 10) | Tres escenarios: **zona** (failover automático de RDS Multi-AZ, sin pérdida de datos), **datos** (restauración a un instante, RPO 5 min y RTO 1 h) y **región** (respaldo y restauración: respaldos y registros de transacciones replicados a otra región más infraestructura como código; **RPO 15 min y RTO 4 h**). La meta de RPO 5 min y RTO 1 h es propuesta propia. Decisión delegada por el autor al asistente: no se mantiene un segundo entorno encendido; se reevalúa en los Módulos 12 a 14 y se registra como ADR | 2026-10-21 |
| Parámetros (Módulo 10) | Propuestas a validar con simulacros: autorización de depósito en efectivo vence a los 10 min; Bre-B Pendiente se reconcilia cada 5 min y pasa a revisión manual a las 24 h; tiempo límite de llamadas Bre-B 15 s, Registraduría 10 s, listas 5 s, notificaciones 3 s; 3 reintentos idempotentes con espera de 1, 2 y 4 s más aleatoriedad; cortacircuitos con 5 fallos seguidos y prueba a los 30 s; prueba de penetración anual; ciberataque simulado anual | 2026-10-21 |
| Observabilidad (Módulo 10) | Métricas, registros estructurados con identificador de correlación y sin datos personales, trazas y alarmas de CloudWatch hacia una cola de guardia (por SNS, solo para alertas); meta de detección menor a 5 min; alertas de negocio (conciliación, lotes ausentes, Pendientes envejecidos, outbox atrasado, cola de reportes cerca del plazo, saldo recalculado distinto); GuardDuty y Security Hub, sin SIEM aparte al inicio; el análisis de riesgo sobre un SOC queda como ADR | 2026-10-21 |
| Operación y entregable (Módulo 10) | Severidades S1 (15 min), S2 (1 h) y S3 (siguiente día hábil); guardia simulada; postmortems sin culpa; runbooks por escenario; simulacros (failover de zona 2 veces al año, restauración a un instante cada trimestre, pérdida de región y ciberataque cada año). Páginas en `docs/resiliencia-y-operacion/`, nota en `docs/modulos/resiliencia-y-operacion.md` y copia en draw.io en `modelos/recuperacion/` | 2026-10-21 |
| Flujo de ramas y entornos (Módulo 11) | Ramas cortas y `main` siempre desplegable (trunk-based), pull request con revisión obligatoria. Tres entornos en cuentas separadas (desarrollo, pruebas, producción) con **datos sintéticos** (los reales nunca salen de producción). Se construye una sola vez y se promueve la misma imagen por su huella. Quien escribe un cambio no aprueba su propio despliegue a producción (entornos de GitHub con revisores y sin autoaprobación; disponibles en repositorios públicos en todos los planes) | 2026-10-21 |
| Pipeline (Módulo 11) | Neutro respecto del lenguaje (el stack del monolito está sin decidir). Puertas: pruebas, SAST, SCA, secretos, validación de contratos OpenAPI, plan de infraestructura, escaneo mejorado de imágenes en ECR (con Inspector: sistema operativo y paquetes del lenguaje), pruebas de humo y de contrato y aprobación manual. **GitHub Actions entra a AWS por OIDC** con un rol por entorno y credenciales temporales (cierra T-14). **Evidencia automática** por despliegue (historia y requisito, commit y revisores, pruebas y escaneos, huella, aprobador) para la Definition of Done de nivel 2, en un almacén que nadie puede alterar | 2026-10-21 |
| Despliegue y migraciones (Módulo 11) | **Blue/green integrado de ECS** (julio de 2025) con dos grupos de destino y listener de pruebas en el ALB, ganchos de validación, tiempo de observación (propuesta de 10 min) y reversión automática por alarmas. Migraciones de base de datos con el patrón expandir y contraer, sin cambios destructivos en el mismo despliegue y con corrección hacia adelante en lugar de deshacer datos. Banderas de funcionalidad para separar desplegar de liberar | 2026-10-21 |
| Infraestructura como código (Módulo 11) | **OpenTofu** (MPL-2.0, compatible con los proveedores de Terraform) con módulos por capa (red, datos, cómputo, seguridad, observabilidad), mismo código por entorno y región, estado remoto cifrado por entorno y cuenta, cambios solo por PR con `plan` y aplicación solo desde el pipeline (producción con aprobación), detección de deriva, secretos fuera del código y etiquetas para costos. Descartados Terraform (licencia BUSL) y CloudFormation o CDK | 2026-10-21 |
| Métricas y entregable (Módulo 11) | Cinco métricas DORA (frecuencia de despliegue, plazo de cambio, recuperación de despliegue fallido, tasa de fallo y tasa de retrabajo); RNF-07 actualizado de cuatro a cinco. Metas: despliegue diario, plazo menor a 1 día (propuesta), recuperación menor a 1 h y fallo menor a 15 %. Entregable solo de diseño, sin código: tres páginas en `docs/entrega-ci-cd-e-iac/`, nota en `docs/modulos/entrega-ci-cd-e-iac.md` y copia en draw.io en `modelos/entrega/` | 2026-10-21 |
| Supuestos y tamaños de costos (Módulo 12) | Región São Paulo. Volumen supuesto, sin datos medidos: 5 millones de solicitudes, 100 GB de logs, 500 GB por NAT y 100 GB de base de datos al mes. Producción con 2 tareas Fargate ARM de 1 vCPU y 2 GB y RDS `db.m7g.large` Multi-AZ; pruebas y desarrollo reducidos, desarrollo efímero en horario hábil | 2026-10-21 |
| Estimación anual (Módulo 12) | Nube sin soporte ≈ 18.060 USD al año (producción 12.192; pruebas 4.583; desarrollo 1.103; seguridad y registros 182) y con soporte Business Support+ ≈ 20.266. Precios de la AWS Pricing Calculator (`calculator.aws`), porque las páginas de precios cargan las tarifas por JavaScript. Pendientes de confirmar: GuardDuty, Security Hub, Route 53, endpoints de VPC y copias entre regiones | 2026-10-21 |
| Optimización y FinOps (Módulo 12) | Graviton, desarrollo efímero, un NAT fuera de producción y planes de ahorro solo tras medir 3 meses. Etiquetas, presupuestos con alertas, revisión mensual y costo por transacción. Las líneas fuera de la nube (pruebas de penetración, auditoría, personal) las define el autor | 2026-10-21 |
| Formato de decisiones (Módulo 13) | ADR en formato MADR 4.0 en español, un archivo por decisión en `docs/adr/` (`adr-NNN-nombre.md`), con estado, fecha, factores, opciones, resultado y consecuencias. Un ADR no se edita para cambiar de opinión: se escribe uno nuevo y el anterior pasa a reemplazado. Índice, trade-offs y riesgos en `docs/decisiones-y-trade-offs/` | 2026-10-21 |
| Stack del monolito (Módulo 13, ADR-002) | Java 25 LTS (soporte Premier hasta septiembre de 2030 y Extended hasta septiembre de 2033, según Oracle), Spring Boot 4.1 y Spring Modulith 2.1 (versiones vigentes el 2026-10-21). Modulith verifica los módulos y ofrece un registro transaccional de eventos; el modo outbox completo exige Namastack Outbox o JobRunr. Versión mínima de Java y compatibilidad exacta por confirmar. El autor aprobó la propuesta | 2026-10-21 |
| Trade-offs y riesgos (Módulo 13) | Diez ADR (001 a 010) que registran las decisiones de los Módulos 5 a 12. Ocho puntos de compromiso y cinco de sensibilidad. Matriz de 13 riesgos con probabilidad por impacto (1 a 5); altos: R-01 (disponibilidad compuesta), R-02 (jurisdicción de Brasil), R-06 (Bre-B), R-07 (Registraduría), R-13 (retención y reportes), R-08 (RTO regional) | 2026-10-21 |
| Gobierno (Módulo 14) | Ligero, sin comité. Decisiones difíciles de revertir (nuevo servicio de AWS, límite de módulo, integración, dato personal, SLO, región, stack) exigen ADR y revisión asíncrona del arquitecto (plazo propuesto de 2 días hábiles); las fáciles las decide quien construye. Excepciones a un principio con motivo, riesgo, responsable y fecha de caducidad | 2026-10-21 |
| Funciones de aptitud (Módulo 14) | Ocho verificaciones automáticas ligadas a los principios: `verify()` de Spring Modulith, contratos OpenAPI, secretos y vulnerabilidades, evidencia de despliegue, sin datos personales en eventos, conciliación (SLO-07), presupuesto de error (congelar despliegues no urgentes, propuesta) y gasto. Deuda técnica con capacidad reservada por sprint (propuesta 15 %). Calendario: por PR, mensual, trimestral y anual | 2026-10-21 |
| Extracción de módulos (Módulo 14) | Solo con una señal medida: escala, despliegue, equipo, cumplimiento o disponibilidad (umbrales propuestos, a calibrar). Proceso gradual (Strangler Fig) con ADR y canal de mensajes. Orden probable: Notificaciones, Efectivo y corresponsales, Atención al cliente y, al final, Cuentas y libro mayor | 2026-10-21 |
| Plan de evolución (Módulo 14) | Tres horizontes con disparadores: 0 a 6 meses (Release 1), 6 a 12 (Release 2 con Bre-B y compromisos de ahorro) y 12 a 24 (créditos, finanzas abiertas, región en espera). Créditos exigen verificar la figura legal (la SEDPE no puede otorgarlos). Cadencia de actualización de Java LTS, Spring, dependencias, OpenTofu y regulación | 2026-10-21 |
| Forma de cierre de módulos (desde el Módulo 7) | A pedido del autor, **opción A «ciclo ligero»**: se omiten el repaso de 5 preguntas y la pregunta de entrevista; se mantiene la regla de investigar, proponer un borrador con decisiones, aprobación del autor, documentación única, rama por módulo y pull request con squash. El asistente tiene más autonomía para avanzar; el autor sigue ejecutando Git | 2026-10-21 |
| Mapas de alto nivel (portal) | Dos páginas con componentes React: **Mapa de alto nivel** (serpentina con iconos) y **Mapa de engranes** (recorrido vertical con bucle de evolución), junto al Mapa general. Comparten el contenido en `sitio/src/components/MapasAltoNivel/etapas.js` | 2026-10-19 |
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
| 5 | Arquitectura de aplicación: estilo, límites de dominio, C4 (Context, Containers, Components, Code: contexto, contenedores, componentes y código) y UML (Unified Modeling Language, lenguaje unificado de modelado: secuencia y clases) | Diagramas C4 (contexto, contenedores, componentes y clases del nivel 4) y UML (casos de uso y secuencias clave) |
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
| Diagramas C4 como código | Structurizr (DSL: Domain-Specific Language, lenguaje específico de dominio; y CLI: Command-Line Interface, herramienta de línea de comandos) | Contenedor Docker (imagen `structurizr/structurizr`; Lite y el CLI antiguo figuran en fin de vida en su documentación) |
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
│  ├─ c4/                     ← copias editables en draw.io: contexto, contenedores, componentes y clases
│  ├─ uml/                    ← copias editables en draw.io: casos de uso y secuencias
│  ├─ datos/                  ← copias editables en draw.io: modelo de datos, libro mayor, eventos y sagas
│  ├─ integraciones/          ← copia editable en draw.io del mapa de integraciones
│  ├─ despliegue/             ← copia editable en draw.io del diagrama de despliegue en AWS
│  ├─ seguridad/              ← copia editable en draw.io del diagrama de fronteras de confianza
│  ├─ recuperacion/           ← copia editable en draw.io del diagrama de escenarios de recuperación
│  ├─ entrega/                ← copia editable en draw.io del diagrama del flujo de despliegue
│  └─ bpmn/                   ← procesos de negocio
├─ diagramas/                 ← fuentes (draw.io, Excalidraw) y exportados (PNG, SVG)
├─ contratos-api/             ← OpenAPI de ejemplo (transferencias, efectivo, movimientos y componentes comunes)
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

**Enfoques y estilos son preguntas distintas, en orden.** (1) Qué debe hacer y con qué calidad (requisitos); (2) dónde van los límites (capacidades, DDD, Event Storming, equipos, datos); (3) cómo conviven esos límites (monolito modular, microservicios, SOA); (4) cómo se ordena el código dentro de cada uno (capas, hexagonal, CQRS); (5) cómo se hablan (APIs, eventos); (6) dónde corre (nube). Cambiar una respuesta afecta a las siguientes, no a las anteriores. El estilo solo afecta lo interno: lo externo va por la red en cualquier estilo. Los sistemas de apoyo (nómina, compras, contabilidad) se compran o contratan y aparecen como sistemas externos. Pendiente contrastar con Evans (dominio, contexto delimitado, módulo) y con Erl (SOA).

**Consistencia entre módulos y sistemas externos.** Dentro del monolito, una operación cabe en una transacción de base de datos (todo o nada). Una **saga** solo hace falta cuando interviene un sistema externo, porque ahí no hay una transacción compartida: cada paso es local y los fallos se deshacen con **compensaciones**. Las sagas no dan aislamiento, así que la defensa es la reserva (bloqueo semántico). El **outbox transaccional** resuelve la doble escritura (guardar el dato y publicar el evento) escribiendo ambos en la misma transacción; como la entrega puede repetirse, los consumidores y los pasos de las sagas deben ser **idempotentes**. Un libro mayor de **partida doble** hace verificable «el dinero cuadra»: la suma de los apuntes es cero.

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
- Documento técnico Bre-B (Banco de la República, febrero de 2026): https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/documento-tecnico-bre-b-febrero-2026.pdf
- AWS, patrón saga coreografiada: https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/saga-choreography.html
- AWS, patrón saga orquestada: https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/saga-orchestration.html
- AWS, patrón transactional outbox: https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html
- Supersociedades, oficio 220-020784 de 2023 (conservación por 10 años de libros y papeles del comerciante, artículo 60 del Código de Comercio): falta verificar el plazo aplicable a una entidad vigilada por la Superintendencia Financiera
- SOA Governance (Erl): https://informit.com/store/soa-governance-9780132478397

## 8. Lecturas recomendadas
Fundamentals of Software Architecture (Richards y Ford); Designing Data-Intensive Applications (Kleppmann); Building Microservices (Newman); SOA Governance (Erl).

## 9. Estado actual y pendientes
- **Foco actual:** **Módulos 0 a 13 cerrados y fusionados a `main`** (último commit: `6a43d59`, pull request #16 del Módulo 13). **Módulo 14 (Gobierno y evolución) con las decisiones A a E aprobadas y la documentación redactada**: `docs/gobierno-y-evolucion/` (lineamientos, extracción de módulos y plan de evolución) y la nota `docs/modulos/gobierno-y-evolucion.md`. Pendiente: revisión del autor en el sitio y pull request. Falta el Módulo 15. El sitio corre con Docker (instalación de dependencias también desde el contenedor, no en local).
- **Pendiente de decidir con el autor:** licencia del repo público (sin licencia, por defecto, nadie puede reutilizar el contenido legalmente).
- **Pendiente de confirmar con el autor:** qué hacer con la carpeta vacía de OneDrive; si el equipo usa WSL 2 como motor de Docker Desktop.
- **Pendiente por verificar al llegar a cada módulo:** comando `export` de la imagen `structurizr/structurizr` (el CLI antiguo funcionó para generar los diagramas); versiones instaladas de Docker Desktop, Archi y Git; soporte BPMN/UML en draw.io; condiciones de la capa gratuita de AWS; enlaces de documentación oficial de AWS; detalles de la normativa de la Superintendencia Financiera; **Bre-B** (anexos de la circular DSP-465: estados de una transferencia, reintentos, reversos, idempotencia, consulta de estado, nombre enmascarado del beneficiario y niveles de disponibilidad; se confirma en el Módulo 7); **plazo de conservación** de los registros del libro mayor y de SARLAFT (artículo 96 del Estatuto Orgánico del Sistema Financiero y artículo 60 del Código de Comercio; hasta confirmarlo, nada se borra y el plazo es un parámetro); copias en draw.io del Módulo 6 abiertas en la aplicación; parámetros de sagas (Módulo 10) y servicio de mensajería de AWS (Módulo 8). **Módulo 7:** anexos 2, 4 y 5 de la DSP-465 y la DSP-471 (estados, consulta de estado, reintentos, reversos, idempotencia, disponibilidad de Bre-B); si Bre-B es obligatorio para Kuenta (el umbral de 1.500.000 productos del Decreto 1069 de 2025 viene de un resumen de terceros, no del texto oficial); canal y formato de los reportes a UIAF y Superfinanciera; camino real de acceso y costo de la Registraduría; validación de los contratos con un validador oficial de OpenAPI; copia en draw.io del mapa abierta en la aplicación; tipo de API gateway (Módulo 8). **Módulo 8:** tiempo máximo de integración del REST API de API Gateway (se recuerda de unos 29 s, sin confirmar en la documentación oficial); disponibilidad de cada servicio en São Paulo y latencia desde Colombia; equivalencia de jurisdicción para Brasil (Circular 005, numeral 3.7); aviso a la Superintendencia 15 días antes de procesar en la nube; certificaciones de AWS frente a la Circular 005 (Módulo 9); comparación RDS frente a Aurora (Módulos 12 y 13); recuperación entre regiones (Módulo 10); copia en draw.io del despliegue abierta en la aplicación. **Módulo 9:** numeración de la Circular 007 de 2018 tras la Circular Externa 004 de 2026 (las citas vienen de copias de terceros); **transferencia internacional de datos a Brasil** (Brasil es solo candidato a la lista de la SIC; cláusulas contractuales modelo; concepto legal); plazo de reporte de incidentes a la Superintendencia; plazos de retención (SARLAFT y registros); frecuencia de la prueba de penetración; requisitos oficiales de autenticación de clientes en canales digitales; registro de bases de datos ante la SIC; marco de gestión de seguridad (ISO 27032, NIST, CIS o COBIT 5); herramienta de correlación de eventos (Módulo 10); copia en draw.io de fronteras abierta en la aplicación. **Módulo 10:** tiempo real de failover de Multi-AZ (se recuerda de 60 a 120 s; sin confirmar en documentación oficial) y disponibilidad compuesta real; cómo llegan los terceros (Bre-B, listas, redes) a la región de recuperación; costo anual de los respaldos entre regiones (Módulo 12); ADR de disponibilidad compuesta, de respaldo y restauración como estrategia de región y del análisis de SOC (Módulo 13); umbrales de extracción de módulos (Módulo 14); copia en draw.io de escenarios abierta en la aplicación. **Módulo 11:** soporte de blue/green integrado de ECS en Fargate (el anuncio no lo nombra); lenguaje y marcos del monolito (ADR del Módulo 13); plazo legal de retención de la evidencia de despliegue; costo de entornos y del escaneo mejorado (Módulo 12); tiempo de observación del blue/green con pruebas; copia en draw.io del flujo abierta en la aplicación. **Módulo 12:** rehacer la estimación en `calculator.aws` y comparar; precios de GuardDuty, Security Hub, Route 53, endpoints de VPC (0,010, 0,0151 o 0,021 por hora) y copias entre regiones; comparación RDS frente a Aurora; cifras de pruebas de penetración, auditoría y personal; reemplazar los supuestos de volumen con mediciones. **Módulo 13:** versión mínima de Java de Spring Boot 4.1 y compatibilidad de Spring Modulith 2.1; precio de Aurora en São Paulo (ADR-006); atender los riesgos altos de la matriz antes de producción. **Módulo 14:** calibrar con datos reales los umbrales de extracción y el 15 % de deuda técnica; figura legal para créditos y obligatoriedad de finanzas abiertas; número y fecha de la próxima Java LTS.
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
| 2026-10-17 | Módulo 2: se dibujan cuatro BPMN más (ocho en total), se deja fuera las finanzas abiertas, se aprueban los atributos de calidad y su prioridad y se redacta el catálogo en `docs/requisitos/` y la nota del módulo |
| 2026-10-17 | Módulo 2 cerrado: repaso (5 de 5), pregunta de entrevista y pull request del entregable. Inicia el Módulo 3 (metodología ágil) |
| 2026-10-17 | Módulo 3: se elige Scrum, se define el Product Goal, se crea el backlog (7 épicas, 23 historias) y se corta el MVP sin Bre-B (Release 1) con Bre-B en el Release 2 |
| 2026-10-18 | Módulo 3 cerrado y fusionado a `main`. Se corrige la numeración: el siguiente es el Módulo 4 (arquitectura empresarial), no el 5. Módulo 4: mapa de capacidades de dos niveles (7 dominios, 27 capacidades), 8 principios y modelo en Archi |
| 2026-10-19 | Módulo 4 cerrado y fusionado a `main`. Se agregan al portal el Mapa general (componente React), el Mapa de alto nivel y el Mapa de engranes. Módulo 5: se aprueban las decisiones A (monolito modular), B (8 módulos), C (entregable) y D (Mermaid); se modela Kuenta en Structurizr y se redactan las páginas del módulo. Se corrige la herramienta: Structurizr Lite y el CLI figuran en fin de vida, la imagen vigente es `structurizr/structurizr` |
| 2026-10-19 | Módulo 5: el sitio muestra los diagramas bien; se agregan copias en draw.io (C4 en `modelos/c4/`, UML en `modelos/uml/`) y un diagrama de casos de uso. Se alinean los estados del Mapa general, el README y la introducción, y una cita de CI/CD (Módulo 11) |
| 2026-10-20 | **Módulo 5 cerrado y fusionado a `main`** (`00338aa`): repaso y pregunta de entrevista. Inicia el Módulo 6: se investigan Bre-B (documento técnico del Banco de la República), los patrones saga y outbox de AWS y la conservación de documentos; se aprueban las decisiones A (dueño de los datos), B (libro mayor), C (eventos), D (sagas) y E (entregable). Se redactan las páginas del módulo, las copias en draw.io, el botón «Ampliar» del sitio y la corrección «Avisa» → «Publica evento» en el modelo y los diagramas del Módulo 5 |
| 2026-10-21 | **Módulo 6 cerrado y fusionado a `main`** (`c905571`): repaso y pregunta de entrevista. Inicia el Módulo 7: se investigan Bre-B (DSP-465 y DSP-470), Registraduría, Decreto 368 de 2026, tipos de API gateway de AWS, `Idempotency-Key` y OpenAPI; se aprueban las decisiones A (mapa de integraciones), B (estilo de APIs), C (gateway y modelo canónico), D (resiliencia) y E (entregable). Se redactan las páginas, los tres contratos OpenAPI y la copia en draw.io, y se corrige en el Módulo 5 la conciliación con redes de corresponsales (de Pagos a Efectivo) |
| 2026-10-21 | **Módulo 7 cerrado y fusionado a `main`** (`e050016`). El autor adopta el ciclo ligero (sin repaso ni pregunta de entrevista; se mantienen borrador, aprobación, documentación única, rama y pull request) para terminar el ejercicio. Inicia el Módulo 8: se investigan regiones de AWS y Colombia, la Circular 005 de 2019, Fargate, Multi-AZ y restauración a un instante de RDS y el tipo de API Gateway; se aprueban las decisiones A (región y cuentas), B (cómputo), C (base de datos), D (entrada y red) y E (entregable). Se redactan las páginas, la nota y la copia en draw.io |
| 2026-10-21 | **Módulo 8 cerrado y fusionado a `main`** (`f76d592`). Inicia el Módulo 9: se investigan las Circulares 007 de 2018 y 033 de 2020, la Circular Externa 004 de 2026, certificaciones y responsabilidad compartida de AWS, transferencia internacional de datos, STRIDE y OWASP API Security Top 10; se aprueban las decisiones A (modelo de amenazas), B (identidad y acceso), C (protección de datos), D (detección, respuesta y desarrollo seguro) y E (cumplimiento y entregable). Se redactan las páginas, la nota y la copia en draw.io. Se registra el riesgo legal de procesar datos en São Paulo mientras Brasil no esté en la lista de la SIC |
| 2026-10-21 | **Módulo 9 cerrado y fusionado a `main`** (`6d74604`). Inicia el Módulo 10: se investigan los acuerdos de servicio de AWS, las estrategias de recuperación, la copia de respaldos entre regiones, SLO y presupuesto de error, GuardDuty, Security Hub y alarmas; se aprueban las decisiones A a E y el autor delega la decisión de recuperación ante pérdida de región (RPO 15 min, RTO 4 h con respaldo y restauración). Se redactan las páginas, la nota y la copia en draw.io. Se registra el riesgo de disponibilidad compuesta (99,88 %) |
| 2026-10-21 | **Módulo 10 cerrado y fusionado a `main`** (`e4b05ab`). Inicia el Módulo 11: se investigan OIDC de GitHub con AWS, blue/green integrado de ECS, escaneo de imágenes en ECR, entornos de GitHub, OpenTofu frente a Terraform y las métricas DORA vigentes (cinco); se aprueban las decisiones A a E (diseño sin código). Se redactan las páginas, la nota y la copia en draw.io, y se actualiza RNF-07 |
| 2026-10-21 | **Módulo 11 cerrado y fusionado a `main`** (`565f636`). Inicia el Módulo 12: se leen los precios de São Paulo en los datos de la AWS Pricing Calculator, se aprueban las decisiones A a E y se redactan las tres páginas y la nota. Se corrige el fondo y el botón de cierre de la vista ampliada de diagramas |
| 2026-10-21 | **Módulo 12 cerrado y fusionado a `main`** (`af87f20`). Inicia el Módulo 13: se verifican Java 25 LTS, Spring Boot 4.1 y Spring Modulith 2.1 y el formato MADR 4.0; se aprueban las decisiones A a E y se redactan diez ADR, la tabla de trade-offs, la matriz de riesgos y la nota. Se agrega el panorama consolidado de los 16 módulos en `docs/modulos/panorama.md` |
| 2026-10-21 | **Módulo 13 cerrado y fusionado a `main`** (`6a43d59`). Inicia el Módulo 14: se revisan funciones de aptitud, verificación de Spring Modulith y Strangler Fig; se aprueban las decisiones A a E y se redactan tres páginas y la nota; el panorama de módulos se actualiza |

## 11. Glosario de siglas y términos
| Sigla o término | Significado |
|---|---|
| ADR | Architecture Decision Record: registro de decisión de arquitectura (qué se decidió, por qué y con qué consecuencias) |
| ALB | Application Load Balancer: reparte las peticiones entre varias tareas |
| API | Application Programming Interface: interfaz de programación de aplicaciones; la forma en que un sistema ofrece funciones a otros |
| API gateway | Puerta de entrada gestionada que recibe las peticiones y aplica autenticación, límites y validación antes de pasarlas |
| Apunte | Línea de un libro mayor: un valor positivo o negativo sobre una cuenta; los apuntes de una operación suman cero |
| arc42 | Plantilla ligera para documentar arquitecturas de software (es un nombre propio) |
| ArchiMate | Lenguaje estándar para modelar arquitectura empresarial (negocio, aplicación, tecnología) |
| ATAM | Architecture Tradeoff Analysis Method: método para evaluar una arquitectura contra sus atributos de calidad |
| Autorización por objeto | Comprobar que el recurso pedido pertenece a quien lo pide |
| AWS | Amazon Web Services: la nube de Amazon |
| Backlog | Lista ordenada de todo lo que se quiere construir |
| Bandera de funcionalidad | Interruptor que activa o apaga una función sin desplegar de nuevo |
| BFF | *Backend for Frontend*: una API hecha a la medida de un canal (app, web) |
| BIAN | Banking Industry Architecture Network: red que publica un modelo de referencia de capacidades para la banca |
| Bloqueo semántico | Marcar un valor como apartado (la reserva) mientras un proceso está a medias, porque las sagas no dan aislamiento |
| Blue/green | Despliegue con la versión nueva junto a la vigente y cambio de tráfico con vuelta atrás rápida |
| BPMN | Business Process Model and Notation: notación para dibujar procesos de negocio |
| Bre-B | Sistema de pagos inmediatos de Colombia, que permite transferencias entre entidades al instante (Decreto 1069 de 2025) |
| Bulkhead (compartimento) | Recursos separados por integración para que una lenta no afecte a las demás |
| Bus de integración (ESB) | Intermediario central por donde pasan y se transforman los mensajes entre sistemas; aquí no se usa |
| C4 | Context, Containers, Components, Code: método para diagramar arquitectura en cuatro niveles de detalle |
| Capa anticorrupción (adaptador) | Código que traduce entre el idioma de un tercero y el propio, para que no se filtre al resto |
| Capacidad de negocio | Lo que una organización necesita saber hacer para cumplir su estrategia; combina personas, procesos, información y tecnología |
| CI/CD | Continuous Integration / Continuous Delivery: integración y entrega continuas; automatiza probar y desplegar cambios |
| Cifrado por campo | Cifrar un dato dentro de la aplicación, además del cifrado de la base |
| CISO | Chief Information Security Officer: responsable de la seguridad de la información |
| CLI | Command-Line Interface: herramienta que se maneja escribiendo comandos |
| COLCERT | Grupo nacional de respuesta a emergencias cibernéticas de Colombia |
| Compensación | Paso que deshace el efecto de uno anterior cuando una saga falla |
| Confirmación adicional (step-up) | Pedir otro factor al hacer una operación sensible |
| Consistencia eventual | Los datos de distintos lugares coinciden con un pequeño retraso, no al instante |
| Contenedor | Caja aislada que lleva una aplicación con todo lo que necesita para ejecutarse (Docker es la herramienta más usada) |
| Contract-first | Escribir el contrato de la API antes que el código |
| Cortacircuitos | Dejar de llamar a un tercero un rato tras fallos seguidos |
| Costo por transacción | Gasto de nube dividido entre el número de transacciones |
| Criterio de aceptación | Condición verificable que debe cumplirse para dar una historia por terminada |
| Cuenta de tránsito | Cuenta interna del libro por donde pasa el dinero que sale o entra por Bre-B o por un corresponsal |
| DDD | Domain-Driven Design: diseño guiado por el dominio; modela el software según el lenguaje y las reglas del negocio |
| Debida diligencia simplificada | Versión reducida del conocimiento del cliente que la norma permite para productos de bajo riesgo, como el depósito de bajo monto |
| Definition of Done | Estándar de calidad que debe cumplir todo elemento para considerarse terminado; incluye los requisitos regulatorios |
| Depósito de bajo monto | Producto de depósito electrónico para personas naturales con tope de saldo y de débitos mensuales de 8 SMLMV; se puede abrir a distancia (Decreto 222 de 2020) |
| Deriva (drift) | Diferencia entre lo desplegado y lo descrito en el código |
| DICE, SEBRA | Sistemas del Banco de la República de los que depende Bre-B (DSP-470) |
| Digest | Huella única de una imagen de contenedor |
| Disparador | Condición medida que activa un cambio del plan |
| Docker | Herramienta para crear y ejecutar contenedores |
| Dominio de negocio | Grupo de capacidades relacionadas que comparten conocimiento y datos |
| DORA | DevOps Research and Assessment: métricas de entrega de software (frecuencia, plazo de cambio, recuperación, fallo y retrabajo) |
| DSL | Domain-Specific Language: lenguaje específico de dominio; aquí, el texto con el que Structurizr describe un modelo C4 |
| EA | Enterprise Architecture: arquitectura empresarial |
| ECS | Amazon Elastic Container Service: orquestador de contenedores de AWS |
| Épica | Conjunto de historias que persiguen un mismo objetivo |
| Evento | Aviso de un hecho que ya ocurrió; quien lo publica no sabe quién lo usará |
| Expandir y contraer | Patrón de migración en dos pasos para que dos versiones convivan sobre la misma base de datos |
| Failover | Paso automático al standby cuando falla el principal |
| Fargate | Modo de ECS que ejecuta contenedores sin administrar servidores |
| FinOps | Financial Operations: práctica de gestionar y optimizar el costo de la nube |
| Fogafín | Fondo de Garantías de Instituciones Financieras: seguro de depósitos; cubre hasta $50.000.000 por persona |
| Frontera de confianza | Línea entre partes que se confían distinto; donde hay que verificar identidad y permisos |
| Función de aptitud (fitness function) | Verificación automática de una característica de la arquitectura |
| Gateway | Puerta de entrada única que recibe las llamadas a las APIs y las dirige a cada servicio |
| GMF | Gravamen a los Movimientos Financieros (impuesto sobre retiros y transferencias); tiene exenciones para depósitos de bajo monto |
| Gobierno ligero | Reglas claras y verificaciones automáticas en lugar de comités |
| GuardDuty | Servicio de AWS que detecta actividad sospechosa |
| Guardia (on-call) | Turno de la persona que atiende las alertas |
| Historia de usuario | Necesidad de un usuario escrita como "Como... quiero... para..." |
| HTML | HyperText Markup Language: lenguaje con el que se escriben las páginas web |
| IaC | Infrastructure as Code: infraestructura como código; crear servidores y redes mediante archivos en vez de clics |
| Idempotencia | Propiedad de una operación que, repetida, no duplica sus efectos |
| Idempotency-Key | Cabecera con una llave única para que un reintento no repita el efecto |
| ISO 20022 | Estándar de mensajería financiera que usa Bre-B |
| KMS | Key Management Service: administra las llaves de cifrado |
| LCU | Load Balancer Capacity Unit: unidad con la que AWS cobra el uso del balanceador de carga |
| Libro mayor | Registro donde queda cada movimiento de dinero; solo se agrega, las correcciones son movimientos nuevos |
| Listas restrictivas | Listas de personas con las que una entidad no debe vincularse por riesgo de lavado de activos o financiación del terrorismo |
| Llave de idempotencia | Identificador único de una operación, para reconocer un reintento y no duplicarla |
| Local Zone | Extensión de una región de AWS cerca de una ciudad, con pocos servicios |
| MADR | Markdown Architectural Decision Records: formato abierto para escribir ADR |
| Mapa de calor | Mapa de capacidades coloreado según un criterio, como el tipo, la madurez o el release |
| Mapa de capacidades | Representación visual de las capacidades de una organización, agrupadas por niveles |
| MFA | Multi-Factor Authentication: más de un factor para entrar |
| Mínimo privilegio | Dar a cada persona o sistema solo los permisos que necesita |
| Modelo canónico | Formato único de datos al que todos los sistemas traducen; aquí no hay uno global |
| mTLS | TLS en ambos sentidos: el cliente también se identifica con un certificado |
| Multi-AZ | Base de datos con una réplica en otra zona que toma el control si falla la principal |
| MVP | Minimum Viable Product: producto mínimo viable; la versión más pequeña que ya aporta valor |
| NAT | Network Address Translation: puerta que permite salir a internet desde subredes privadas sin recibir conexiones |
| NAT Gateway | Servicio que permite a la red privada salir a internet sin tener dirección pública |
| OIDC | OpenID Connect: forma de que GitHub se identifique ante AWS con credenciales temporales, sin llaves guardadas |
| OpenAPI | Especificación para describir APIs REST en un archivo |
| OpenTofu | Herramienta de infraestructura como código, de código abierto y compatible con los proveedores de Terraform |
| Orquestación (saga) | Saga dirigida por un coordinador que decide el siguiente paso; la alternativa es la coreografía |
| Outbox transaccional | Guardar el evento en la misma transacción que el dato y publicarlo después con otro proceso |
| OWASP | Organización que publica guías de seguridad; su API Security Top 10 lista los diez riesgos más comunes de las APIs |
| Partida doble | Cada operación se registra con apuntes que suman cero |
| Pipeline | Secuencia automática de etapas que lleva un cambio hasta producción |
| PITR | Point-in-Time Recovery: restauración a un instante, con respaldos y registros de transacciones |
| PNG, SVG | Formatos de imagen: PNG es de píxeles; SVG es vectorial (se amplía sin perder calidad) |
| Postmortem sin culpa | Análisis de un incidente que busca causas del sistema, no culpables |
| Presupuesto de error | Cuánto se puede fallar sin incumplir un objetivo de servicio |
| Principio de arquitectura | Regla general que guía las decisiones de diseño; tiene nombre, enunciado, justificación e implicaciones |
| Product Goal | Objetivo de largo plazo del producto; en Scrum solo hay uno a la vez |
| Punto de compromiso | Decisión que favorece un atributo de calidad a costa de otro |
| Punto de sensibilidad | Parámetro que cambia mucho un atributo de calidad |
| RDS | Amazon Relational Database Service: base de datos administrada |
| Región (AWS) | Zona geográfica de AWS con varios centros de datos |
| Repo | Repositorio: carpeta de proyecto con el historial de todos sus cambios (lo gestiona Git) |
| Reserva | Valor apartado del saldo disponible mientras se espera la confirmación de una operación |
| Respaldo y restauración | Estrategia de recuperación: copias en otra región y reconstrucción cuando se necesita |
| Responsabilidad compartida | AWS protege la infraestructura; el cliente protege lo que pone encima |
| RFC 9457 | Formato estándar de errores en HTTP (`problem+json`) |
| RPO | Recovery Point Objective: cuántos datos se pueden perder, medido en tiempo |
| RTO | Recovery Time Objective: cuánto puede tardar en volver el servicio |
| Runbook | Guía paso a paso para resolver un tipo de incidente |
| SAC | Sistema de Atención al Consumidor Financiero: políticas y procesos para atender consultas, quejas y reclamos (Ley 1328 de 2009) |
| Saga | Proceso de varios pasos locales con compensaciones, para mantener coherencia sin una sola transacción |
| SARLAFT | Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo: controles obligatorios contra el lavado de dinero |
| SAST | Static Application Security Testing: análisis de seguridad del código sin ejecutarlo |
| Savings Plan | Compromiso de gasto por 1 o 3 años a cambio de un descuento |
| SCA | Software Composition Analysis: análisis de vulnerabilidades en las librerías usadas |
| Scrum | Marco de trabajo ágil con sprints, un backlog y roles definidos |
| Security Hub | Servicio de AWS que agrega hallazgos de seguridad y revisa estándares |
| SEDPE | Sociedad Especializada en Depósitos y Pagos Electrónicos: figura legal de Kuenta (Ley 1735 de 2014); no puede otorgar créditos |
| Severidad | Nivel de gravedad de un incidente que decide la respuesta |
| SFC | Superintendencia Financiera de Colombia: entidad que vigila a las entidades financieras |
| SIEM | Security Information and Event Management: herramienta que correlaciona eventos de seguridad |
| Simulacro (game day) | Ensayo planeado de una falla para medir si el plan funciona |
| SLA | Service Level Agreement: acuerdo de nivel de servicio; objetivo con consecuencias contractuales |
| SLI | Service Level Indicator: indicador de nivel de servicio; lo que se mide |
| SLO | Service Level Objective: objetivo de nivel de servicio; el valor que se quiere para un indicador |
| SMLMV | Salario Mínimo Legal Mensual Vigente; en 2026 es $1.750.905 (Decreto 159 de 2026, transitorio) |
| SOA | Service-Oriented Architecture: arquitectura orientada a servicios |
| SOC | Security Operations Center: unidad que monitorea y defiende los sistemas |
| Spring Modulith | Librería de Spring para estructurar y verificar aplicaciones modulares |
| Strangler Fig | Patrón para reemplazar o extraer partes de un sistema de forma gradual |
| STRIDE | Método de amenazas: suplantación, alteración, repudio, divulgación, denegación de servicio y elevación de privilegios |
| Tiempo de observación (bake time) | Lapso en que ambas versiones siguen vivas tras mover el tráfico |
| TLP | Traffic Light Protocol: etiquetas de color que indican con quién se puede compartir un reporte |
| TOGAF | The Open Group Architecture Framework: método de arquitectura empresarial |
| Trunk-based | Trabajo con ramas muy cortas y una rama principal siempre desplegable |
| UIAF | Unidad de Información y Análisis Financiero: recibe los reportes de operaciones sospechosas |
| UML | Unified Modeling Language: lenguaje unificado de modelado (diagramas de secuencia, clases, etc.) |
| UVT | Unidad de Valor Tributario: unidad con la que se expresan los montos de impuestos |
| VPC | Virtual Private Cloud: red privada virtual dentro de AWS |
| VPC link | Enlace privado entre API Gateway y un balanceador dentro de la VPC |
| VPS | Virtual Private Server: servidor virtual privado que se alquila |
| WAF | Web Application Firewall: filtra ataques web comunes |
| Warm standby | Estrategia de recuperación con un entorno reducido siempre encendido en otra región |
| WSL 2 | Windows Subsystem for Linux, versión 2: Linux ligero que corre dentro de Windows; Docker Desktop lo usa |
| Zona de disponibilidad (AZ) | Centro de datos aislado dentro de una región; repartir en dos permite sobrevivir a la caída de una |
