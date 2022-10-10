import React from 'react'

export const Meal = ({
    name,
    img
}) => {
    return(
        <div>
            <h1>{name}</h1>
            <img src={img}/>
        </div>
    )
}