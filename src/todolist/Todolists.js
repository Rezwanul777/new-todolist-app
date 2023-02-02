import React, { useState } from 'react'
import './todolist.css'
import todo from './image/todo.jpg'
import { FaPlus, FaTrash } from "react-icons/fa";

const Todolists = () => {
   const [addItems,setAddItems]=useState('')
   const [items,setItems]=useState([])

   const addList=()=>{
    if(!addItems){
      alert("Please add item")
    }else{
      setItems([...items,addItems]) 
      console.log([addItems])
      setAddItems('')
    }
   }

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
               <input type="text" placeholder='add items' value={addItems}
                onChange={(e)=>setAddItems(e.target.value) } 
             />
               <FaPlus className='fa fa-plus' title="add item" onClick={addList}/>

         </div>
            <div className='showItem'>
              {
               items.map((item,index)=>{
                  return(
                     <div className="eachItem" key={index}>
                     <h3>{item}</h3>
                     <FaTrash className='fa-trash'/>
                  </div>
                  )
               })
              }
            </div>
            <div className='showItem'>
               <button className='btn'>CheckList</button>
            </div>
      </div>
   </div>
   </>
  )
}

export default Todolists