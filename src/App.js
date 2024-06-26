import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import Login from './Pages/Login';
// import FrontPage from './Pages/FrontPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import FrontPage from './Pages/FrontPage';
import Employees from './Pages/Employees'

function App() {
  
  return (
    <> 
    <BrowserRouter>
    <Routes>
    <Route index element = {<Login/>} />
    <Route path='/login' element = {<Login/>} />
    <Route path='/dashboard' element = {<FrontPage/>} />
    <Route path='/employees' element = {<Employees/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



