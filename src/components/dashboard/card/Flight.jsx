import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import { DateTime } from 'luxon';

const Flight = (props) => {
  return (
    <div>
      <Card style={{
        display: 'flex',
        border: '1px solid black'
      }}>
        <CardBody>
          <CardTitle>Flight number {props.number}</CardTitle>
          <CardSubtitle>Price</CardSubtitle>
          <CardText>{props.price} EUR </CardText>
          <CardSubtitle>Time and Date</CardSubtitle>

          <CardText>{DateTime.fromMillis(props.time * 1000).toFormat('hh:mm')}</CardText>
          <CardSubtitle>Duration</CardSubtitle>
          <CardText>{props.duration}</CardText>
          <CardSubtitle>From - To</CardSubtitle>
          <CardText>{props.from} - {props.to}</CardText>
          <Button>Book!</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Flight;