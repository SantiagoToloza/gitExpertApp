import React, { useState } from 'react'


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('cats')
    const handdleChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handdleSubmit = (e) =>{
        e.preventDefault();
        setCategories(abc=>[inputValue,...abc])
    }

    
  return (
    <>
    <form onSubmit={handdleSubmit}>
        <input type="text"
        value={inputValue}
        onChange={handdleChange}
        />
    </form>
     
    
    </>


    )
}
