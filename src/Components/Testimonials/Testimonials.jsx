import React from 'react'
import './Testimonials.css'
import next from '../../../Asset/next.png'
import back from '../../../Asset/back.png'
import user1 from '../../../Asset/user1.png'
import user2 from '../../../Asset/user2.png'
import user3 from '../../../Asset/user3.png'
import user4 from '../../../Asset/user4.png'

const Testimonials = () => {
  return (
    <div className=' Testimonials'>
 <img src={next}alt="" className='next-btn'/>
 <img src={back}alt="" className='back-btn'/>
 <div className="slider">
    <ul>
        <li>
            <div className="slide">
            <div className="user-info">
                <img src={user1}alt="" />
            </div>
           <div>
           <h3>Shooli ABukar</h3>
           <span>umul-quraBoarding, somalia</span>
           </div>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quod eligendi, recusandae asperiores sed laudantium labore 
             deleniti perspiciatis fuga enim ipsum!
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Eveniet, eos?
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Harum, a!</p>
            </div>
        </li>
        <li>
            <div className="slide">
            <div className="user-info">
                <img src={user2}alt="" />
            </div>
           <div>
           <h3>Shooli ABukar</h3>
           <span>umul-quraBoarding, somalia</span>
           </div>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quod eligendi, recusandae asperiores sed laudantium labore 
             deleniti perspiciatis fuga enim ipsum!
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Eveniet, eos?
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Harum, a!</p>
            </div>
        </li>
        <li>
            <div className="slide">
            <div className="user-info">
                <img src={user3}alt="" />
            </div>
           <div>
           <h3>Shooli ABukar</h3>
           <span>umul-quraBoarding, somalia</span>
           </div>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quod eligendi, recusandae asperiores sed laudantium labore 
             deleniti perspiciatis fuga enim ipsum!
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Eveniet, eos?
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Harum, a!</p>
            </div>
        </li>
        <li>
            <div className="slide">
            <div className="user-info">
                <img src={user4}alt="" />
            </div>
           <div>
           <h3>Shooli ABukar</h3>
           <span>umul-quraBoarding, somalia</span>
           </div>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quod eligendi, recusandae asperiores sed laudantium labore 
             deleniti perspiciatis fuga enim ipsum!
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Eveniet, eos?
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Harum, a!</p>
            </div>
        </li>
    </ul>
    
 </div>
    </div>
  )
}

export default Testimonials