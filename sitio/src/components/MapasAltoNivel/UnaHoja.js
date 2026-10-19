import React from 'react';
import {ETAPAS, TRANSVERSAL} from './etapas';
import s from './unaHoja.module.css';

// Mapa en una hoja: serpentina 1 2 3 / 6 5 4; la evolución vuelve de 6 a 1.
export default function UnaHoja() {
  return (
    <div className={s.root}>
      <div className={s.grid}>
        {ETAPAS.map((e) => (
          <section key={e.n} className={`${s.card} ${s['k' + e.n]}`} style={{'--c': `var(--mh-c${e.n})`}}>
            <header className={s.hd}>
              <span className={s.ic} aria-hidden="true">{e.icono}</span>
              <div>
                <h3 className={s.h}><span className={s.n}>{e.n}</span> {e.titulo}</h3>
                <div className={s.mod}>{e.sub ? `${e.sub} · ` : ''}{e.modulos}</div>
              </div>
            </header>
            {e.items && (
              <ul className={s.items}>
                {e.items.map(([i, t]) => (
                  <li key={t}><span aria-hidden="true">{i}</span>{t}</li>
                ))}
              </ul>
            )}
            {e.engranes && (
              <div className={s.gears}>
                {e.engranes.map(([t, d]) => (
                  <div key={t}><b aria-hidden="true">⚙️</b>{t}<small>{d}</small></div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
      <div className={s.cost}>
        <h3><span aria-hidden="true">{TRANSVERSAL.icono}</span> {TRANSVERSAL.titulo}</h3>
        {TRANSVERSAL.items.map((x) => <span key={x}>{x}</span>)}
        <em>{TRANSVERSAL.nota} ({TRANSVERSAL.modulos})</em>
      </div>
    </div>
  );
}
