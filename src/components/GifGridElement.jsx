import React from 'react'

export const GifGridElement = ({abc}) => {
  return (
    <>
    <div className='card animate__animated animate__fadeIn'>
        <p>{abc.title} </p>
        <img src={abc.url} />
    </div>

    </>
  )
}
