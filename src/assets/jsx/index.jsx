import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './components/nav-bar'
import '../sass/main.scss'
import { HeroImage } from './components/hero-image'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <HeroImage title="De la mata a la taza!" srcImage="/images/DSC00934.JPG" altImage="foto matas de cafe de una finca" />
  </>
)
