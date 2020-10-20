import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import './App.css';
function App() {
  return (
    <div>
     
       <Header /> 
       <div className="container">
         <Balance />
       </div>
    </div>
  );
}

export default App;
