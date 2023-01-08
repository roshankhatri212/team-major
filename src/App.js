
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate';
import Donars from './components/Donars';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Contact from './components/Contact';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import TableController from './component/table.jsx';
import TextboxEdit from './component/textbox.jsx'
// import Records from './Location.json';




function App() {

  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/about" element={<About />}  />
      <Route path="/donate" element={<Donate />}  />
      <Route path="/donars" element={<Donars />}  />
      <Route path="/signup" element={<Signup />}  />
      <Route path="/signin" element={<Signin />}  />
      <Route path="/contact" element={<Contact />}  />
    
      <Route exact path = "/" component = {TableController} />
            <Route path = "/edit" component = {TextboxEdit} />
            <Route path = "/create" component = {TextboxEdit} />
     
    </Routes>
    </BrowserRouter>
  
    
  //   <div>
  // {
  //   Records.map((curentelement=>{
  //     return(
  //       <p>{curentelement.name}</p>
  //     )
  //   }))
  // }
  // </div>
  
    
    
    
    
  );
}

export default App;
