import React, { useState, useEffect } from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logos/AG Grenade Only Transparent.svg";
import "./Navbar.css";
import { Button, Icon, Sidebar, Menu } from "semantic-ui-react";

const Navbar = props => {
  const [activeItem, setActiveItem] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const url = window.location.pathname;
    switch (url) {
      case "/":
        setActiveItem(1);
        break;
      case "/how-it-works":
        setActiveItem(2);
        break;
      case "/gifts":
        setActiveItem(3);
        break;
      default:
        setActiveItem(1);
        break;
    }
  }, []);

  const activateItem = MenuItem => {
    setActiveItem(MenuItem);
  };

  const isActive = MenuItem => {
    return MenuItem === activeItem ? ActiveMenuItem : null;
  };

  const handleMenuToggle = () => setVisible(!visible);
  const handleSidebarHide = () => setVisible(false);

  const centerNavItems = () => {
    return (
      <>
        <div className="expanded">
          <CenterMenu>
            <NavLink to="/">
              <MenuItem as={isActive(1)} onClick={() => activateItem(1)}>
                <Item>Home</Item>
              </MenuItem>
            </NavLink>
            <NavLink to="/how-it-works">
              <MenuItem as={isActive(2)} onClick={() => activateItem(2)}>
                <Item>How It Works</Item>
              </MenuItem>
            </NavLink>
            <NavLink to="/gifts">
              <MenuItem as={isActive(3)} onClick={() => activateItem(3)}>
                <Item>Corporate Gifts</Item>
              </MenuItem>
            </NavLink>
            <NavLink to="/contact">
              <MenuItem as={isActive(4)} onClick={() => activateItem(4)}>
                <Item>Contact Us</Item>
              </MenuItem>
            </NavLink>
            <MenuItem>
              <SupportLink
                href="https://audio-grenade.freshdesk.com/support/home"
                target="_blank"
              >
                <Item>Support</Item>
              </SupportLink>
            </MenuItem>
          </CenterMenu>
        </div>
      </>
    );
  };

  const rightNavItems = () => {
    const {
      auth: { user, handleLogout },
      history
    } = props;

    if (user) {
      return (
        <>
          <div className="expanded">
            <RightMenu>
              <NavLink to="/store" onClick={() => activateItem(5)}>
                <MenuItem as={isActive(5)}>
                  <Item>Shop</Item>
                </MenuItem>
              </NavLink>
              <NavLink to="/login" onClick={() => handleLogout(history)}>
                <MenuItem>
                  <Item>Logout</Item>
                </MenuItem>
              </NavLink>
            </RightMenu>
          </div>

          <div className="compact">
            <RightMenu>
              <Item>
                <Button compact icon onClick={() => handleMenuToggle()}>
                  <Icon name="bars" />
                </Button>
              </Item>
            </RightMenu>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={() => handleSidebarHide()}
              vertical
              visible={visible}
              width="thin"
              direction="right"
            >
              <NavLink to="/store" onClick={() => activateItem(5)}>
                <Menu.Item>Shop</Menu.Item>
              </NavLink>
              <NavLink to="/" onClick={() => handleLogout(history)}>
                <Menu.Item>Logout</Menu.Item>
              </NavLink>
            </Sidebar>
          </div>
        </>
      );
    } else {
      return (
        <>
          <RightMenu>
            <NavLink to="/store" onClick={() => activateItem(5)}>
              <MenuItem as={isActive(5)}>
                <Item>Shop</Item>
              </MenuItem>
            </NavLink>
            <NavLink to="/login" onClick={() => activateItem(6)}>
              <MenuItem as={isActive(6)}>
                <Item>Login/Register</Item>
              </MenuItem>
            </NavLink>
          </RightMenu>
        </>
      );
    }
  };

  return (
    <NavContainer>
      <NavMenu>
        <MenuItem>
          <Logo src={logo} alt="logo" className="App-logo" />
          <CompanyName>Audio Grenade</CompanyName>
        </MenuItem>
        {centerNavItems()}
        {rightNavItems()}
      </NavMenu>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: absolute;
  top: 0rem;
  width: 100%;
`;

const MenuItem = styled.li`
  float: left;
  font-size: 1.25rem;
`;

const ActiveMenuItem = styled.li`
  float: left;
  font-size: 1.25rem;
  border-bottom: #349dc4;
  border-bottom-width: thin;
  border-bottom-style: solid;
`;

const Item = styled.p`
  display: block;
  color: ${props => props.textColor || "#f2f2f2"};
  text-align: center;
  padding: 10px 16px 5px 16px;
  text-decoration: none;
  z-index: 1;
`;

const SupportLink = styled.a`
  :hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  height: 4rem;
  width: 4rem;
`;

const CompanyName = styled.h1`
  padding-left: 1rem;
  padding-top: 0.3rem;
  color: #f2f2f2 !important;
  font-size: 1.8rem !important;
  border: none;
`;

const NavMenu = styled.ul`
  list-style-type: none;
  margin-left: 6rem;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: space-between;
`;

const RightMenu = styled.div`
  position: relative;
  text-align: center;
  border-bottom: 5px !important;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 2rem 1rem 2rem;
`;

const CenterMenu = styled.div`
  position: relative;
  text-align: center;
  border-bottom: 5px !important;
  display: flex;
  justify-content: center;
  padding: 2rem 2rem 1rem 2rem;
`;

const ConnectedNavbar = props => (
  <AuthConsumer>{value => <Navbar {...props} auth={value} />}</AuthConsumer>
);

export default ConnectedNavbar;
