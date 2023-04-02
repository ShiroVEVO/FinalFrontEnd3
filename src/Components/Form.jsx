import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  //Se setean los estados iniciales para los input Name, Email y NameError
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length <= 5 || !email.includes("@")) {
      setError("Por favor verifique su información nuevamente");
    } else {
      setError("");
      setMessage("Gracias " + name + ",  te contactaremos cuando antes vía mail");
    }
  };

  const handleNameChange = (event) => { //Actualiza el estado del name
    setName(event.target.value);
  };
  
  const handleEmailChange = (event) => {//Actualiza el estado del email
    setEmail(event.target.value);
  };

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
