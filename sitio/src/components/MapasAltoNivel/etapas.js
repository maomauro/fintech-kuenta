// Contenido compartido por los dos mapas de alto nivel (Una hoja y Engranes).
// Fuente única: si cambia un módulo o un nombre, se cambia aquí.
export const ETAPAS = [
  {
    n: 1, icono: '🏢', titulo: 'Empresa y negocio', sub: 'Contexto y alcance', modulos: 'Módulo 1',
    parrafo: 'Qué hace Kuenta y hasta dónde llega, mirado desde quienes lo usan.',
    items: [['🧑‍🤝‍🧑', 'Clientes'], ['👷', 'Empleados'], ['🏛️', 'Reguladores']],
    entrega: 'Documento de contexto y proceso en BPMN.',
    enlace: 'Con el alcance claro se definen los requerimientos',
  },
  {
    n: 2, icono: '📋', titulo: 'Definir requerimientos', modulos: 'Módulos 2 y 3',
    parrafo: 'Qué debe cumplir el sistema y cómo se trabaja en equipo. Alimentan a las dos arquitecturas que siguen.',
    items: [['✅', 'Qué debe hacer'], ['📏', 'Qué calidad: disponibilidad, RPO/RTO'], ['⚖️', 'Qué exige la ley']],
    entrega: 'Catálogo de requisitos priorizado.',
    enlace: 'Los requisitos y el negocio se ordenan en dominios',
  },
  {
    n: 3, icono: '🏙️', titulo: 'Arquitectura empresarial', modulos: 'Módulo 4',
    parrafo: 'Ordena el negocio antes de diseñar software: de los dominios salen las capacidades, y los principios fijan las reglas.',
    items: [['🧩', '7 dominios'], ['🗺️', 'Mapea 27 capacidades'], ['📜', 'Fija 8 principios']],
    entrega: 'Mapa de capacidades y principios.',
    enlace: 'Con dominios, capacidades y principios se diseña la solución',
  },
  {
    n: 4, icono: '🛠️', titulo: 'Arquitectura de software', sub: 'Diseñar la solución', modulos: 'Módulos 5, 6 y 7',
    parrafo: 'Aquí giran juntos los engranes. Cada uno responde algo distinto; no son pasos en fila.',
    engranes: [
      ['DDD', 'límites'],
      ['Estilo', 'SOA, monolito modular, microservicios'],
      ['Datos', 'y eventos'],
      ['APIs', 'integración'],
    ],
    entrega: 'Diagramas C4, modelo de datos y contratos.',
    enlace: 'Diseñada la solución, se decide dónde se ubica y corre',
  },
  {
    n: 5, icono: '☁️', titulo: 'Dónde se ubica y corre', modulos: 'Módulos 8, 9 y 10',
    parrafo: 'La solución llevada a la nube, protegida y lista para fallar sin caerse.',
    items: [['🌩️', 'AWS'], ['🔐', 'Seguridad y cumplimiento'], ['🛡️', 'Resiliencia y operación']],
    entrega: 'Diagrama de despliegue, amenazas y controles, objetivos de servicio.',
    enlace: 'Con la solución operando, se decide, se gobierna y se evoluciona',
  },
  {
    n: 6, icono: '🧭', titulo: 'Decidir, gobernar y evolucionar', modulos: 'Módulos 13, 14 y 15',
    parrafo: 'Se documentan las decisiones, se fijan lineamientos para que la arquitectura no se degrade y se publica lo aprendido.',
    items: [['📝', 'Decisiones (ADR) y riesgos'], ['📐', 'Lineamientos'], ['🔄', 'Plan de evolución: vuelve a 1']],
    entrega: 'Decisiones registradas y plan de evolución.',
  },
];

export const TRANSVERSAL = {
  icono: '💰',
  titulo: 'Entregas y control de costos',
  modulos: 'Módulos 11 y 12',
  items: ['🚀 CI/CD', '🧱 Infraestructura como código', '📊 FinOps (total anual)'],
  nota: 'Atraviesa todo el recorrido: cada decisión cuesta construirla y operarla, así que se mide desde el inicio.',
};
