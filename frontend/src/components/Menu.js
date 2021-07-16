import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import '../styles/menuStyles.css'

const Menu = ({menu}) => {
    return (
        <Card className="p-3 my-3 rounded menu">
            <Link to={`/menu/${menu._id}`} >
                <Card.Img src={menu.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/menu/${menu._id}`} >
                    <Card.Title as='div'>
                        <strong>{menu.name} </strong>
                    </Card.Title>
                </Link>
            </Card.Body>
            <Card.Text as='div'>
                <Rating value={menu.rating} text={` ${menu.numReviews} reviews`} />
            </Card.Text>
            <Card.Text as='h3'>
                N{menu.price}
            </Card.Text>
        </Card>
    )
}

export default Menu
