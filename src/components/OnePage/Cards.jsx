import React from "react";
import Card from 'react-bootstrap/Card';

const Cards = ({image, title, text}) => {
    return (
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} style={{ width: '50px', height:'50px' }}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {text}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        

    )
}

export default Cards;