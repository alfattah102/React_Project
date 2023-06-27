
import Header from './Header';
import Footer from './Footer';
import Message from './Message';
import {useState} from 'react'

function App() { 
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
]);

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
    <div className='App'>
         <Header  title ="Alfattah List"/>
         <Message 
            items = {items}
            handleCheck = { handleCheck}
            handleDelete = { handleDelete }
         />
         <Footer  
          length = {items.length} 
        />



    </div>
  );
}

export default App;
