import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


function Sliders() {
  return (
    <div className='AppBackground'>

      <h1 className='center'> How do you want to feel? </h1>
      <input type='range'></input>
      <input type='range'></input>
      <input type='range'></input>
      <input type='range'></input>
      <input type='range'></input>

      <Link to='/GenrePicker'><button type='submit' className='next'> Back </button></Link> 
      <Link to='/Results'><button className='next'> Next </button></Link> 
    </div>
  )
}

export default Sliders


// singenuity contact max@singenuity.com