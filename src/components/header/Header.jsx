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
    const { onSearchChange, updateFlights, onCheckedChange, checked } = this.props;
    return (
      <div>
        <Jumbotron style={{ backgroundColor: "#FFA384", color: 'white' }}>
          <h1 className="display-3" >Welcome to Skypicker</h1>
        </Jumbotron>
        <Navbar style={{ backgroundColor: "#74BDCB", color: 'black' }} expand="md">
          <NavbarBrand style={{ color: "white" }} href="">
            Skypicker
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Search
              onSearchChange={onSearchChange}
              updateFlights={updateFlights}
              onCheckedChange={onCheckedChange}
              checked={checked}
            />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
