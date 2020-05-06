import React from 'react'
import { Card } from 'react-bootstrap'

function CardItem(props) {
  return (
    <Card style={{ width: '18rem', boxShadow:'5px 6px #888888' }}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
            <Card.Text>
            {props.body}
            </Card.Text>
            <Card.Link href={`form/${props.linkValue}`}>{props.link}</Card.Link>
        </Card.Body>
    </Card>
  )
}

export default CardItem