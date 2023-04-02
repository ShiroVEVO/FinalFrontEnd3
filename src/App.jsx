
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>}/> {/*Path para indicar el home*/}
            <Route path='/dentist/:id' element={<Detail/>}/>{/*Path para indicar el detalle*/}
            <Route path='/contact' element={<Contact/>}/>{/*Path para indicar el contact*/}
            <Route path='/favs' element={<Favs/>}/> {/*Path para indicar los fav*/}
            <Route path='*' element={<Home/>}/> {/* Path de links inexistentes, Cualquier link X no contemplado redigirá a home*/}
          </Routes>
          <Footer/>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
