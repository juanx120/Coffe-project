import '../sass/main.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import data from '../data.json'
import { NavBar } from './components/nav-bar'
import { HeroImage } from './components/hero-image'
import {SingleQuad } from './components/single-quad'

console.log(data.index.intro_content.title);
  let quadCount = 1;
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <HeroImage 
      title={data.index.intro_content.title} 
      srcImage={data.index.intro_content.image} 
      altImage={data.index.intro_content['alt-image']} 
    />
    <SingleQuad 
      id_item={quadCount} 
      bgcolor={data.index[`quad_${quadCount}`]['bg-color']} 
      title={data.index[`quad_${quadCount}`].title} 
      srcImage={data.index[`quad_${quadCount}`].image} 
      altImage={data.index[`quad_${quadCount}`].altImage} 
      copy={data.index[`quad_${quadCount}`].copy} 
      btn={data.index[`quad_${quadCount}`].btn_href} 
      btn_label={data.index[`quad_${quadCount}`].btn_label}
    />
    <div className='display-none'>{quadCount = quadCount + 1}</div>
    <SingleQuad 
      id_item={quadCount} 
      bgcolor={data.index[`quad_${quadCount}`]['bg-color']} 
      title={data.index[`quad_${quadCount}`].title} 
      srcImage={data.index[`quad_${quadCount}`].image} 
      altImage={data.index[`quad_${quadCount}`].altImage} 
      copy={data.index[`quad_${quadCount}`].copy} 
      btn={data.index[`quad_${quadCount}`].btn_href} 
      btn_label={data.index[`quad_${quadCount}`].btn_label}
    />
    <div className='display-none'>{quadCount = quadCount + 1}</div>
    <SingleQuad 
      id_item={quadCount} 
      bgcolor={data.index[`quad_${quadCount}`]['bg-color']} 
      title={data.index[`quad_${quadCount}`].title} 
      srcImage={data.index[`quad_${quadCount}`].image} 
      altImage={data.index[`quad_${quadCount}`].altImage} 
      copy={data.index[`quad_${quadCount}`].copy} 
      btn={data.index[`quad_${quadCount}`].btn_href} 
      btn_label={data.index[`quad_${quadCount}`].btn_label}
    />
  </>
);
