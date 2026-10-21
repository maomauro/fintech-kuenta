---
sidebar_position: 2
title: Pipeline y despliegue
---

# Pipeline y despliegue

Decisiones B y C del Módulo 11. El pipeline se describe **sin atarse a un lenguaje**: el lenguaje y los marcos del monolito aún no están decididos (ADR del [Módulo 13](../modulos/entrega-ci-cd-e-iac.md)).

## B. Pipeline

### B1. Puertas de calidad

| Etapa | Qué comprueba | Bloquea si |
|---|---|---|
| Compilar y pruebas | Compilación, pruebas unitarias y de integración (los criterios de aceptación de la historia son pruebas automatizadas) | Falla alguna |
| Análisis de código (SAST) | Defectos de seguridad en el código | Hallazgo crítico |
| Dependencias (SCA) | Vulnerabilidades en librerías | Vulnerabilidad crítica en un paquete nuevo |
| Secretos | Claves o credenciales dentro del código | Cualquier secreto |
| Contratos de API | Los [contratos OpenAPI](../integracion-y-apis/contratos.md) son válidos y no rompen la versión | El cambio rompe a quien integra |
| Infraestructura | `plan` de la infraestructura como código y verificaciones estáticas | Cambio no esperado o inseguro |
| Imagen | Escaneo en ECR; el [escaneo mejorado](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html) (con Inspector) cubre el sistema operativo y los paquetes del lenguaje, y es continuo | Vulnerabilidad crítica |
| Pruebas de humo y de contrato (en pruebas) | Que lo desplegado responde y cumple los contratos | Falla alguna |
| Aprobación | Revisión humana distinta de quien escribió el cambio | No aprobado |

Una vulnerabilidad crítica ya conocida en producción no frena todos los cambios: se corrige en 7 días como máximo (RNF-01).

### B2. Autenticación del pipeline en AWS

- GitHub Actions entra a AWS con **OpenID Connect**, sin llaves guardadas: recibe credenciales temporales de un rol ([doc](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws)).
- Un rol por entorno. Su política de confianza exige al menos una condición sobre el campo `sub` (repositorio y entorno), para que repositorios ajenos no puedan pedir credenciales.
- El flujo pide solo el permiso `id-token: write` y los roles tienen mínimo privilegio.
- Esto cierra la amenaza T-14 del [modelo de amenazas](../seguridad-y-cumplimiento/modelo-de-amenazas.md).

### B3. Evidencia automática

La Definition of Done de nivel 2 ([Módulo 3](../agil/marco-de-trabajo.md)) pide trazabilidad completa: requisito, historia, commit, prueba y despliegue. Con cada despliegue el pipeline guarda un registro con:

| Dato | Para qué |
|---|---|
| Identificador de historia y de requisito (en el título del PR y en el commit) | Enlazar el cambio con la necesidad y con la norma |
| Commit, autor y revisores del PR | Quién escribió y quién revisó |
| Resultados de pruebas y de escaneos | Con qué pruebas |
| Huella de la imagen y entorno | Qué se desplegó y dónde |
| Aprobador y hora | Quién lo aprobó |

El registro se conserva en un almacén de evidencias que nadie puede alterar, con retención como parámetro (el plazo legal está pendiente, ver [parámetros](../resiliencia-y-operacion/parametros.md)). Responde la pregunta de un auditor: *qué se desplegó, quién lo aprobó y con qué pruebas*.

## C. Despliegue y migraciones

### C1. Blue/green en ECS

ECS tiene [despliegue blue/green integrado](https://aws.amazon.com/about-aws/whats-new/2025/07/amazon-ecs-built-in-blue-green-deployments/): se levanta la versión nueva (verde) junto a la vigente (azul), se valida con tráfico de prueba, se mueve el tráfico de producción y la azul sigue viva durante el tiempo de observación para poder volver sin caída ([doc](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-blue-green.html)).

| Elemento | Decisión |
|---|---|
| Recursos | Dos grupos de destino y un listener de pruebas en el balanceador interno ([doc](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/alb-resources-for-blue-green.html)) |
| Validación antes de mover tráfico | Ganchos que ejecutan las pruebas de humo |
| Tiempo de observación | 10 minutos (propuesta; la guía de AWS usa 5 como ejemplo) |
| Reversión | Automática si las alarmas de [observabilidad](../resiliencia-y-operacion/observabilidad-y-operacion.md) saltan durante la observación |

### C2. Migraciones de base de datos

Mientras dura el blue/green conviven dos versiones del código sobre la misma base de datos, así que las migraciones siguen el patrón **expandir y contraer**:

1. **Expandir:** agregar la columna o tabla nueva, compatible con la versión anterior.
2. **Desplegar** la versión nueva, que ya usa lo nuevo.
3. **Contraer:** en un despliegue posterior, retirar lo viejo.

Reglas: ninguna migración destructiva en el mismo despliegue que cambia el código; se ejecutan antes de mover el tráfico; antes de una migración grande se verifica el último instante restaurable ([Módulo 10](../resiliencia-y-operacion/plan-de-recuperacion.md)); y la reversión de datos es **corregir hacia adelante**, no deshacer (el libro mayor no se modifica, [Módulo 6](../datos-y-consistencia/libro-mayor.md)).

### C3. Banderas de funcionalidad

Se separa **desplegar** (poner código en producción) de **liberar** (activarlo para clientes). Una funcionalidad nueva sube apagada y se activa de forma gradual; apagarla es la reversión más rápida.
