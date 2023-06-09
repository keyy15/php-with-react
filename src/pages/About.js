import React from 'react'
import multiple from '../assets/multiplePizzas.jpeg'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${multiple})`}}></div>
      <div className='aboutBottom'></div>
    </div>
  )
}

export default About