import React from 'react'
import LineItem from './LineItem'


function itemlist({items, handleCheck, handleDelete}) {
  return (
    <main>
    <ul>
        {items.map((item) =>(
            <LineItem
            item = {item}
            key = {item.id}
            handleCheck = { handleCheck}
            handleDelete = { handleDelete }
            
            
            />  

     ))}

    </ul>
    </main>
  )
}

export default itemlist