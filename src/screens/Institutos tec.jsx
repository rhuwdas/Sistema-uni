import { useEffect, useState } from "react";
import Int_tec from '../data/Int_tec.json';
import SetData from "../components/setData"; 
import 'bootstrap-icons/font/bootstrap-icons.css';

 function Inst() {
    const [data, setData ] = useState([])

    useEffect(()=>{
      setData(Int_tec);
    }, []);
    const mail = "mailto:"
    const tel = "tel:"
    return (
      <SetData
            data={data}
            uni="TecNM"
            mail={mail}
            tel={tel}
        />
    );
  }
 function Inst_tec() {
    return(
      <h3>hola</h3>
    )
  }
  export { Inst, Inst_tec };