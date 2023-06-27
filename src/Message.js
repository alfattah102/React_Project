import React from 'react'
import Itemlist from './itemlist'




function Message({items, handleCheck,handleDelete}) {
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

       
  return (
    <main>
        {(items.length)?(
        
            <Itemlist
            items = {items}
            handleCheck = { handleCheck}
            handleDelete = { handleDelete }
            />       
       
        )
       :(<p>You dont have any list</p>)
       }
      
    
    
    </main>
  )
}
export default Message