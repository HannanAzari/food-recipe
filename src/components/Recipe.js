import React from 'react'
import './recipe.css'

const Recipe = ({ title, recipe, image, description }) => {
  return (
    <div className='card' style={{ background: `url(${image})`, backgroundSize: 'cover' }}>
          {/* <h2>{title}</h2> */}
      
          <div className='overlay'>
            <h2>{recipe}</h2>
            <p>{description}</p>

          </div>
    </div>
  )
}

export default Recipe