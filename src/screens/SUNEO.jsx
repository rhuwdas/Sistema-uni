import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import S_Suneo from '../data/Suneo.json';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SetData from "../components/setData"; 

function Suneo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(S_Suneo);
    }, []);

    const mail = "mailto:";
    const tel = "tel:";

    return (
        <SetData
            data={data}
            uni="Suneo"
            mail={mail}
            tel={tel}
        />
    );
}

function Univer_S() {
    const { UNAME } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(S_Suneo);
    }, []);

    const getSuneo = (Nombre) => {
        return data.find((sum) => sum.Nombre === Nombre); // Usa el estado data
    };

    const Sal = getSuneo(UNAME);

    return (
        <>
            {Sal ? (
                <div>
                    <h2>{Sal.Nombre}</h2>
                    <p>{Sal.Descripcion}</p>
                </div>
            ) : (
                <p>No se encontró la universidad.</p>
            )}
        </>
    );
}

export { Suneo, Univer_S };
