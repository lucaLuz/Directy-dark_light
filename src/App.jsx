import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Inicio from './components/Inicio/Inicio'
import Ofertas from './components/Ofertas/Ofertas'
import Hospedagens from './components/Hospedagens/Hospedagens'

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Atualiza o atributo data-theme sempre que o estado do tema for alterado
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div>
      <Nav/>
      <Inicio theme={theme} toggleTheme={toggleTheme}/>
      <Ofertas/>
      <Hospedagens/>
      <Footer/>
    </div>
  )
}

export default App
