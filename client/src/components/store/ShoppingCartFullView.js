import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AuthConsumer } from "../../providers/AuthProvider";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ShoppingCartFullView = props => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const { user } = props;
    // Get data for all items in current user's shopping cart
    // Including quantities

    if (user) {
      // Get cart from user data
      axios.get(`/api/users/${user.id}`).then(res => {
        setCart(res.data.cart);
      });
    } else {
      // Guest user, get cart from local storage
      var newCart = JSON.parse(localStorage.getItem("cart"));
      if (newCart !== "") setCart(newCart);
    }
  }, []);

  const adjustQuantity = (product, n) => {
    // Set the quantity of the items in the cart
    // if (!(n < 0 && quantity <= 1)) setQuantity(quantity + n);
  };

  const calcTotal = () => {
    var total = 0;

    cart.map(product => {
      total = total + product.price;
    });

    return total;
  };

  return (
    <>
      <PageContainer>
        <PageHeader>Your Shopping Cart</PageHeader>
        <CartContainer>
          {cart.length > 0 ? (
            <>
              {cart.map(product => {
                return (
                  <ProductContainer>
                    <ProductImage image={product.image} />
                    <ProductDetailsContainer>
                      <ProductHeader>{product.name}</ProductHeader>
                      {/* <ProductDescription>{product.description}</ProductDescription> */}
                      <ProductPrice>${product.price}</ProductPrice>
                      <ProductQuantity>Quantity:</ProductQuantity>
                      <QuantityContainer>
                        <Button
                          icon="minus"
                          onClick={() => adjustQuantity(product, -1)}
                        />
                        <QuantityInput
                          type="text"
                          placeholder={product.quantity}
                          autofocus
                        />
                        <Button
                          icon="plus"
                          onClick={() => adjustQuantity(product, 1)}
                        />
                      </QuantityContainer>
                    </ProductDetailsContainer>
                  </ProductContainer>
                );
              })}
              <TotalsContainer>
                <TotalsText>Subtotal: ${calcTotal()}</TotalsText>
                <Link to="/checkout">
                  <Button primary size="large">
                    Checkout
                  </Button>
                </Link>
              </TotalsContainer>
            </>
          ) : (
            <TotalsContainer>
              <TotalsText>Your Shopping Cart is Empty.</TotalsText>
            </TotalsContainer>
          )}
        </CartContainer>
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
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 80%;
  align-items: left;
  // padding: 2rem;
  margin: 1rem;
  background-color: #f2f2f2;
  box-shadow: rgba(221, 221, 221, 0.5) 0px 1px 2px 0px;
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  color: black;
`;

const ProductImage = styled.div`
  background-image: url(${props => props.image}) !important;
  background-position: center;
  background-size: 300px 300px;
  height: 300px;
  width: 300px;
`;
const ProductHeader = styled.div`
  color: #424242;

  :hover {
    color: #ff6d00;
  }
`;

const ProductPrice = styled.div`
  color: #ff8d39;
`;

const ProductQuantity = styled.h4`
  margin-bottom: 0;
`;

const QuantityContainer = styled.div`
  margin-bottom: 1rem;
`;

const QuantityInput = styled.input`
  width: 45px;
  height: 37px;
  text-align: center;
  margin: 10px;
  border: none;
  border-radius: 5px;
`;

const TotalsContainer = styled(ProductContainer)`
  display: flex;
  justify-content: space-around;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const TotalsText = styled.h4`
  margin-left: 5rem;
  // padding-left: 1rem;
  color: #424242;
  font-size: 1.5rem;
`;

const CheckoutButton = styled.button``;

const ConnectedShoppingCartFullView = props => (
  <AuthConsumer>
    {value => <ShoppingCartFullView {...props} auth={value} />}
  </AuthConsumer>
);

export default ConnectedShoppingCartFullView;
