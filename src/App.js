import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Login from './components/Login';
import FrontPage from './components/FrontPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <> 
    <BrowserRouter>
    <Routes>
    <Route index element = {<Login/>} />
    <Route path='/login' element = {<Login/>} />
    <Route path='/dashboard' element = {<FrontPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



