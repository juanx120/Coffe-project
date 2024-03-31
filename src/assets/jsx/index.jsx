import '../sass/main.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import data from '../data.json'
import { NavBar } from './components/nav-bar'
import { HeroImage } from './components/hero-image'
import { SingleQuad } from './components/single-quad'
import { NSwiper } from './components/swiper'

console.log(data.index.intro_content.title);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <HeroImage 
      title={data.index.intro_content.title} 
      srcImage={data.index.intro_content.image} 
      altImage={data.index.intro_content['alt-image']} 
    />
    <SingleQuad
      lista={data.index['single-quad']}
    />
    <NSwiper
    />
  </>
);
