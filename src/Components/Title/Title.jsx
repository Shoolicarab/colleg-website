
import React from 'react'
import './Title.css'

const Title = ({subTitle,Title}) => {
  return (
    <div className='Title'>
     
     <p>{subTitle}</p>
    <p>{Title}</p>
    </div>
  )
}

export default Title