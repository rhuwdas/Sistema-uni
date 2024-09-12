import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import  Nav  from "./components/nav.jsx";
import {Inst, Inst_tec} from './screens/Institutos tec.jsx';
import {Uni_priv, Univer_P} from './screens/Privadas.jsx';
import { Normales } from "./screens/Normales.jsx";
import { Univer_N } from "./screens/Univer_N.jsx";
import {Suneo, Univer_S} from "./screens/SUNEO.jsx";
import {Other, Univer_O} from "./screens/otros.jsx";
import Test from "./components/Test.jsx";



import './index.css'
import './assets/App.css'
import './assets/nav.css'
function App() {
  return (
    <Router>
      <Nav/>
              <main>

              <Routes>
                <Route path="/" element={<Info/>} />
                  <Route path="/TecNM" element={<Inst/>} />
                <Route path="/TecnNM/:UNAME" element={<Inst_tec/>} />
                <Route path="/privadas" element={<Uni_priv/>} />
                <Route path="/Privadas/:UNAME" element={<Univer_P/>} />
                <Route path="/Suneo" element={<Suneo/>} />
                <Route path="/Suneo/:UNAME" element={<Univer_S/>} />
                <Route path="/Normales" element={<Normales/>} />
                <Route path="/Normales/:UNAME" element={<Univer_N/>} />
                <Route path="/otros" element={<Other/>} />
                <Route path="/otros/:UNAME" element={<Univer_O/>} />
                <Route path="/test" element={<Test/>}/>
              </Routes>
              </main>
            </Router>
    

  );
}
function Info() {
  const Uni = [
    {
      key: 1,
      sistema: 'TecNM',
      web: "https://www.tecnm.mx/",
      link: "/TecNM",
      descripcion: "El Sistema Tecnológico Nacional de México (TecNM) es una de las redes de educación superior más grandes y reconocidas en México. El TecNM cuenta con una extensa red de campus distribuidos en todo el territorio nacional, que van desde licenciaturas hasta posgrados."
    },
    {
      key: 2,
      sistema: 'Suneo',
      web: "https://www.suneo.mx/web/",
      link: "/Suneo",
      descripcion: "El Sistema de Universidades Estatales de Oaxaca (SUNEO) es una red de universidades públicas en Oaxaca, enfocada en ofrecer educación de alta calidad en áreas estratégicas para el desarrollo regional. Con un fuerte énfasis en la investigación, innovación y vinculación comunitaria."
    },
    {
      key: 3,
      sistema: 'Normales y pedagogicas',
      web: "https://upn201oaxaca.edu.mx/wp/",
      link: "/Normales",
      descripcion: "La UPN se especializa en la educación superior de maestros y especialistas, mientras que las Normales preparan a maestros para niveles básicos, como preescolar y primaria. Ambas son fundamentales para el desarrollo educativo del país."
    },
    {
      key: 4,
      sistema: 'Privadas',
      web: "",
      link: "/privadas",
      descripcion: "Las universidades privadas ofrecen una amplia gama de programas académicos y recursos para estudiantes que buscan una educación personalizada y enfocada en áreas específicas del conocimiento."
    }
  ];

  return (
    <>
      <section className="container-bienvenido">
        <h1>Bienvenido a la Guía de Universidades</h1>
        <p>
          Esta página está diseñada para ayudarte a explorar las diferentes opciones de educación superior disponibles en nuestra región.
          Podrás encontrar información detallada sobre institutos tecnológicos, universidades privadas, y otros centros educativos destacados.
          Ya sea que estés buscando una licenciatura, una ingeniería, o estudios de posgrado, aquí podrás descubrir la institución que mejor
          se adapte a tus intereses y objetivos profesionales.<br />
        </p>
        <p>
          Navega por las secciones dedicadas para cada tipo de institución y conoce más sobre las carreras que ofrecen, los contactos disponibles,
          y los recursos que pueden ayudarte a tomar la mejor decisión para tu futuro académico.
        </p> <br />
        <p>consulta un Test</p>
            <Link to="/test">test</Link>
            
      </section>
      
      {Uni.map((i) => (
        <article key={i.key}>
          <img src={`/src/img/${i.sistema}.png`} alt={`logo sistema ${i.sistema}`} />
          <div className="info-text">
            <h3>{i.sistema}</h3>
            <p>{i.descripcion}</p>
            {i.web ? <a target="_blank" href={i.web}><i className="bi bi-browser-chrome"></i></a> : ''}
            <Link className="U_Oax" to={i.link}>Ver universidades</Link>
          </div>
          <div>
            
            
          </div>
        </article>
        
      ))}
    </>
  )
}


export default App;
