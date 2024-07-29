
import React from 'react'
import './Title.css'

function Title({subTitle,Title}) {
  return (
    <div className='Title'>
       
    <p>{subTitle}</p>
    <p>{Title}</p>

    </div>
  )
}

export default Title