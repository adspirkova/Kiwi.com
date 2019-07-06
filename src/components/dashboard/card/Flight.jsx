import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import { DateTime } from "luxon";

const Flight = ({ number, price, time, duration, from, to, stop }) => {
  return (
    <div>
      <Card
        style={{
          margin: "2rem 10rem 2rem 21rem",
          borderColor: "#FFA384",
          heigth: "50px",
          width: "800px",
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          backgroundColor: "#EFE7BC"

        }}
      >
        <CardTitle
          style={{
            backgroundColor: "#FFA384",
            fontSize: "30px",
            border: "1px solid black",
            padding: "1rem",
            color: 'white'
          }}
        >
          Flight number {number}
        </CardTitle>

        <CardBody
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <CardSubtitle>Price</CardSubtitle>

          <CardSubtitle>Time</CardSubtitle>
          <CardSubtitle>Duration</CardSubtitle>
          <CardSubtitle>From - To</CardSubtitle>
          <CardSubtitle>Number of stops</CardSubtitle>
        </CardBody>

        <CardBody
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontSize: "25px"
          }}
        >
          <CardText>{price} € </CardText>
          <CardText>
            {DateTime.fromMillis(time * 1000).toFormat("hh:mm")}
          </CardText>
          <CardText>{duration}</CardText>
          <CardText>
            {from} - {to}
          </CardText>
          <CardText>{stop.length - 1}</CardText>
        </CardBody>

        <Button
          size="lg"
          color="danger"
          style={{
            width: "50%"
          }}
        >
          Book!
        </Button>
      </Card>
    </div>
  );
};

export default Flight;
