import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import Pokedex from './components/Pokedex';
import PokedexInfo from './components/PokedexInfo';

function App() {
  return (
    <HashRouter>
    <div className="App">
     <Routes>
       <Route path='/' element={<Login />}></Route>

        <Route element={<ProtectedRoutes />}/>

          <Route path='/pokedex' element={<Pokedex />}></Route>
          <Route path='/pokedex/:id' element={<PokedexInfo />}></Route>
     </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
