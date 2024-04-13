import "./App.css";
import Form from "./component/Form/Form";
import Hijo1 from "./component/Hijo1/Hijo1";
import Hijo2 from "./component/Hijo2/Hijo2";

import react, { createContext, useState, useEffect } from "react";

//////////////////////////////////
// 1) crear contexto

export const ContextApp = createContext();

function App() {
  const [data, setData] = useState([]); //quieor que sea un array

  //vamos a iniciar los datos solo fullName

  useEffect(() => {
    setData(...data, [
      {
        id: crypto.randomUUID(),
        fullName: "Sol Perez",
      },
    ]);
  }, []);

  //para poder modificarr los datos

  return (
    /**
     * ojo como se pasan los datos
     * si lo pasas entre llaves {} del otro lado no te toma el array
     * debes pasarlo entre [] para que donde lo uses se pueda recorrer como atrray
     */
    <ContextApp.Provider value={[data, setData]}>
      <h1>Api context </h1>

      <Form />

      <Hijo1 />
      <Hijo2 />
    </ContextApp.Provider>
  );
}

export default App;
