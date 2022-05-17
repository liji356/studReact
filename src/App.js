import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addstud from './component/Addstud';
import Serach from './component/Serach';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (

<>
<BrowserRouter>
<Routes>
<Route path="/" exact element={<Addstud/>}/>
<Route path="/search" exact element={<Serach/>}/>
</Routes>
</BrowserRouter>
</>
 

 





  );
}

export default App;
