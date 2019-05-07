import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BriantreeDrop from "./BraintreeDrop";
import axios from "axios";
import { AuthConsumer } from "../../providers/AuthProvider";

const CheckoutView = props => {
  const [amount, setAmount] = useState(99.99);
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   const { user } = props;
  //   // Get data for all items in current user's shopping cart
  //   // Including quantities

  //   if (user) {
  //     // Get cart from user data
  //     axios.get(`/api/users/${user.id}`).then(res => {
  //       setCart(res.data.cart);
  //     });
  //   } else {
  //     // Guest user, get cart from local storage
  //     var newCart = JSON.parse(localStorage.getItem("cart"));
  //     if (newCart !== "") {
  //       setCart(newCart);
  //     }
  //   }
  //   setAmount(calcTotal());
  // }, [cart]);

  // const calcTotal = () => {
  //   var total = 0;

  //   cart.map(product => {
  //     total = total + product.price;
  //   });

  //   return total;
  // };

  return (
    <>
      <PageContainer>
      <PageHeader>Your Shopping Cart</PageHeader>
      {/* <CartContainer> */}
      <AmountInput type="text" value={amount} />
      <hr />
      <BriantreeDrop amount={amount} />
      {/* </CartContainer> */}
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  padding-top: 10rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: #424242;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageHeader = styled.h1`
  color: #f2f2f2 !important;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AmountInput = styled.input`
  width: 45px;
  height: 37px;
  text-align: center;
  margin: 10px;
  border: none;
  border-radius: 5px;
`;

const ConnectedCheckoutView = props => (
  <AuthConsumer>
    {value => <CheckoutView {...props} auth={value} />}
  </AuthConsumer>
);

export default ConnectedCheckoutView;
