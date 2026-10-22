---
sidebar_position: 15
title: "Módulo 15 · Publicación y exposición"
---

# Módulo 15 · Publicación y exposición

**Entregable:** el sitio publicado en el VPS del autor y el guion de entrevista. Tres páginas del sitio, los archivos de despliegue en `infraestructura/sitio/`, un flujo de trabajo de GitHub Actions y las licencias del repositorio.

Con la arquitectura completa, el último módulo la **publica y prepara su exposición**: cómo llega el sitio a internet de forma segura y cómo se cuenta el proyecto en una entrevista.

## Qué se hizo

1. Se revisó el VPS del autor (solo lectura): el gateway de `sitiosapps`, la red `sitiosapps-edge` y el patrón de un vhost por proyecto.
2. Se diseñó la publicación: imagen estática construida en GitHub Actions, publicada en GHCR y servida detrás del gateway (decisiones A, B y C).
3. Se escribieron el guion de entrevista y el banco de preguntas, con una pregunta por módulo (decisión D).
4. Se cerró el repositorio: licencias, README y verificación de que no hay secretos (decisión E).

## Dónde está el entregable

| Documento | Contenido |
|---|---|
| [Publicación del sitio](../publicacion-y-exposicion/publicacion-del-sitio.md) | Arquitectura de publicación, endurecimiento, primera publicación, actualización y vuelta atrás |
| [Guion de entrevista](../publicacion-y-exposicion/guion-de-entrevista.md) | Presentación de 2 minutos, recorrido de 10, cifras e historias |
| [Banco de preguntas](../publicacion-y-exposicion/banco-de-preguntas.md) | Una pregunta típica por módulo, con respuesta modelo |
| `infraestructura/sitio/` | Dockerfile, nginx, compose del VPS y vhost del gateway |
| `.github/workflows/publicar-sitio.yml` | Construye y publica la imagen |
| `LICENSE` y `LICENSE-CONTENIDO.md` | MIT para el código y CC BY 4.0 para el contenido |

## Decisiones de este módulo

| Decisión | Resultado | Motivo |
|---|---|---|
| A. Dónde corre | `kuenta.sitiosapps.com`, imagen de dos etapas, red `sitiosapps-edge`, vhost propio en el gateway | Convención del VPS: un subdominio y un vhost por proyecto |
| B. Cómo se publica | GitHub Actions publica en GHCR; en el VPS, `docker compose pull && up -d` a mano | Sin llaves SSH en GitHub por ahora |
| C. Endurecimiento | Solo lectura, sin capacidades extra, sin puertos, logs limitados | Mismo estándar que el gateway |
| D. Entrevista | Guion de 2 y 10 minutos y una pregunta por módulo | Exponer el proyecto con respaldo en el sitio |
| E. Cierre | Licencia MIT para el código y CC BY 4.0 para el contenido; README final | El repositorio es público |

## Estado

- [x] Archivos de despliegue y flujo de trabajo
- [x] Guion de entrevista y banco de preguntas
- [x] Licencias
- [ ] Probar `docker build` en local y el arranque en solo lectura
- [ ] Crear el DNS y el certificado de origen de `kuenta.sitiosapps.com` en Cloudflare
- [ ] Publicar la imagen y hacer pública la visibilidad del paquete en GHCR
- [ ] Agregar `kuenta.conf` al gateway y recargar
- [ ] Decidir si se automatiza el paso del VPS (llave SSH en GitHub)
- [ ] Fijar las acciones del flujo de trabajo por huella de commit

## Glosario

Términos nuevos de este módulo. Los demás están en los glosarios de los módulos [0](./entorno-y-herramientas.md#glosario) a [14](./gobierno-y-evolucion.md#glosario).

| Sigla o término | Significado |
|---|---|
| GHCR | GitHub Container Registry: almacén de imágenes de contenedor de GitHub |
| Gateway | Contenedor único que recibe el tráfico externo y lo enruta a cada proyecto |
| Vhost | Configuración de nginx para un nombre de sitio |
| mTLS | TLS mutuo: cliente y servidor se identifican con certificado |
| Imagen estática | Imagen de contenedor que solo sirve archivos ya construidos |
