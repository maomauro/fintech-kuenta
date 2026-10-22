---
sidebar_position: 3
title: Matriz de riesgos
---

# Matriz de riesgos

Decisión D del Módulo 13. Reúne los riesgos y pendientes de verificación de todo el curso. La **puntuación** es probabilidad por impacto, cada una de 1 a 5. Un riesgo es **alto** con 15 o más, **medio** de 8 a 14 y **bajo** con menos de 8.

| ID | Riesgo | Prob. | Impacto | Puntos | Nivel | Respuesta | Origen |
|---|---|---:|---:|---:|---|---|---|
| R-01 | Disponibilidad compuesta de AWS (99,88 %) menor que el SLO de 99,95 % | 4 | 4 | 16 | Alto | Medir la disponibilidad real; si no alcanza, agregar tareas o rediseñar el borde | Módulo 10 |
| R-02 | Brasil aún no figura en la lista de países adecuados de la SIC; datos de clientes en São Paulo | 3 | 5 | 15 | Alto | Cláusulas modelo de la SIC y asesoría jurídica antes de operar; evaluar otra región | Módulo 9 |
| R-06 | Anexos y obligatoriedad de Bre-B sin verificar | 3 | 4 | 12 | Medio | Confirmar los anexos de la circular y los plazos con el regulador | Módulo 7 |
| R-07 | Acceso y costo de la Registraduría sin confirmar | 3 | 4 | 12 | Medio | Confirmar convenio y tarifa; plan alterno de validación de identidad | Módulo 2 |
| R-13 | Plazos de retención, formato de reportes UIAF y SFC y plazo de aviso de incidentes sin confirmar | 3 | 4 | 12 | Medio | Confirmar con las circulares oficiales y con cumplimiento | Módulos 2 y 9 |
| R-08 | RPO de 15 min y RTO de 4 h podrían ser insuficientes ante el regulador | 2 | 5 | 10 | Medio | Pasar a región en espera y actualizar el ADR-007 | Módulo 10 |
| R-03 | La CE 004 de 2026 de la SFC podría haber renumerado reglas citadas | 3 | 3 | 9 | Medio | Revisar la normativa vigente contra la matriz de cumplimiento | Módulo 9 |
| R-11 | El monolito se acopla con el tiempo y se pierde la opción de extraer módulos | 3 | 3 | 9 | Medio | Verificación de módulos con Spring Modulith en cada pull request | Módulo 5 |
| R-09 | Los supuestos de volumen del costo están lejos de la realidad | 4 | 2 | 8 | Medio | Reemplazar con mediciones a los 3 meses; revisión mensual | Módulo 12 |
| R-10 | Dependencia de un solo proveedor de nube (AWS) | 2 | 4 | 8 | Medio | Infraestructura como código y datos exportables; plan de salida documentado | Módulo 8 |
| R-04 | El tiempo de espera de API Gateway (cerca de 29 s, sin verificar) no alcanza para algún flujo | 2 | 3 | 6 | Bajo | Verificar en la documentación; usar flujos asíncronos si hace falta | Módulo 8 |
| R-05 | Blue/green integrado de ECS podría no soportar Fargate | 2 | 3 | 6 | Bajo | Confirmar en la guía de ECS; alternativa con CodeDeploy | Módulo 11 |
| R-12 | Spring Boot 4 y Modulith 2 son recientes; versión mínima de Java sin confirmar | 2 | 2 | 4 | Bajo | Confirmar la matriz de compatibilidad antes de empezar a construir | Módulo 13 |

## Reglas

- **Responsable:** el autor, hasta que exista un equipo. Cada riesgo cambia de responsable cuando se asigna un módulo a un equipo.
- **Revisión:** trimestral y siempre que cambie la normativa o la arquitectura.
- **Aceptar un riesgo** es una decisión escrita: se registra como ADR (por ejemplo, el [ADR-007](../adr/adr-007-recuperacion-regional.md) acepta el RTO de 4 horas).
- Los riesgos altos se atienden antes de pasar a producción.
- Los riesgos de amenazas de seguridad (T-01 a T-16) siguen en el [modelo de amenazas](../seguridad-y-cumplimiento/modelo-de-amenazas.md); aquí solo entran los que afectan decisiones de arquitectura.
