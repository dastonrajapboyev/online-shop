import React from "react";
import { Container } from "./style";

const Header = () => {
  return (
    <div style={{ background: "#7AC751" }}>
      <Container>
        <Container.Header>
          <Container.Greeting>Welcome to our online shop</Container.Greeting>
          <Container.Info>
            <Container.Language>English (USD) </Container.Language>
            <Container.Login>Login or Sign up</Container.Login>
          </Container.Info>
        </Container.Header>
      </Container>
    </div>
  );
};

export default Header;
