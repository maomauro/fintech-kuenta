---
sidebar_position: 3
title: Banco de preguntas
---

# Banco de preguntas

Decisión D del Módulo 15. Una pregunta típica por módulo, con una respuesta modelo breve. Las respuestas son un punto de partida: se dicen con palabras propias y se respaldan con el enlace al detalle.

### Módulo 0 · Entorno y herramientas

**¿Por qué usar Docker para todo y un repositorio público?**

Docker evita instalar Node y Java en el equipo y permite repetir el mismo entorno en el servidor. El repositorio público sirve de respaldo y de vitrina. Las ramas cortas por módulo con Conventional Commits dan un historial legible.

Detalle: [nota del Módulo 0](../modulos/entorno-y-herramientas.md)

### Módulo 1 · Caso de negocio

**¿Por qué una SEDPE y qué no puede hacer?**

Es la figura que permite captar depósitos de bajo monto y ofrecer pagos electrónicos. No puede otorgar créditos, por eso quedan para una etapa posterior que habría que verificar jurídicamente.

Detalle: [nota del Módulo 1](../modulos/caso-de-negocio.md)

### Módulo 2 · Requisitos

**¿Cómo conviertes «debe ser seguro» en algo que el equipo pueda construir y probar?**

Priorizando los atributos de calidad (seguridad, integridad, disponibilidad, cumplimiento, rendimiento) y llevándolos a requisitos medibles, que luego se vuelven SLO, controles y criterios de aceptación. El dimensionamiento de 50.000 clientes y 50 TPS es una hipótesis a validar.

Detalle: [nota del Módulo 2](../modulos/requisitos.md)

### Módulo 3 · Metodología ágil

**¿Por qué el Release 1 sale sin Bre-B?**

El sistema externo de pagos es el mayor riesgo de integración. Se entrega en dos releases y el cumplimiento va en el mismo backlog y en la Definition of Done, no como un trámite posterior.

Detalle: [nota del Módulo 3](../modulos/metodologia-agil.md)

### Módulo 4 · Arquitectura empresarial

**Dos de tus principios chocan en una decisión. ¿Cómo la resuelves?**

El orden de los principios marca la prevalencia y sigue el de los atributos de calidad: seguridad y privacidad primero, luego que el dinero cuadre. Si aun así se incumple uno, queda como excepción escrita con caducidad.

Detalle: [nota del Módulo 4](../modulos/arquitectura-empresarial.md)

### Módulo 5 · Arquitectura de aplicación

**¿Monolito modular o microservicios, y qué te haría cambiar de opinión?**

Monolito modular: 50.000 clientes y 50 TPS caben en una aplicación con réplicas, y el libro mayor necesita consistencia fuerte. Cambiaría ante una señal medida: escala, despliegue, equipo, cumplimiento o disponibilidad.

Detalle: [nota del Módulo 5](../modulos/arquitectura-de-aplicacion.md)

### Módulo 6 · Datos y consistencia

**¿Qué pasa con el dinero si cae un componente a mitad de una transferencia?**

El libro mayor es de partida doble y la operación es una transacción local. Para Bre-B hay una saga con estado pendiente que no libera la reserva; se reconcilia cada 5 minutos y se revisa a mano a las 24 horas.

Detalle: [nota del Módulo 6](../modulos/datos-y-consistencia.md)

### Módulo 7 · Integración y APIs

**¿Cómo evitas que el cambio de un tercero rompa tu sistema?**

Con un adaptador por integración, contratos versionados en `/v1`, llaves de idempotencia y resiliencia por integración: tiempos de espera, 3 reintentos con jitter y un cortacircuitos tras 5 fallos.

Detalle: [nota del Módulo 7](../modulos/integracion-y-apis.md)

### Módulo 8 · Arquitectura en AWS

**¿Por qué São Paulo y qué riesgo trae?**

Colombia no tiene región de AWS y São Paulo es la más cercana con los servicios necesarios. El riesgo es de jurisdicción, porque Brasil aún no figura en la lista de países adecuados de la SIC (R-02); se mitiga con cláusulas modelo y asesoría jurídica.

Detalle: [nota del Módulo 8](../modulos/arquitectura-en-aws.md)

