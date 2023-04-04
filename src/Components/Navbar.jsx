//Importes necesarios de React
import React, {useContext} from 'react';
import {Link} from "react-router-dom";

//Importes necesarios de contextos
import ThemeContext from '../contexts/ThemeContext';

const Navbar = () => {
  //Declaracion del contexto para el Dark/Ligth Theme
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  //Regresa la barra de navegación particular
  return (
    <nav style={{background: theme.background, color: theme.font}}>
      <Link to="/home" style={{color: theme.font}}>Home</Link>
      <Link to="/contact" style={{color: theme.font}}>Contact</Link>
      <Link to="/favs" style={{color: theme.font}}>Favs</Link>
      <button onClick={handleChangeTheme} style={{ background: theme.background, color: theme.font }}>Change theme</button>
    </nav>
  )
}

export default Navbar