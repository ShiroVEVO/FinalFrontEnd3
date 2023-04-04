//Importes de react
import {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Importes de contexto
import ThemeContext from "./contexts/ThemeContext";

//Importes de rutas
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";

//Importes de componentes
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

//Se definen los temas
export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};

function App() {
  //Se setean los valores del tema acorde a la LocalStore
  const localValue = JSON.parse(localStorage.getItem("theme"));
  const [theme, setTheme] = useState(localValue ?? themes.light);

  //Se define la función de cambio del tema
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  //Se modifica en la memoria local el tema actual
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  //Se envuelve la aplicación en las rutas, se definen las rutas y se envuelve tambien en el contexto de theme
  return (
    <BrowserRouter>
      <div className="App" style={{background: theme.background, color: theme.font}}>
        <ThemeContext.Provider value={{theme,handleChangeTheme}}>
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>}/> {/*Path para indicar el home*/}
            <Route path='/dentist/:id' element={<Detail/>}/>{/*Path para indicar el detalle*/}
            <Route path='/contact' element={<Contact/>}/>{/*Path para indicar el contact*/}
            <Route path='/favs' element={<Favs/>}/> {/*Path para indicar los fav*/}
            <Route path='*' element={<Home/>}/> {/* Path de links inexistentes, Cualquier link X no contemplado redigirá a home*/}
          </Routes>
          <Footer/>
        </ThemeContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
