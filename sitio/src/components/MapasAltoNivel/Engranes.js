import React from 'react';
import {ETAPAS, TRANSVERSAL} from './etapas';
import s from './engranes.module.css';

// Engrane dibujado con código: r = radio, t = número de dientes.
function Gear({r, t, color, reverse, fast}) {
  const size = r * 2 + 8, c = size / 2, ri = r * 0.78;
  const pt = (rad, ang) => `${(c + rad * Math.cos(ang)).toFixed(1)},${(c + rad * Math.sin(ang)).toFixed(1)}`;
  let d = '';
  for (let i = 0; i < t; i++) {
    const a = (i * 2 * Math.PI) / t, w = (Math.PI / t) * 0.5;
    d += `${i ? 'L' : 'M'}${pt(ri, a - w)}L${pt(r, a - w * 0.6)}L${pt(r, a + w * 0.6)}L${pt(ri, a + w)}`;
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <g className={`${s.spin} ${reverse ? s.rev : ''} ${fast ? s.fast : ''}`}>
        <path d={d + 'Z'} fill={color} />
        <circle cx={c} cy={c} r={r * 0.3} fill="var(--ifm-background-surface-color)" />
      </g>
    </svg>
  );
}

const Flecha = () => (
  <svg width="22" height="30" viewBox="0 0 22 30" aria-hidden="true">
    <path d="M11 0V22M3 15l8 10 8-10" fill="none" stroke="var(--mg-gear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Mapa de engranes: recorrido vertical; el bucle punteado devuelve la evolución al negocio.
export default function Engranes() {
  return (
    <div className={s.root}>
      <div className={s.flow}>
        <div className={s.loop}><span>Evolución: vuelve al negocio</span></div>
        {ETAPAS.map((e, i) => (
          <React.Fragment key={e.n}>
            <section className={s.stage} style={{'--c': `var(--mg-c${e.n})`}}>
              <div className={s.top}>
                <span className={s.n}>{e.n}</span>
                <h3 className={s.h}>{e.titulo}{e.sub ? `: ${e.sub.toLowerCase()}` : ''}</h3>
                <span className={s.mod}>{e.modulos}</span>
              </div>
              <p className={s.p}>{e.parrafo}</p>
              {e.engranes && (
                <>
                  <div className={s.gears}>
                    <Gear r={30} t={12} color="var(--mg-c1)" />
                    <Gear r={38} t={14} color="var(--mg-c3)" reverse />
                    <Gear r={30} t={12} color="var(--mg-c4)" />
                    <Gear r={26} t={10} color="var(--mg-c5)" reverse />
                  </div>
                  <div className={s.gl}>{e.engranes.map(([t]) => <span key={t}>{t}</span>)}</div>
                </>
              )}
              <div className={s.chips}>
                {(e.items ? e.items.map(([ic, t]) => `${ic} ${t}`) : e.engranes.map(([t, d]) => `${t}: ${d}`)).map((x) => (
                  <span key={x} className={s.chip}>{x}</span>
                ))}
              </div>
              <div className={s.out}><b>Entrega:</b> {e.entrega}</div>
            </section>
            {e.enlace && (
              <div className={s.link}>
                <Gear r={14} t={8} color="var(--mg-gear)" reverse={i % 2 === 1} fast />
                <Flecha />
                <em>{e.enlace}</em>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={s.cross}>
        <b>{TRANSVERSAL.titulo}</b> ({TRANSVERSAL.modulos}: {TRANSVERSAL.items.join(', ')}). {TRANSVERSAL.nota}
      </div>
    </div>
  );
}
