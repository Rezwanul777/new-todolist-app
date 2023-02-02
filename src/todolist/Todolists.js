import React, { useState } from 'react'
import './todolist.css'
import todo from './image/todo.jpg'
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const Todolists = () => {

   const [addItems,setAddItems]=useState('')
   const [items,setItems]=useState([])
   const [toggleSubmit,setToggleSubmit]=useState(true)
   const[isEditItem,setIsEditItem]=useState(null)

   const addList=()=>{
    if(!addItems){
      alert("Please add item")
    }else if(addItems && !toggleSubmit){
      setItems(
         
            items.map((item)=>{
               if(item.id===isEditItem){
                  return{ ...item, name:addItems}
               }
               return item;
            })
         
      )
      setToggleSubmit(true)
      setAddItems("")
      setIsEditItem(null)
    }
    
    else{
      const allAddItems={id:new Date().getTime().toString(),name:addItems}
      setItems([...items,allAddItems]) 
      console.log([addItems])
      setAddItems('')
    }
   }

   //update item
   const editItem=(id)=>{
      const updateItems=items.find((item)=>{
         return id===item.id
      })
     console.log(updateItems);
      setToggleSubmit(false)
      setAddItems(updateItems.name)
      setIsEditItem(id)
   }
      // delete Item
   const deleteItem=(index)=>{
      const selectedItem=items.filter((item)=>{
      return index!==item.id

      })
      setItems(selectedItem);
   }

   // Remove all
   const removeAll=()=>{
      setItems([])
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
                onChange={(e)=>setAddItems(e.target.value) } />
                {
                   toggleSubmit ? <FaPlus className='fa fa-plus' title="add item" onClick={addList}/>
                  :<FaEdit className='fa-edit' title='edit-item' onClick={addList}/>
                }

             
         </div>
            <div className='showItem'>
              {
               items.map((item)=>{
                  return(
                     <div className="eachItem" key={item.id}>
                     <h3>{item.name}</h3>
                     <div className='todo-btn'>
                       <FaEdit className='fa-edit' title='edit-item' onClick={()=>editItem(item.id)}/>
                        <FaTrash className='fa-trash'title='delete-item' onClick={()=>deleteItem(item.id)}/>
                     </div>
                  </div>
                  )
               })
              }
            </div>
            <div className='showItem'>
               <button className='btn' onClick={removeAll}>Remove All</button>
            </div>
      </div>
   </div>
   </>
  )
}

export default Todolists