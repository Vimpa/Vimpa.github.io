import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Startsida from './components/startsida'
import Projekt from './components/projekt'
import Contact from './components/contact'
import Nav from './components/nav'
import Education from './components/education'
import About from './components/about'
import SlideEffect from './components/slideIn'

function App() {
  return (
      <div class = "app">
        
        <Nav/>
        <section id="startsida">
            <Startsida/>
          </section>
        <SlideEffect>
            <section id="projekt">
                <Projekt/>
              </section>
          </SlideEffect>
          <section id="education">
            <Education/>
          </section>
          <section id="about">
            <About />
          </section>
         <section id="contact">
            <Contact/>
        </section>
      
      </div>

  ); 
}

export default App
