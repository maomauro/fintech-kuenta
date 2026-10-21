/**
 * Botón «Ampliar» para los diagramas Mermaid del sitio.
 *
 * Añade un botón a cada diagrama ya dibujado. Al pulsarlo se abre una vista a
 * pantalla completa con zoom (botones, rueda, pellizco o teclas + y -) y
 * arrastre para moverse. Esc o ✕ la cierran.
 *
 * Es un módulo de cliente de Docusaurus: se registra en `clientModules` de
 * docusaurus.config.js. No depende de ninguna librería.
 */

const CONTENEDOR = '.docusaurus-mermaid-container';
const MARCA = 'data-ampliable';

let observador = null;
let cierreActual = null;

function crearBoton(texto, etiqueta, clase) {
  const b = document.createElement('button');
  b.type = 'button';
  b.textContent = texto;
  b.setAttribute('aria-label', etiqueta);
  b.title = etiqueta;
  b.className = clase;
  return b;
}

function medidas(svg) {
  const vb = svg.viewBox && svg.viewBox.baseVal;
  if (vb && vb.width && vb.height) {
    return {w: vb.width, h: vb.height};
  }
  const r = svg.getBoundingClientRect();
  return {w: r.width || 800, h: r.height || 600};
}

function abrir(svgOriginal, disparador) {
  if (cierreActual) {
    cierreActual();
  }
  const {w, h} = medidas(svgOriginal);

  const capa = document.createElement('div');
  capa.className = 'mermaid-ampliado';
  capa.setAttribute('role', 'dialog');
  capa.setAttribute('aria-modal', 'true');
  capa.setAttribute('aria-label', 'Diagrama ampliado');

  const barra = document.createElement('div');
  barra.className = 'mermaid-ampliado__barra';
  const menos = crearBoton('−', 'Alejar', 'mermaid-ampliado__btn');
  const nivel = crearBoton('100 %', 'Ajustar a la pantalla', 'mermaid-ampliado__btn mermaid-ampliado__nivel');
  const mas = crearBoton('+', 'Acercar', 'mermaid-ampliado__btn');
  const uno = crearBoton('1:1', 'Tamaño real', 'mermaid-ampliado__btn');
  const cerrar = crearBoton('✕', 'Cerrar (Esc)', 'mermaid-ampliado__btn mermaid-ampliado__cerrar');
  barra.append(menos, nivel, mas, uno, cerrar);

  const lienzo = document.createElement('div');
  lienzo.className = 'mermaid-ampliado__lienzo';
  const pieza = document.createElement('div');
  pieza.className = 'mermaid-ampliado__pieza';

  const copia = svgOriginal.cloneNode(true);
  copia.removeAttribute('style');
  copia.setAttribute('width', String(w));
  copia.setAttribute('height', String(h));
  copia.style.maxWidth = 'none';
  copia.style.display = 'block';
  pieza.appendChild(copia);
  lienzo.appendChild(pieza);
  capa.append(barra, lienzo);
  document.body.appendChild(capa);
  const overflowPrevio = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  let escala = 1;
  let x = 0;
  let y = 0;

  function aplicar() {
    pieza.style.transform = `translate(${x}px, ${y}px) scale(${escala})`;
    nivel.textContent = `${Math.round(escala * 100)} %`;
  }

  function ajustar() {
    const r = lienzo.getBoundingClientRect();
    escala = Math.min(r.width / w, r.height / h) * 0.96;
    x = (r.width - w * escala) / 2;
    y = (r.height - h * escala) / 2;
    aplicar();
  }

  // Zoom alrededor de un punto (coordenadas relativas al lienzo).
  function zoom(factor, cx, cy) {
    const nueva = Math.min(8, Math.max(0.1, escala * factor));
    const k = nueva / escala;
    x = cx - (cx - x) * k;
    y = cy - (cy - y) * k;
    escala = nueva;
    aplicar();
  }

  function centro() {
    const r = lienzo.getBoundingClientRect();
    return [r.width / 2, r.height / 2];
  }

  function tamanoReal() {
    const r = lienzo.getBoundingClientRect();
    escala = 1;
    x = (r.width - w) / 2;
    y = Math.max(16, (r.height - h) / 2);
    aplicar();
  }

  menos.addEventListener('click', () => zoom(1 / 1.25, ...centro()));
  mas.addEventListener('click', () => zoom(1.25, ...centro()));
  nivel.addEventListener('click', ajustar);
  uno.addEventListener('click', tamanoReal);

  lienzo.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      const r = lienzo.getBoundingClientRect();
      zoom(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX - r.left, e.clientY - r.top);
    },
    {passive: false},
  );

  // Arrastre con uno o dos punteros (el segundo hace pellizco).
  const punteros = new Map();
  let distanciaPrevia = 0;
  lienzo.addEventListener('pointerdown', (e) => {
    lienzo.setPointerCapture(e.pointerId);
    punteros.set(e.pointerId, {x: e.clientX, y: e.clientY});
    lienzo.classList.add('mermaid-ampliado__lienzo--arrastrando');
    if (punteros.size === 2) {
      const [a, b] = [...punteros.values()];
      distanciaPrevia = Math.hypot(a.x - b.x, a.y - b.y);
    }
  });
  lienzo.addEventListener('pointermove', (e) => {
    if (!punteros.has(e.pointerId)) return;
    const previo = punteros.get(e.pointerId);
    punteros.set(e.pointerId, {x: e.clientX, y: e.clientY});
    if (punteros.size === 1) {
      x += e.clientX - previo.x;
      y += e.clientY - previo.y;
      aplicar();
    } else if (punteros.size === 2) {
      const [a, b] = [...punteros.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const r = lienzo.getBoundingClientRect();
      if (distanciaPrevia) {
        zoom(d / distanciaPrevia, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
      }
      distanciaPrevia = d;
    }
  });
  const soltar = (e) => {
    punteros.delete(e.pointerId);
    distanciaPrevia = 0;
    if (punteros.size === 0) {
      lienzo.classList.remove('mermaid-ampliado__lienzo--arrastrando');
    }
  };
  lienzo.addEventListener('pointerup', soltar);
  lienzo.addEventListener('pointercancel', soltar);

  function alTeclear(e) {
    if (e.key === 'Escape') {
      cierre();
    } else if (e.key === '+' || e.key === '=') {
      zoom(1.25, ...centro());
    } else if (e.key === '-' || e.key === '_') {
      zoom(1 / 1.25, ...centro());
    } else if (e.key === '0') {
      ajustar();
    }
  }
  function alRedimensionar() {
    ajustar();
  }

  function cierre() {
    document.removeEventListener('keydown', alTeclear);
    window.removeEventListener('resize', alRedimensionar);
    capa.remove();
    document.body.style.overflow = overflowPrevio;
    cierreActual = null;
    if (disparador && document.contains(disparador)) {
      disparador.focus();
    }
  }
  cerrar.addEventListener('click', cierre);
  document.addEventListener('keydown', alTeclear);
  window.addEventListener('resize', alRedimensionar);
  cierreActual = cierre;

  ajustar();
  cerrar.focus();
}

function preparar() {
  document.querySelectorAll(CONTENEDOR).forEach((cont) => {
    if (cont.hasAttribute(MARCA)) return;
    const svg = cont.querySelector('svg');
    if (!svg) return; // Mermaid aún no lo dibujó: el observador volverá a llamar.
    cont.setAttribute(MARCA, 'true');
    const boton = crearBoton('⤢ Ampliar', 'Ampliar el diagrama', 'mermaid-ampliar');
    boton.addEventListener('click', () => {
      const actual = cont.querySelector('svg');
      if (actual) abrir(actual, boton);
    });
    cont.appendChild(boton);
  });
}

function iniciar() {
  if (typeof document === 'undefined') return;
  preparar();
  if (!observador) {
    observador = new MutationObserver(preparar);
    observador.observe(document.body, {childList: true, subtree: true});
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
}

// Docusaurus llama a este gancho en cada cambio de ruta.
export function onRouteDidUpdate() {
  iniciar();
  if (cierreActual) {
    cierreActual();
  }
}
