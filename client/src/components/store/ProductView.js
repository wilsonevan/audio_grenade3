import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { AuthConsumer } from "../../providers/AuthProvider";

const ProductView = props => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`/api${window.location.pathname}`).then(res => {
      setProduct(res.data);
    });
  }, []);

  const handleSubmit = () => {
    const { user } = props;
    // Either update user's cart, or update the state of the guest user
    // axios.put()
    // If guest, add to cart in localStorage
    // Else, add to user's cart
    if (user) {
      axios.put("/api/add_to_cart", {
        newItem: product,
        quantity: quantity
      });
    } else {
      var newCart = localStorage.getItem("cart");
      var duplicateItemFlag = false;

      var newItem = {
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image
      };

      // There are already items in the cart, so add new item to the end of the cart
      if (newCart !== "null" && newCart !== "") {
        var cart_arr = [...JSON.parse(newCart)];
        cart_arr.map(item => {
          if (item.name === newItem.name) {
            duplicateItemFlag = true;
          }
        });

        // Only push if it is not a duplicate item.
        if (!duplicateItemFlag) cart_arr.push(newItem);
        else alert("This item is already in your cart");

        newCart = JSON.stringify(cart_arr);
      }

      // Else, it is the first Item to be added to the cart
      else newCart = JSON.stringify([newItem]);

      if (!duplicateItemFlag) {
        localStorage.setItem("cart", newCart);
        // TBD Improve the styling of the alert
        alert(`Successfully added ${product.name} to your cart`);
      }
    }
  };

  const adjustQuantity = n => {
    if (!(n < 0 && quantity <= 1)) setQuantity(quantity + n);
  };

  return (
    <>
      <PageContainer>
        <ProductContainer>
          <ProductImage image={product.image} />
          <ProductDetailsContainer>
            <ProductHeader>{product.name}</ProductHeader>
            <ProductPrice>${product.price}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductQuantity>Quantity:</ProductQuantity>
            <QuantityContainer>
              <Button icon="minus" onClick={() => adjustQuantity(-1)} />
              <QuantityInput type="text" placeholder={quantity} autofocus />
              <Button icon="plus" onClick={() => adjustQuantity(1)} />
            </QuantityContainer>

            <Button primary size="large" onClick={() => handleSubmit()}>
              Add To Cart
            </Button>
          </ProductDetailsContainer>
        </ProductContainer>
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

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 2rem;
  // background-color: #f2f2f2;
`;

const ProductImage = styled.div`
  background-image: url(${props => props.image}) !important;
  background-position: center;
  background-size: 600px 600px;
  height: 600px;
  width: 600px;
  margin: 5rem;
  // background-color: #424242;
  box-shadow: rgba(221, 221, 221, 0.5) 0px 1px 2px 0px;
`;

const ProductDetailsContainer = styled.div`
  width: 50%;
  margin: 5rem;
`;

const ProductHeader = styled.h1`
  color: #f2f2f2 !important;
`;
const ProductPrice = styled.h2``;
const ProductDescription = styled.h2``;
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

const AddToCartButton = styled.button``;

const ConnectedProductView = props => (
  <AuthConsumer>
    {value => <ProductView {...props} auth={value} />}
  </AuthConsumer>
);

export default ConnectedProductView;
