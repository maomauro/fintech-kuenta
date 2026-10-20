#!/usr/bin/env bash
# Exporta las vistas del modelo C4 a Mermaid y traduce las etiquetas al español.
# Resultado: modelos/structurizr/salida/*.mmd (no se versiona; se pega en docs/arquitectura-aplicacion/).
# Uso (Git Bash en Windows, con Docker Desktop encendido):  ./exportar.sh
set -euo pipefail
cd "$(dirname "$0")"
rm -rf salida && mkdir salida

# Imagen actual de Structurizr. Si el comando "export" no existiera en tu versión,
# usa la imagen del CLI antiguo: structurizr/cli (ver docs/arquitectura-aplicacion/diagramas-c4.md).
MSYS_NO_PATHCONV=1 docker run --rm -v "$PWD:/usr/local/structurizr" structurizr/structurizr \
  export -workspace kuenta.dsl -format mermaid -output salida

sed -i \
  -e 's/\[Person\]/[Persona]/g' \
  -e 's/\[Software System\]/[Sistema de software]/g' \
  -e 's/\[Container: /[Contenedor: /g' \
  -e 's/\[Component: Módulo\]/[Módulo]/g' \
  salida/*.mmd

# En Mermaid, el punto y coma separa instrucciones: en las secuencias se cambia por coma.
sed -i '/^sequenceDiagram/,$ s/;/,/g' salida/*.mmd
echo "Listo: $(ls salida | wc -l) diagramas en modelos/structurizr/salida/"
