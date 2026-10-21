// Contenido del mapa general. Cada paso responde una pregunta y deja un entregable.
// Los pasos 5 a 8 son lo previsto y se confirman al llegar a cada módulo.

export const ESTADOS = {done: "Cerrado", now: "En curso", todo: "Pendiente"};

export const PASOS = [
  {
    "n": 1,
    "nav": "Entender",
    "c": "c1",
    "t": "Entender el negocio",
    "q": "¿Por qué existe esto?",
    "st": "done",
    "bul": [
      "Qué problema resuelve",
      "Quiénes son los interesados",
      "Qué exige la regulación"
    ],
    "ex": "Kuenta: depósito de bajo monto, regulado como SEDPE",
    "ent": "M1 · Contexto y alcance",
    "que": "Antes de diseñar nada se entiende para qué existe el producto, quién lo usa y qué reglas lo rodean. Las decisiones técnicas se justifican contra esto.",
    "hace": [
      "Describir el problema y la propuesta de valor",
      "Identificar interesados: clientes, corresponsales, reguladores, equipo",
      "Listar la regulación que aplica y qué obliga a hacer",
      "Dibujar los procesos clave en BPMN"
    ],
    "kuenta": [
      "Depósito de bajo monto para personas, sin ir a una oficina",
      "Opera con corresponsales para meter y sacar efectivo",
      "8 procesos modelados en BPMN"
    ],
    "conceptos": [
      "Caso de negocio",
      "Interesados",
      "Alcance",
      "BPMN",
      "Regulación"
    ],
    "entregable": "M1 · Documento de contexto y objetivos, y los procesos BPMN",
    "error": "Empezar por la tecnología y buscarle después un problema.",
    "entrevista": "Antes de elegir tecnología, ¿qué averiguas y a quién se lo preguntas?"
  },
  {
    "n": 2,
    "nav": "Requisitos",
    "c": "c2",
    "t": "Definir requisitos",
    "q": "¿Qué debe cumplir?",
    "st": "done",
    "bul": [
      "Qué debe hacer (funcionales)",
      "Qué tan bien (calidad)",
      "Límites y normas"
    ],
    "ex": "Kuenta: 24 funcionales, 10 de calidad, 9 restricciones",
    "ent": "M2 · Catálogo de requisitos",
    "que": "Se convierte lo entendido en requisitos que se pueden verificar. Los de calidad (seguridad, disponibilidad, auditoría) pesan más en la arquitectura que los funcionales.",
    "hace": [
      "Escribir requisitos funcionales y casos de uso",
      "Escribir atributos de calidad medibles y ordenarlos por prioridad",
      "Registrar restricciones y obligaciones regulatorias",
      "Convertirlos en backlog, MVP y releases (M3)"
    ],
    "kuenta": [
      "24 requisitos funcionales (RF), 10 de calidad (RNF), 9 restricciones (RES) y 12 casos de uso",
      "Seguridad, integridad del dinero y auditoría van primero",
      "Backlog de 7 épicas y 23 historias; MVP sin Bre-B, que sale en el Release 2"
    ],
    "conceptos": [
      "Funcional",
      "Atributo de calidad",
      "Restricción",
      "Caso de uso",
      "Historia de usuario",
      "MVP"
    ],
    "entregable": "M2 · Catálogo de requisitos y atributos de calidad priorizados. M3 · Backlog y plan de releases",
    "error": "Escribir calidad sin números («debe ser rápido») y no poder comprobarla.",
    "entrevista": "¿Cómo conviertes «debe ser seguro» en algo que el equipo pueda construir y probar?"
  },
  {
    "n": 3,
    "nav": "Capacidades",
    "c": "c3",
    "t": "Mapear capacidades",
    "q": "¿Qué debe saber hacer la empresa?",
    "st": "done",
    "bul": [
      "Agrupar en dominios",
      "Marcar: diferenciadora, obligatoria o de apoyo",
      "Decidir qué va primero"
    ],
    "ex": "Kuenta: 7 dominios y 27 capacidades",
    "ent": "M4 · Mapa de capacidades",
    "que": "Una capacidad describe lo que la empresa es capaz de hacer, sin decir cómo ni con qué sistema. Se mantiene estable aunque cambien los procesos, las personas o la tecnología.",
    "hace": [
      "Listar lo que el negocio debe saber hacer, a dos niveles",
      "Agrupar en dominios de negocio",
      "Clasificar cada una: diferenciadora, obligatoria por ley o de apoyo",
      "Asignarlas a un release y comprobar que cubren todos los requisitos"
    ],
    "kuenta": [
      "7 dominios: Clientes e identidad, Cuentas y depósitos, Pagos y transferencias, Efectivo y corresponsales, Riesgo y cumplimiento, Atención y experiencia, Gestión corporativa",
      "27 capacidades que cubren los 24 requisitos funcionales",
      "Modelado en Archi, con dos vistas: por tipo y por release"
    ],
    "conceptos": [
      "Capacidad de negocio",
      "Dominio de negocio",
      "Diferenciadora / obligatoria / apoyo",
      "ArchiMate",
      "Archi"
    ],
    "entregable": "M4 · Mapa de capacidades (modelo en Archi y diagramas)",
    "error": "Confundir capacidad con proceso o con área de la organización.",
    "entrevista": "¿Qué es una capacidad de negocio y en qué se diferencia de un proceso?"
  },
  {
    "n": 4,
    "nav": "Principios",
    "c": "c4",
    "t": "Fijar principios",
    "q": "¿Con qué reglas decidimos?",
    "st": "done",
    "bul": [
      "Pocas reglas claras",
      "Ordenadas por prevalencia",
      "Sirven para resolver choques"
    ],
    "ex": "Kuenta: 8 principios; la ley no se negocia",
    "ent": "M4 · Principios",
    "que": "Los principios son reglas cortas que guían todas las decisiones posteriores. Cuando dos buenas ideas chocan, el orden de prevalencia decide cuál gana.",
    "hace": [
      "Redactar pocos principios, cada uno con su enunciado",
      "Justificar por qué importan y qué implican en la práctica",
      "Ordenarlos por prevalencia",
      "Usarlos como criterio en cada decisión de diseño"
    ],
    "kuenta": [
      "PA-01 Seguridad y privacidad desde el diseño",
      "PA-02 El dinero siempre cuadra",
      "PA-03 Diseñar para fallar",
      "PA-04 Cumplir es parte del diseño",
      "PA-05 Un solo dueño por cada dato",
      "PA-06 Lo más simple que cumpla",
      "PA-07 Evolución en pasos pequeños",
      "PA-08 Automatizar la entrega y la evidencia"
    ],
    "conceptos": [
      "Principio de arquitectura",
      "Prevalencia",
      "Implicaciones",
      "Motivation (Archi)"
    ],
    "entregable": "M4 · Principios de arquitectura",
    "error": "Escribir frases bonitas que nunca resuelven una decisión real.",
    "entrevista": "Dos de tus principios chocan en una decisión. ¿Cómo la resuelves?"
  },
  {
    "n": 5,
    "nav": "Diseñar",
    "c": "c5",
    "t": "Diseñar la solución",
    "q": "¿Cómo se construye?",
    "st": "done",
    "bul": [
      "Estilo y límites de aplicación",
      "Datos y consistencia",
      "Integración y APIs"
    ],
    "ex": "Kuenta: monolito modular, diagramas C4",
    "ent": "M5, M6, M7 · C4, datos, contratos",
    "que": "Aquí entran los estilos y patrones. Los dominios y principios del paso anterior se traducen en módulos, datos, servicios y APIs.",
    "hace": [
      "Elegir el estilo: monolito modular o microservicios",
      "Trazar los límites de cada módulo con DDD",
      "Decidir quién es dueño de cada dato y cómo se mantiene el dinero cuadrado",
      "Definir los contratos de las APIs y las integraciones con terceros"
    ],
    "kuenta": [
      "Decisión del M5: monolito modular, con extracción posterior de un módulo solo si una señal medida lo pide",
      "Ocho módulos: Identidad y apertura, Cuentas y depósitos, Pagos y transferencias, Efectivo y corresponsales, Cumplimiento y riesgo, Atención al cliente, más Notificaciones y Auditoría transversales",
      "Diagramas C4 de contexto, contenedores y componentes, y secuencias UML",
      "Decisiones del M6: libro mayor de partida doble ligera, eventos con outbox y sagas orquestadas para Bre-B y el efectivo",
      "Decisiones del M7: REST con OpenAPI e idempotencia, un adaptador por tercero y gateway sin modelo canónico global"
    ],
    "conceptos": [
      "Monolito modular",
      "Microservicios",
      "DDD y contextos delimitados",
      "C4",
      "Eventos y sagas",
      "APIs y contratos",
      "API gateway",
      "SOA"
    ],
    "mods": [
      [
        "M5 · Aplicación",
        "Estilo, límites de dominio (DDD) y diagramas C4."
      ],
      [
        "M6 · Datos",
        "Modelo de datos, eventos y sagas para que el dinero cuadre."
      ],
      [
        "M7 · Integración y APIs",
        "Contratos, gateway, terceros y la idea de SOA: la capacidad expuesta como servicio."
      ]
    ],
    "entregable": "M5 · Diagramas C4. M6 · Modelo de datos y flujo de eventos. M7 · Contratos de ejemplo y mapa de integraciones",
    "error": "Elegir microservicios por moda, sin tener el equipo ni la necesidad.",
    "entrevista": "¿Monolito modular o microservicios para este producto, y qué te haría cambiar de opinión?"
  },
  {
    "n": 6,
    "nav": "Desplegar",
    "c": "c6",
    "t": "Elegir dónde corre",
    "q": "¿Sobre qué infraestructura?",
    "st": "now",
    "aqui": true,
    "bul": [
      "Nube y servicios",
      "Seguridad y cumplimiento",
      "Resiliencia y operación"
    ],
    "ex": "Kuenta: AWS, modelo de amenazas, objetivos de servicio",
    "ent": "M8, M9, M10 · Despliegue y controles",
    "que": "Se decide dónde y con qué servicios corre la solución, cómo se protege y cómo sobrevive a las fallas.",
    "hace": [
      "Diseñar el despliegue en la nube y elegir los servicios",
      "Modelar amenazas y definir controles: identidad, cifrado, auditoría, antifraude",
      "Definir continuidad, observabilidad y objetivos de nivel de servicio",
      "Escribir el plan de recuperación"
    ],
    "kuenta": [
      "Nube principal: AWS",
      "Decisiones del M8: región São Paulo, monolito en contenedores con Fargate en dos zonas, base de datos PostgreSQL Multi-AZ y entrada por API Gateway con mTLS",
      "Controles alineados con la regulación financiera",
      "Decisiones del M9: modelo de amenazas con STRIDE, autenticación fuerte, cifrado con llaves propias y matriz de cumplimiento con evidencia",
      "Objetivos de servicio y plan de recuperación definidos antes de construir"
    ],
    "mods": [
      [
        "M8 · AWS",
        "Diagrama de despliegue y tabla de servicios."
      ],
      [
        "M9 · Seguridad",
        "Modelo de amenazas y controles."
      ],
      [
        "M10 · Resiliencia",
        "Plan de recuperación y objetivos de nivel de servicio."
      ]
    ],
    "conceptos": [
      "AWS",
      "Modelo de amenazas",
      "Cifrado",
      "Auditoría",
      "Antifraude",
      "Observabilidad",
      "Nivel de servicio"
    ],
    "entregable": "M8 · Despliegue y servicios. M9 · Amenazas y controles. M10 · Recuperación y objetivos de servicio",
    "error": "Tratar la seguridad y la resiliencia como un parche del final.",
    "entrevista": "¿Qué pasa con el dinero de un cliente si cae un componente a mitad de una transferencia?"
  },
  {
    "n": 7,
    "nav": "Entregar",
    "c": "c7",
    "t": "Entregar y controlar costos",
    "q": "¿Cómo llega a producción?",
    "st": "todo",
    "bul": [
      "CI/CD e infraestructura como código",
      "Evidencia automática",
      "Costo total anual"
    ],
    "ex": "Kuenta: flujo de despliegue y estimación anual",
    "ent": "M11, M12 · Flujo y costos",
    "que": "Se automatiza cómo el cambio llega a producción, de modo que la evidencia para el regulador se genere sola, y se estima cuánto cuesta operar todo.",
    "hace": [
      "Diseñar el flujo de CI/CD y la infraestructura como código",
      "Automatizar la evidencia: requisito, historia, commit, prueba y despliegue",
      "Estimar el costo de la nube y de la operación",
      "Presentar el costo como total anual"
    ],
    "kuenta": [
      "La Definition of Done de nivel 2 (auditable) se produce con cada despliegue",
      "Estimación de costos en total anual"
    ],
    "mods": [
      [
        "M11 · CI/CD e IaC",
        "Diseño del flujo de despliegue."
      ],
      [
        "M12 · Costos (FinOps)",
        "Estimación en total anual."
      ]
    ],
    "conceptos": [
      "CI/CD",
      "Infraestructura como código",
      "Trazabilidad",
      "FinOps",
      "Total anual"
    ],
    "entregable": "M11 · Diseño del flujo de despliegue. M12 · Estimación de costos",
    "error": "Estimar el costo solo de la nube y olvidar operación, soporte y cumplimiento.",
    "entrevista": "¿Cómo demuestras ante un auditor qué se desplegó, quién lo aprobó y con qué pruebas?"
  },
  {
    "n": 8,
    "nav": "Evolucionar",
    "c": "c8",
    "t": "Decidir, gobernar y evolucionar",
    "q": "¿Cómo lo mantenemos en el tiempo?",
    "st": "todo",
    "bul": [
      "Registrar decisiones (ADR)",
      "Medir riesgos",
      "Plan de evolución"
    ],
    "ex": "Kuenta: ADR, lineamientos y plan",
    "ent": "M13, M14 · Decisiones y gobierno",
    "que": "Una arquitectura se mantiene en el tiempo si las decisiones quedan escritas, los riesgos se miden y hay un plan para cambiar sin romperla.",
    "hace": [
      "Escribir un ADR por cada decisión clave, con alternativas y consecuencias",
      "Evaluar riesgos y los compromisos aceptados (trade-offs)",
      "Definir lineamientos de gobierno",
      "Planear la evolución, por ejemplo extraer un módulo cuando haga falta"
    ],
    "kuenta": [
      "Cada decisión del curso se traza a una capacidad o a un principio",
      "Plan de evolución que incluye la posible extracción de módulos del monolito"
    ],
    "mods": [
      [
        "M13 · Decisiones",
        "ADR de las decisiones clave y evaluación de riesgos."
      ],
      [
        "M14 · Gobierno",
        "Lineamientos y plan de evolución."
      ]
    ],
    "conceptos": [
      "ADR",
      "Trade-off",
      "Riesgo",
      "Gobierno",
      "Evolución"
    ],
    "entregable": "M13 · ADR y riesgos. M14 · Lineamientos y plan de evolución",
    "error": "Dejar las decisiones en la cabeza de una persona.",
    "entrevista": "¿Cómo documentas una decisión para que alguien la entienda dentro de dos años?"
  }
];
