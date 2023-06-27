import React from 'react'

const Footer = (props) => {
    // const year= new Date();
  return (
   <footer>{props.length} list {props.length===1? "item" :"items"} </footer>
  )
}

export default Footer