import React, {useEffect, useRef, useState} from 'react';
import {PASOS, ESTADOS} from './pasos';
import styles from './styles.module.css';

function Lista({items}) {
  return (
    <ul>
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

function colorDe(paso) {
  return {'--c': `var(--mg-${paso.c})`};
}

export default function MapaGeneral() {
  const [actual, setActual] = useState(0);
  const panelRef = useRef(null);
  const paso = PASOS[actual];

  // Si la dirección trae #paso3, abre ese paso.
  useEffect(() => {
    const m = /^#paso([1-8])$/.exec(window.location.hash);
    if (m) setActual(Number(m[1]) - 1);
  }, []);

  function elegir(i, subir) {
    setActual(i);
    window.history.replaceState(null, '', `#paso${i + 1}`);
    if (subir && panelRef.current) {
      const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      panelRef.current.scrollIntoView({behavior: reducir ? 'auto' : 'smooth', block: 'start'});
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <ol className={styles.list} aria-label="La secuencia del diseño">
          {PASOS.map((p, i) => (
            <li className={styles.item} key={p.n}>
              <button
                type="button"
                className={styles.stepBtn}
                style={colorDe(p)}
                aria-current={i === actual ? 'step' : undefined}
                onClick={() => elegir(i, false)}>
                <span className={styles.num}>{p.n}</span>
                <span className={styles.stepText}>
                  <span className={styles.stepTitle}>{p.t}</span>
                  <span className={styles.short}>{p.nav}</span>
                  <span className={`${styles.badge} ${styles[p.st]}`}>
                    {ESTADOS[p.st]}
                    {p.aqui ? ' · estás aquí' : ''}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>

        <section
          className={styles.panel}
          style={colorDe(paso)}
          ref={panelRef}
          aria-live="polite"
          aria-label={`Detalle del paso ${paso.n}`}>
          <div className={styles.head}>
            <span className={styles.num}>{paso.n}</span>
            <div>
              <h3>{paso.t}</h3>
              <p className={styles.question}>{paso.q}</p>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.blk}>
              <h4>Qué es</h4>
              <p>{paso.que}</p>
            </div>
            <div className={styles.blk}>
              <h4>Qué se hace</h4>
              <Lista items={paso.hace} />
            </div>
            <div className={`${styles.blk} ${styles.wide}`}>
              <div className={styles.callout}>
                <h4>En Kuenta</h4>
                <Lista items={paso.kuenta} />
              </div>
            </div>
            {paso.mods && (
              <div className={`${styles.blk} ${styles.wide}`}>
                <h4>Módulos del curso</h4>
                <div className={styles.mods}>
                  {paso.mods.map(([titulo, texto]) => (
                    <div className={styles.mod} key={titulo}>
                      <b>{titulo}</b>
                      <p>{texto}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className={`${styles.blk} ${styles.wide}`}>
              <h4>Conceptos clave</h4>
              <div className={styles.tags}>
                {paso.conceptos.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
            <div className={styles.blk}>
              <h4>Entregable</h4>
              <p>{paso.entregable}</p>
            </div>
            <div className={styles.blk}>
              <h4>Error común</h4>
              <p>{paso.error}</p>
            </div>
            <div className={`${styles.blk} ${styles.wide}`}>
              <h4>Pregunta típica de entrevista</h4>
              <p>«{paso.entrevista}»</p>
            </div>
          </div>

          <div className={styles.nav}>
            <button
              type="button"
              className="button button--secondary"
              disabled={actual === 0}
              onClick={() => elegir(actual - 1, true)}>
              ← Paso anterior
            </button>
            <button
              type="button"
              className="button button--secondary"
              disabled={actual === PASOS.length - 1}
              onClick={() => elegir(actual + 1, true)}>
              Paso siguiente →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
