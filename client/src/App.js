import React from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import FetchUser from "./components/FetchUser";
import Home from "./components/home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Footer from "./components/Footer";
import HowItWorks from "./components/howItWorks/HowItWorks";
import ContactUs from "./components/ContactUs";
import Gifts from "./components/gifts/Gifts";
import AllProducts from "./components/store/AllProducts";
import ProductView from "./components/store/ProductView";
import ShoppingCartFullView from "./components/store/ShoppingCartFullView";
import CheckoutView from './components/store/CheckoutView';
import PaymentSuccess from './components/store/PaymentSuccess';

function App() {
  return (
    <>
      <GlobalStyles />
      <FetchUser>
        <PageContainer>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/how-it-works" component={HowItWorks} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/gifts" component={Gifts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/store" component={AllProducts} />
            <Route path="/products/:id" component={ProductView} />
            <Route exact path="/cart" component={ShoppingCartFullView} />
            <Route exact path="/checkout" component={CheckoutView} />
            <Route exact path='/payment_success' component={PaymentSuccess} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </PageContainer>
      </FetchUser>
    </>
  );
}

const PageContainer = styled.div``;

export default App;
