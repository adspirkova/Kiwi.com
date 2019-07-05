import React from "react";
import { Jumbotron, Collapse, Navbar, NavbarBrand } from "reactstrap";
import Background from "./water-1018808_1280.jpg";
import Search from "../dashboard/search/Search.jsx";

export default class Heading extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { onSearchChange, updateFlights } = this.props;
    return (
      <div>
        <Jumbotron style={{ backgroundColor: "#5d9325" }}>
          <h1 className="display-3">Welcome to Skypicker</h1>
        </Jumbotron>
        <Navbar style={{ backgroundColor: "#5d9325" }} expand="md">
          <NavbarBrand style={{ color: "black" }} href="">
            Skypicker
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Search
              onSearchChange={onSearchChange}
              updateFlights={updateFlights}
            />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
