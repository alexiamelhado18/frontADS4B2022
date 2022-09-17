import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import Sobre from './Sobre';
import Usuario from './components/Usuario';

export default function App() {
  return (
    <div className="App">
      <header>
        {/* <p><Link to='/home'>Home</Link></p>
     <Link to='/sobre'>Sobre</Link> */}
      </header>
      <main>
        <h1>Olá</h1>
        <Routes>
          <Route path='/usuario' component={Usuario} />
          {/* <Route path='/sobre' component= {Sobre}/>
          <Route path='/home' component= {Home}/> */}
        </Routes>
      </main>
    </div>
  );
}
