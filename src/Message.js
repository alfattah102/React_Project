import React from 'react'

import {useState} from 'react'
import { FaTrashAlt } from "react-icons/fa";

function Message() {
    // function Handleactionchange(){
    //     console.log("im running");
       
    // }
        // const [name, setName] = useState('king');

        //   function Handleactionchange(){
        //     const action = ["best","champion","king","Strong"];
        //     const int = Math.floor(Math.random()*3);
        //     setName( action[int]);
            
        // }
    
        // const [count, setcount] = useState(99);

       
        //  function incrementValue(){

        //     setcount(prevcount => prevcount+1);

        //  }
        //  function decrementValue(){

        //     setcount(prevcount => prevcount-1);

        //  }

        const [items, setItems] = useState([

            {
                id:1,
                checked: true,
                items :"Do prayer Fajr"

            },
            {
                id:2,
                checked: true,
                items :"Do Meditate"

            },
            {
                id:3,
                checked: true,
                items :"GO to Gym"

            }
        ])

        const handleCheck = (id) => {
          
            const listitems = items.map((item) => 
            item.id === id ? {...item, checked:!item.checked} : item)
            setItems(listitems)
            localStorage.setItem("todo_list",JSON.stringify(listitems))

        }

        const handleDelete = (id) => {
               
            const listitems = items.filter((item) =>
            item.id!==id)
            setItems(listitems);
            localStorage.setItem("todo_list",JSON.stringify(listitems))
        }
  return (
    <main>
        {(items.length)?(
        <ul>
            {items.map((item) =>(
                 <li className='item' key={item.id} >
                     <input
                         type = 'checkbox'
                         onChange={() => handleCheck(item.id)}
                         checked ={item.checked}

                
                    />
                <label 
                  style={(item.checked)?{textDecoration :'line-through'} : null }
                onDoubleClick={() => handleCheck (item.id)}>{item.items}</label>
               < FaTrashAlt 
                  role = 'button'
                  onClick={() => handleDelete(item.id)}
                  tabIndex="0"
               />
            </li>

        ))}

       </ul>
        )
       :(<p>You dont have any list</p>)
       }
      
    
    
    </main>
  )
}
export default Message