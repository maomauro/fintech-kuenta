---
sidebar_position: 9
title: "Módulo 9 · Seguridad y cumplimiento"
---

# Módulo 9 · Seguridad y cumplimiento

**Entregable:** modelo de amenazas y controles. Tres páginas del sitio y una copia editable del diagrama de fronteras de confianza en draw.io.

Con el despliegue definido, la arquitecta o el arquitecto decide **cómo se protege lo que importa y cómo se demuestra a un regulador**. Este módulo define controles y evidencias; los valores (plazos, intentos, frecuencias) se fijan en el Módulo 10 y el flujo de entrega segura en el Módulo 11.

## Qué se hizo

1. Se investigó: Circular Externa 007 de 2018 (ciberseguridad) y 033 de 2020, la Circular 004 de 2026 que reorganizó la circular básica, las certificaciones y el modelo de responsabilidad compartida de AWS, la transferencia internacional de datos y los métodos STRIDE y OWASP API Security Top 10.
2. Se definió el modelo de amenazas (decisión A).
3. Se definieron identidad y acceso (decisión B), protección de datos (decisión C) y detección, respuesta y desarrollo seguro (decisión D).
4. Se publicó la matriz de cumplimiento (decisión E).

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Modelo de amenazas](../seguridad-y-cumplimiento/modelo-de-amenazas.md) | Método, activos, fronteras de confianza y 16 amenazas con su control |
| [Controles](../seguridad-y-cumplimiento/controles.md) | Identidad, datos, detección y respuesta, y mapa con OWASP |
| [Matriz de cumplimiento](../seguridad-y-cumplimiento/matriz-de-cumplimiento.md) | Requisito, control, evidencia y responsable |
| `modelos/seguridad/*.drawio` | Copia editable del diagrama de fronteras de confianza |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Modelo de amenazas | STRIDE sobre los flujos; activos: dinero y libro, datos personales y biometría, credenciales y llaves; riesgo por impacto y probabilidad | PA-01: seguridad desde el diseño |
| B. Identidad y acceso | Autenticación fuerte y confirmación adicional en operaciones de dinero; autorización por objeto; mTLS y credencial por terminal; personal con MFA, mínimo privilegio y acceso temporal | OWASP API1 y API2; Circular 007 (3.5) |
| C. Protección de datos | Cifrado en tránsito y en reposo con llaves propias; cifrado por campo para documento y biometría; sin datos personales en registros y eventos; retención como parámetro | Circular 005 (3.10); Ley 1581 |
| D. Detección y respuesta | Auditoría, CloudTrail y alarmas; plan de respuesta con reporte a la Superintendencia, COLCERT y clientes; desarrollo seguro y pruebas | Circulares 007 y 033 |
| E. Cumplimiento | Matriz de controles con evidencia y responsable; políticas simuladas | Circulares 005, 007 y 033, Ley 1581 y SARLAFT |

## Estado

- [x] Modelo de amenazas
- [x] Controles
- [x] Matriz de cumplimiento
- [x] Copia en draw.io
- [ ] Revisar la copia en draw.io abierta en la aplicación (hecha sin abrirla)
- [ ] Confirmar en fuente oficial la numeración de la Circular 007 tras la Circular Externa 004 de 2026 (las citas vienen de copias de terceros)
- [ ] Transferencia internacional a Brasil: concepto legal y cláusulas modelo de la SIC (Brasil aún no está en la lista de la SIC)
- [ ] Plazo de reporte de incidentes y plazos de retención (SARLAFT y registros)
- [ ] Frecuencia de la prueba de penetración
- [ ] Requisitos oficiales de autenticación de clientes en canales digitales
- [ ] Registro de bases de datos ante la SIC
- [ ] Elegir el marco de gestión de seguridad (ISO 27032, NIST, CIS o COBIT 5)
- [ ] Elegir la herramienta de correlación de eventos (Módulo 10)

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario) a [8](./arquitectura-en-aws.md#glosario).

| Sigla o término | Significado |
|---|---|
| STRIDE | Método de amenazas: suplantación, alteración, repudio, divulgación, denegación de servicio y elevación de privilegios |
| OWASP | Organización que publica guías de seguridad; su API Security Top 10 lista los diez riesgos más comunes de las APIs |
| Frontera de confianza | Línea entre partes que se confían distinto; donde hay que verificar identidad y permisos |
| Autorización por objeto | Comprobar que el recurso pedido pertenece a quien lo pide |
| Confirmación adicional (*step-up*) | Pedir otro factor al hacer una operación sensible |
| Mínimo privilegio | Dar a cada persona o sistema solo los permisos que necesita |
| MFA | Multi-Factor Authentication: más de un factor para entrar |
| SIEM | Security Information and Event Management: herramienta que correlaciona eventos de seguridad |
| SOC | Security Operations Center: unidad que monitorea y defiende los sistemas |
| CISO | Chief Information Security Officer: responsable de la seguridad de la información |
| COLCERT | Grupo nacional de respuesta a emergencias cibernéticas de Colombia |
| TLP | Traffic Light Protocol: etiquetas de color que indican con quién se puede compartir un reporte |
| Responsabilidad compartida | AWS protege la infraestructura; el cliente protege lo que pone encima |
| Cifrado por campo | Cifrar un dato dentro de la aplicación, además del cifrado de la base |