### Módulo 9 · Seguridad y cumplimiento

**¿Cómo modelas las amenazas?**

Con STRIDE y OWASP API Security Top 10: 16 amenazas con control asignado en identidad, datos y detección y respuesta. Por ejemplo, la amenaza T-14 sobre credenciales de despliegue se cierra con OIDC sin llaves guardadas.

Detalle: [nota del Módulo 9](../modulos/seguridad-y-cumplimiento.md)

### Módulo 10 · Resiliencia y operación

**¿Es alcanzable un 99,95 % con servicios de AWS?**

Compuesto da 99,88 %, por debajo del objetivo (R-01). Se mide la disponibilidad real, el presupuesto de error es de unos 22 minutos al mes y hay tres escenarios de recuperación con RPO y RTO explícitos.

Detalle: [nota del Módulo 10](../modulos/resiliencia-y-operacion.md)

### Módulo 11 · Entrega: CI/CD e IaC

**¿Cómo demuestras ante un auditor qué se desplegó, quién lo aprobó y con qué pruebas?**

Cada despliegue genera evidencia automática: historia, commit y revisores, resultados de pruebas y escaneos, huella de la imagen y aprobador. Quien escribe un cambio no aprueba su despliegue a producción.

Detalle: [nota del Módulo 11](../modulos/entrega-ci-cd-e-iac.md)

### Módulo 12 · Costos (FinOps)

**¿Cuánto cuesta un año y qué supuestos hay detrás?**

Unos 18.060 USD de nube sin soporte y 20.266 con soporte, con volúmenes supuestos. La base de datos y la red privada pesan más. Los compromisos de ahorro se compran después de medir 3 meses.

Detalle: [nota del Módulo 12](../modulos/costos-finops.md)

### Módulo 13 · Decisiones y trade-offs

**¿Cómo documentas una decisión para que alguien la entienda dentro de dos años?**

Con un ADR en formato MADR: contexto, opciones, resultado y consecuencias. No se edita para cambiar de opinión; se reemplaza por otro. Los riesgos se puntúan y se revisan cada trimestre.

Detalle: [nota del Módulo 13](../modulos/decisiones-y-trade-offs.md)

### Módulo 14 · Gobierno y evolución

**¿Cuándo extraerías un módulo del monolito?**

Solo con una señal medida. Se hace de forma gradual (Strangler Fig), con un ADR y un canal de mensajes. Las reglas de arquitectura se verifican en cada pull request con funciones de aptitud como `verify()` de Spring Modulith.

Detalle: [nota del Módulo 14](../modulos/gobierno-y-evolucion.md)

### Módulo 15 · Publicación y exposición

**¿Cómo publicaste el sitio y qué cuidaste?**

Una imagen estática construida en GitHub Actions y publicada en GHCR, servida detrás de un gateway único que solo acepta a Cloudflare, con contenedor de solo lectura y sin construir nada en el servidor.

Detalle: [nota del Módulo 15](../modulos/publicacion-y-exposicion.md)

## Preguntas que cruzan varios módulos

**¿Qué decisión cambiarías si empezaras de nuevo?** Compararía Aurora con RDS desde el inicio y verificaría antes la normativa de Bre-B, que quedó pendiente. Ver [matriz de riesgos](../decisiones-y-trade-offs/matriz-de-riesgos.md).

**¿Qué riesgo te preocupa más?** La disponibilidad compuesta frente al SLO (R-01) y la jurisdicción de los datos en Brasil (R-02): ambos son altos y tienen una respuesta definida.

**¿Qué sacrificaste para ahorrar costo?** Una región de recuperación activa: aceptas 4 horas de RTO ante la caída de una región. Ver [trade-offs](../decisiones-y-trade-offs/trade-offs.md).

**¿Cómo sabes que el diseño no se degrada con el tiempo?** Con [funciones de aptitud](../gobierno-y-evolucion/lineamientos-de-gobierno.md) que bloquean el pull request y una revisión trimestral de riesgos y ADR.

**¿Qué parte no validaste?** Las referencias normativas y los precios son una estimación del autor y deben verificarse antes de cualquier uso real. Ver los pendientes de cada nota.
