import { Link } from "react-router-dom";

function SetData({ data, uni, mail, tel }) { // Usa destructuración de props
    return (
        <section className='cont_ins'>
            {
            data.map((i) => (
                <article className='institulo' key={i.id}>
                    <Link to={`/${uni}/${i.Nombre}`}>
                        <img src={i.LOGO.url} alt={`${i.Nombre} logo`} />
                    </Link>
                    <h3>{i.Nombre}</h3>
                    <div className="icons">
                        {i.contacto.sitio_web === "" ? '' :<a href={i.contacto.sitio_web} target="_blank"><i className="bi bi-browser-chrome"></i></a>}
                        {i.contacto.telefono === "" ? "": <a href={tel + i.contacto.telefono} target="_blank"><i className="bi bi-telephone"></i></a>}  
                            
                        {i.contacto.email === "" ?"": <a href={mail + i.contacto.email} target="_blank"><i className="bi bi-envelope-at-fill"></i></a>}
                    </div>
                </article>
            ))}
        </section>
    );
}

export default SetData;
