import React from "react";
import DropIn from "braintree-web-drop-in-react";
import styled from "styled-components";

class Store extends React.Component {
  instance;

  state = {
    clientToken: null
  };

  async componentDidMount() {
    // Get a client token for authorization from your server
    const response = await fetch("server.test/client_token");
    const clientToken = await response.json(); // If returned as JSON string

    this.setState({
      clientToken
    });
  }

  async buy() {
    // Send the nonce to your server
    const { nonce } = await this.instance.requestPaymentMethod();
    await fetch(`server.test/purchase/${nonce}`);
  }

  render() {
    if (!this.state.clientToken) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <Container>
          <DropIn
            options={{ authorization: this.state.clientToken }}
            onInstance={instance => (this.instance = instance)}
          />
          <button onClick={this.buy.bind(this)}>Buy</button>
        </Container>
      );
    }
  }
}

const Container = styled.div`
  margin-top: 20rem;
  background-color: black;
`

export default Store;
