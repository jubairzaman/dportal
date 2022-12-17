import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>

      <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/home' element={<Home></Home>}/>
      



      </Routes>
      </BrowserRouter>



    </div>
    
  );
}

export default App;
