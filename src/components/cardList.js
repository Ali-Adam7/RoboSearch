import React from "react"
import Card from './Card.js'

const cardList = ({robots}) => {
    let cards = robots.map((robot, i) => {
        return ( <Card key = {i }name = {robot.name} id = {robot.id} email = {robot.email}/>)

    })
    return (
        cards
    )
}
export default cardList;