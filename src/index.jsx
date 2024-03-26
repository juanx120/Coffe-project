import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './assets/jsx/nav-bar'
import './main.scss'
import { HeroImage } from './assets/jsx/hero-image'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <HeroImage title="De la mata a la taza!" srcImage="/images/recoleccion-cafe.jpg" />
  </>
)
