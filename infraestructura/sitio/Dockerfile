# Imagen del sitio Docusaurus de Kuenta: se construye en GitHub Actions, no en el VPS.
# Contexto: la raíz del repositorio.
#   docker build -f infraestructura/sitio/Dockerfile -t kuenta-sitio .

# Etapa 1: construir el sitio estático (misma imagen que se usa en desarrollo)
FROM node:24 AS construir
WORKDIR /work
COPY sitio/package.json sitio/package-lock.json sitio/
RUN cd sitio && npm ci
COPY docs docs
# Las páginas incrustan imágenes de diagramas/ (rutas ../../diagramas/...)
COPY diagramas diagramas
COPY sitio sitio
RUN cd sitio && npm run build

# Etapa 2: servir solo los archivos estáticos con el mismo nginx que usa el gateway
FROM nginx:1.30-alpine
COPY infraestructura/sitio/nginx.conf /etc/nginx/nginx.conf
COPY --from=construir /work/sitio/build /usr/share/nginx/html
EXPOSE 80
