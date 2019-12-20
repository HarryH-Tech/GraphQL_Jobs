import React from "react";
import { Header, Segment } from "semantic-ui-react";

function Navbar(props) {
  return (
    <Segment color="green" inverted>
      <Header as="h1" block textAlign="center" color="blue">
        <Header.Content>GraphQL Jobs</Header.Content>
      </Header>
    </Segment>
  );
}

export default Navbar;
