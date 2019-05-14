import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles, GlobalColors } from "./styles/GlobalStyles";
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

import { Loader } from "semantic-ui-react";
import image0 from "./images/_DSC6506_cropped.jpg";
import image1 from "./images/_DSC6583.jpg";
import image2 from "./images/_DSC6399.jpg";
import image3 from "./images/_DSC8699_16_9_AR.jpg";
import image4 from "./images/_DSC8752_16_9_AR.jpg";
import image5 from "./images/gallery_bx_6th_16_9_AR.jpg";
import image6 from "./images/_DSC6379_16_9_AR.jpg";
import image7 from "./images/_DSC6555_16_9_AR.jpg";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [totalImages, setTotalImages] = useState(8);
  const [imageArr, setImageArr] = useState([]);

  useEffect(() => {
    // Intiailize the ImageArr by populating with ALL FALSE values
    var newArr = [];
    for (var i = 0; i < totalImages; i = i + 1) {
      newArr.push(false);
    }
    setImageArr([newArr]);
  }, []);

  const updateLoader = n => {
    var newArr = imageArr;
    newArr[n] = true;

    // Once the state has been updated with the new array, test for whether the entire array is loaded.
    setImageArr(newArr);
    if (
      !imageArr.find(function(element) {
        return false;
      }) &&
      imageArr.length === totalImages
    ) {
      setLoaded(true);
    }
    // });
  };

  return (
    <>
      <GlobalStyles />
      <DimmerContainer loaded={loaded}>
        <Loader active inline="centered" />
        <LoadedImage src={image0} onLoad={() => updateLoader(0)} />
        <LoadedImage src={image1} onLoad={() => updateLoader(1)} />
        <LoadedImage src={image2} onLoad={() => updateLoader(2)} />
        <LoadedImage src={image3} onLoad={() => updateLoader(3)} />
        <LoadedImage src={image4} onLoad={() => updateLoader(4)} />
        <LoadedImage src={image5} onLoad={() => updateLoader(5)} />
        <LoadedImage src={image6} onLoad={() => updateLoader(6)} />
        <LoadedImage src={image7} onLoad={() => updateLoader(7)} />
      </DimmerContainer>
      <PageContainer loaded={loaded}>
        <Navbar />
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/how-it-works" component={HowItWorks} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/gifts" component={Gifts} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/store" component={AllProducts} />
          <Route path="/products/:id" component={ProductView} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  visibility: ${props => (props.loaded ? "visible" : "hidden")};
  opacity: ${props => (props.loaded ? 1 : 0)};

  transition: visibility 1s, opacity 1s linear;
`;

const LoadedImage = styled.img`
  visibility: hidden;
`;

const DimmerContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: ${props => (props.loaded ? "none" : "flex")};
  visibility: ${props => (props.loaded ? "hidden" : "visible")};
  opacity: 0.5;
  justify-content: center;
  align-items: center;
  background-color: ${GlobalColors.PrimaryWhite} !important;
`;

export default App;
