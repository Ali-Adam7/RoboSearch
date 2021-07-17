import React from 'react'

const Card = (props) => {
return (
    <div className = "bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src = {`https://robohash.org/${props.id}`} alt = "img"/>
        <h3 style = {{color :"grey", margin:"2px"}}>{props.name}</h3>
        <p style = {{color :"black"}}>{props.email}</p>

    </div>
)
}

export default Card;
