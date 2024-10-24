import React from 'react'

export const Card = ({id, img, title}) => {
  return (
    <div>
        <img src={img} alt="img" />
        <h1>{title}</h1>
    </div>
  )
}
