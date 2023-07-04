import './App.css';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import Manage_page from './pages/Manage-page/Manage_page';
import Error from './pages/Error/Error';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Error/>} />
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={ <Contact/>}/>
        <Route path='/manage' element={<Manage_page/>} />
      </Routes>
      
       
    </div>
  );
}

export default App;
