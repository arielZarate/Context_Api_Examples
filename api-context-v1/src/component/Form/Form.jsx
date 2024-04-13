import React, { useState, useContext } from "react";
import { ContextApp } from "../../App";

function Form() {
  const [formData, setFormData] = useState({});
  //====== importamos el contextAPP==============

  const [data, setData] = useContext(ContextApp);

  // console.log(data, setData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, ": ", value);
    setFormData((preview) => ({
      ...preview,
      [name]: value,
    }));
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    try {
      let objUser = {
        id: crypto.randomUUID(),
        fullName: formData.fullName,
      };

      console.log(objUser);

      setData([...data, objUser]);

      setFormData({});
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form
        style={{
          backgroundColor: "#0e1012",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "3rem",
          borderRadius: "10px",
          gap: "1rem",
          margin: "1em",
          border: "4px solid green",
          maxWidth: "400px",
        }}
        onSubmit={handlerSubmit}
      >
        <h3 style={{ fontWeight: "bold", marginTop: "0px" }}>
          Formulario de agregar datos a la lista
        </h3>
        <input
          type="text"
          name="fullName"
          placeholder="Ingrese su nombre completo "
          style={{
            backgroundColor: "#d7d2d2",
            color: "black",
            padding: "10px",
            border: "2px solid green",
            borderRadius: "10px",
          }}
          onChange={handleChange}
          value={formData.fullName || ""}
        />
        <button
          type="submit"
          style={{
            borderRadius: "10px",
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
            fontSize: "25px",
            padding: "7px",
          }}
        >
          Enviar Datos al context
        </button>
      </form>
    </div>
  );
}

export default Form;
