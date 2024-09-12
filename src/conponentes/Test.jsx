import { useState, useEffect } from 'react';
import React from 'react';
import preguntas from '../data/form.json';
import "../assets/test.css";

function Test() {
  const [data, setData] = useState([]);
  const [habilidades, setHabilidades] = useState([
    { habilidad: "S.S", habilidadN: "Servicio Social Gestion", valor: 0 },
    { habilidad: "E.P", habilidadN: "Expresión Pública Gestion", valor: 0 },
    { habilidad: "V", habilidadN: "Verbal", valor: 0 },
    { habilidad: "A.P", habilidadN: "Artístico-Plástico Gestion", valor: 0 },
    { habilidad: "M.S", habilidadN: "Musical", valor: 0 },
    { habilidad: "O.G", habilidadN: "Organización y Gestion", valor: 0 },
    { habilidad: "C.T", habilidadN: "Científico-Técnico Gestion", valor: 0 },
    { habilidad: "C.L", habilidadN: "Cálculo Lógico", valor: 0 },
    { habilidad: "M.C", habilidadN: "Mecánico", valor: 0 },
    { habilidad: "A.L", habilidadN: "Actividades al Aire Libre", valor: 0 },
  ]);
  const [resultado, setResultado] = useState(false);

  useEffect(() => {
    setData(preguntas);
  }, []);

  const [selecciones, setSelecciones] = useState({});

  useEffect(() => {
    setData(preguntas);
  }, []);

  const manejarCambio = (preguntaId, habilidadNombre, valorRespuesta) => {
 
    if (selecciones[preguntaId] !== undefined) {
      const valorAnterior = selecciones[preguntaId];
      setHabilidades(prevHabilidades => 
        prevHabilidades.map(h =>
          h.habilidad === habilidadNombre ? { ...h, valor: h.valor - valorAnterior + valorRespuesta }: h
        )
      );
    } else {
      setHabilidades(prevHabilidades =>
        prevHabilidades.map(h =>
          h.habilidad === habilidadNombre ? { ...h, valor: h.valor + valorRespuesta }  : h
        )
      );
    }
    
    // Guardamos la nueva selección
    setSelecciones(prevSelecciones => ({
      ...prevSelecciones,
      [preguntaId]: valorRespuesta
    }));
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <h1>Test de Intereses - Herrera y Montes</h1>
        <p>Selecciona el nivel que más te representa con las bolas de colores:</p>
        <div className="instructions">
          <h2>Instrucciones</h2>
          <ul>
            <li><span className="dot dot-4"></span> 4.- Me gusta mucho</li>
            <li><span className="dot dot-3"></span> 3.- Me gusta algo o en parte</li>
            <li><span className="dot dot-2"></span> 2.- Me es indiferente</li>
            <li><span className="dot dot-1"></span> 1.- Me desagrada algo o en parte</li>
            <li><span className="dot dot-0"></span> 0.- Me desagrada mucho o totalmente</li>
          </ul>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="question">
            {data.map((item) => (
              <div key={item.id} className='form_dat'>
                <label htmlFor={`q${item.id}`}>{`${item.id}. ` + item.text}</label>
                <div className="options">
                  {[4, 3, 2, 1, 0].map((value) => (
                    <React.Fragment key={value}>
                      <input
                        type="radio"
                        id={`q${item.id}-${value}`}
                        name={`question${item.id}`}
                        value={value}
                        onChange={() => manejarCambio(item.id, item.habilidad, value)}
                      />
                      <label htmlFor={`q${item.id}-${value}`} className={`dot dot-${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            <button className="submit-btn" onClick={() => setResultado(true)}>Enviar Test</button>
          </div>
        </form>
      </div>
      {resultado && <Resultados habilidades={habilidades} />}
    </section>
  );
}
const Resultados = ({ habilidades }) => {
  const totalPreguntas = 24; // Aquí podrías hacer dinámico el número total de preguntas relacionadas con una habilidad

  return (
    <>
    <h3>Tu mayor habilidad es:</h3>
    <section className='Hola'>
  {habilidades.map((i) => (
    <div key={i.habilidad} className="card">
      {/* Aquí se usa un valor dinámico para el porcentaje y el color */}
      <div
        className="porcentajes"
        style={{
          "--porcentaje": `${i.valor}%`,
          "--color": i.valor > 50 ? "forestgreen" : "red"  // Cambia el color según el valor
        }}
      >
        <svg width="150" height="150">
          <circle r="65" cx="50%" cy="50%" pathLength="100" />
          <circle
            r="65"
            cx="50%"
            cy="50%"
            pathLength="100"
            style={{
              strokeDashoffset: 100 - i.valor,
              stroke: "var(--color)"
            }}
          />
        </svg>
        <span>{i.valor}%</span>
        <div className="text">
          {i.habilidadN}
        </div>
      </div>
    </div>
  ))}
</section>
</>

  );
};


export default Test;
