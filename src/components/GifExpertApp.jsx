import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['gatos']);
  return (
    <>  
        <h2>desde gif expert app</h2>
        <AddCategory setCategories={setCategories} />
       
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
              />
          ))


        }

        

        
    
    </>


  )
}
