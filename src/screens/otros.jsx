import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Unis_Tec from '../data/Int_tec.json';
import SetData from "../components/setData"; 
import 'bootstrap-icons/font/bootstrap-icons.css';

function Other() {
    const [data, setData ] = useState([]);

    useEffect(()=>{
      setData(Unis_Tec);
    }, []);
    const mail = "mailto:"
    const tel = "tel:"
    return (
      <SetData
            data={data}
            uni="Otros"
            mail={mail}
            tel={tel}
        />
    );
  }
  function Univer_O() {
    const params = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Unis_Tec);
    }, []);

    const getSuneo = (Nombre) => {
        return Unis_Tec.find((sum) => sum.Nombre === Nombre); // Asegúrate de hacer la comparación correctamente
    }

    // `useMemo` debería devolver el valor calculado
    const Sal = useMemo(() => getSuneo(params.UNAME), [params.UNAME]);

    return (
      <>
        {Sal ? (
          <div>
            <h2>{Sal.Nombre}</h2>
            <p>{Sal.Descripcion}</p>
          </div>
        ) : (
          <p>No se encontró la universNAMEad.</p>
        )}
      </>
    );


  }
  export { Other, Univer_O };