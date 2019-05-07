import React, { useState, useEffect } from "react";
import { Dimmer, Loader, Segment, Button } from "semantic-ui-react";
import braintree from "braintree-web-drop-in";
import BraintreeDropin from "braintree-dropin-react";
import axios from "axios";
import styled from "styled-components";
import BraintreeSubmitButton from "./BraintreeSubmitButton";
import { Redirect, } from 'react-router-dom';

const BraintreeDrop = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [token, setToken] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [transactionId, setTransactionId] = useState('')

  useEffect(() => {
    axios.get("/api/braintree_token").then(res => {
      setToken(res.data);
      setLoaded(true);
    });
  }, []);

  const handlePaymentMethod = payload => {
    const { amount } = props;

    axios.post('/api/payment', { amount, ...payload, })
      .then( res => {
        setRedirect(true)
        setTransactionId(res.data.transactionId)
      })
      .catch( res => {
        window.location.reload();
    });

  };

  const renderSubmitButton = ({ onClick, isDisabled, text }) => {
    return (
      <Button primary onClick={onClick} disabled={isDisabled}>
        {text}
      </Button>
    );
  };

  if(redirect)
      return(
        <Redirect to={{
          pathname: '/payment_success',
          state: { amount: props.amount, transactionId }
        }}/>
      );
  if (loaded) {
    return (
      <Container>
        <MyBraintreeDropin
          braintree={braintree}
          authorizationToken={token}
          handlePaymentMethod={handlePaymentMethod}
          renderSubmitButton={BraintreeSubmitButton}
        />
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

const MyBraintreeDropin = styled(BraintreeDropin)`
  padding: 20px;
  .braintree-dropin-react-submit-btn-wrapper {
    padding: 10px;
    background-color: #eee;
  }
`;

export default BraintreeDrop;
