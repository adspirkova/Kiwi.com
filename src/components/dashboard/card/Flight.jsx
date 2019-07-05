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

const Flight = props => {
  return (
    <div>
      <Card
        style={{
          margin: "2rem 10rem 2rem 21rem",
          borderColor: "#333",
          heigth: "50px",
          width: "600px",
          display: "flex",
          alignItems: "center",
          border: "1px solid black"
        }}
      >
        <CardTitle
          style={{
            backgroundColor: "#9999ff",
            fontSize: "30px",
            border: "1px solid black",
            padding: "1rem"
          }}
        >
          Flight number {props.index}
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
          <CardSubtitle>Time and Date</CardSubtitle>
          <CardSubtitle>Duration</CardSubtitle>
          <CardSubtitle>From - To</CardSubtitle>
        </CardBody>

        <CardBody
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <CardText>{props.price} EUR </CardText>
          <CardText>
            {DateTime.fromMillis(props.time * 1000).toFormat("hh:mm")}
          </CardText>
          <CardText>{props.duration}</CardText>
          <CardText>
            {props.from} - {props.to}
          </CardText>
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
