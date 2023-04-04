//Importes necesarios de react
import React, { useState } from "react";

//Importes necesarios de estilos
import "./Form.css";

const Form = () => {
  //Se setean los estados iniciales para los input Name, Email y NameError
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  //Función de validación para cuando se envia el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length <= 5 || !email.includes("@")) {
      setMessage("");
      setError("Por favor verifique su información nuevamente");
    } else {
      setError("");
      setMessage("Gracias " + name + ",  te contactaremos cuando antes vía mail");
    }
  };

  //Actualiza el estado del name
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //Actualiza el estado del email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //Regresa el formulario particular o sus label de error/Aceptación
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input type="text" id="name" value={name} onChange={handleNameChange}></input>
        <label>email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange}></input>
        <button type="submit">Enviar</button>
        <label className="labelError">{error}</label>
        <label>{message}</label>
      </form>
    </div>
  )
}

export default Form;
