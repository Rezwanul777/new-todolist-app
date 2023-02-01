import React from 'react'
import './todolist.css'
import todo from './image/todo.jpg'
import { FaPlus } from "react-icons/fa";

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
         <div className='addItems'>
               <input type="text" placeholder='add items' />
               <FaPlus className='fa fa-plus' title="add item"
               />

         </div>
      </div>
   </div>
   </>
  )
}

export default Todolists