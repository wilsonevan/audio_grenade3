import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <PageContainer>
        <PageHeader>Shop</PageHeader>
        <StoreContainer>
          {products.map(product => {
            return (
              <Link to={`/products/${product.id}`}>
                <ProductContainer>
                  <ProductImage image={product.image} />
                  <ProductDetailsContainer>
                    <ProductHeader>{product.name}</ProductHeader>
                    {/* <ProductDescription>{product.description}</ProductDescription> */}
                    <ProductPrice>${product.price}</ProductPrice>
                  </ProductDetailsContainer>
                </ProductContainer>
              </Link>
            );
          })}
        </StoreContainer>
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
  // flex-wrap: wrap;
  align-items: center;
`;

const PageHeader = styled.h1`
  color: #f2f2f2 !important;
`;

const StoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  // padding: 2rem;
  margin: 2rem;
  background-color: #f2f2f2;
  box-shadow: rgba(221, 221, 221, 0.5) 0px 1px 2px 0px;
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
const ProductDescription = styled.div``;
const ProductPrice = styled.div`
  color: #ff8d39;
`;

export default AllProducts;
