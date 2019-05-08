import React, { useState, useEffect } from "react";
import { Dimmer, Loader, Segment, Button } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { CardElement, injectStripe } from "react-stripe-elements";

const StripeDrop = props => {
  const [loaded, setLoaded] = useState(false);
  const [token, setToken] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axios.get("/api/stripe_token").then(res => {
      setToken(res.data);
      setLoaded(true);
    });
  }, []);


  const handlePaymentMethod = payload => {
    const { amount } = props;

    axios
      .post("/api/payment", { amount, ...payload })
      .then(res => {
        setRedirect(true);
        setTransactionId(res.data.transactionId);
      })
      .catch(res => {
        window.location.reload();
      });
  };

  // async function submit(ev) {
  //   // User clicked submit
  //   let { token } = await this.props.stripe.createToken({ name: "Name" });
  //   let response = await fetch("/charge", {
  //     method: "POST",
  //     headers: { "Content-Type": "text/plain" },
  //     body: token.id
  //   });

  //   if (response.ok) console.log("Purchase Complete!");
  // }

  if (redirect)
    return (
      <Redirect
        to={{
          pathname: "/payment_success",
          state: { amount: props.amount, transactionId }
        }}
      />
    );
  if (loaded) {
    return (
      <Container>
        <CardElement />
        <button onClick={handlePaymentMethod}>Complete Your Order</button>
      </Container>
    );
  } else
    return (
      <Dimmer active>
        <Loader>Loading Payment Experience. Please Wait...</Loader>
      </Dimmer>
    );
};

const Container = styled.div`
  // width: 100%;
  // height: 50vh;
`;

export default injectStripe(StripeDrop);

