import React from 'react'
import './todolist.css'
import todo from './image/todo.jpg'

const Todolists = () => {
  return (
   <>
   <div className='main-div'>
      <div className="child-div">
         <figure>
            <img width="100px" src={todo} alt="todoimage" />
            <figcaption>
               <h5>Todo list App</h5>
            </figcaption>
         </figure>
      </div>
   </div>
   </>
  )
}

export default Todolists