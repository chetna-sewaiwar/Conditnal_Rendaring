import React, { useState } from 'react'
import Component from './Component'

const App = () => {
  const [click,setClick]= useState(false)
  return (
    <div>
      <h1>Conditional Rendering </h1>
      <button onClick={()=> setClick(!click)}>
         click me
      </button>
      <div>
        {click && <Component/>}
      </div>
    </div>
  )
}

export default App