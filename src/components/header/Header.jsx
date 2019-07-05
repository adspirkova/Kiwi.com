import React from "react";
import { Jumbotron, Collapse, Navbar, NavbarBrand } from "reactstrap";

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
    const { onSearchChange, updateFlights, checked, onCheckedChange } = this.props;
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3" className="jumbotron">
            Welcome to Skypicker
          </h1>
        </Jumbotron>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="">Skypicker</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Search
              onSearchChange={onSearchChange}
              updateFlights={updateFlights}
              checked={checked}
              onCheckedChange = {onCheckedChange}
            />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
