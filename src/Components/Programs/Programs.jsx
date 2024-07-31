import React from 'react'
import './Programs.css'
 import program1 from '../../../Asset/program1.png'
 import program2 from '../../../Asset/program2.png'
import program3 from '../../../Asset/program3.png'
import programicon1 from '../../../Asset/programicon1.png'
import programicon2 from '../../../Asset/programicon2.png'
import programicon3 from '../../../Asset/programicon3.png'

const Programs = () => {
  return (
    <div className=' '>
     <div className="program"> 
        <img src={program1}alt="" />
        <div className="caption">
       <img src={ programicon1} alt="" />
       <p>Graduation Degree</p>
 </div> 
 </div>  
 <div className="Program"> 
        <img src={program2}alt=""/> 
        <div className="caption">
       <img src={programicon2} alt=""/>
       <p>Graduation Degree</p>
        </div> 
 </div>  
 <div className="Program"> 
        <img src={program3}alt=""/> 
        <div className="caption">
        <img src={programicon3} alt=""/>
       <p>Graduation Degree</p>
       </div> 
 </div>  

    </div>
  )
}

export default Programs