import React from 'react'

const Header = (props) => {

    const Headerstyle = {backgroundColor:'blue', color:'white'}
  return (
    <header style={Headerstyle}>

        <h1>{props.title}</h1>

    </header>
  )
}

export default Header