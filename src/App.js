
import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'




function App() {
return (
  <div>
    <div>
      <NavBar />,
      <ItemListContainer texto="Bienvenidos a FyP Balanceados"/>
    </div>
  </div>
  );
}

export default App;
