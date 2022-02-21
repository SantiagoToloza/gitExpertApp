import React, {  useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridElement} from '../components/GifGridElement'





export const GifGrid = ({category}) => {
    
      
     const {data:images,loading} = useFetchGifs(category);


    

  return (
    <> 
       <h3>{category} </h3>

       <p>{loading && 'esta cargando ' } </p>



            {
                images.map(abc => (
                    <GifGridElement abc={abc} key={abc.id} />
                ))

            }
        
    </>
  )
}
