import { useEffect, useState } from "react";
import Uni_privada from '../data/Uni_priv.json';
import 'bootstrap-icons/font/bootstrap-icons.css';
import  SetData from "../components/setData";

function Uni_priv() {
    const [data, setData ] = useState([]);

    useEffect(()=>{
      setData(Uni_privada);
    }, []);
    const mail = "mailto:"
    const tel = "tel:"
    return (
      <SetData
            data={data}
            uni="Privadas"
            mail={mail}
            tel={tel}
        />
    );
  }
 function Univer_P() {
  
}
export { Uni_priv, Univer_P };