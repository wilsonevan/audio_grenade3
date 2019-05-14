import React, { useState, useEffect } from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logos/AG Grenade Only Transparent.svg";
import "./Navbar.css";
import { Button, Icon, Sidebar, Menu, Dropdown } from "semantic-ui-react";
import { GlobalSizes, GlobalColors } from "../styles/GlobalStyles";

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
      </>
    );
  };

  const rightNavItems = () => {
    return (
      <>
        <RightMenu>
          <MenuItem as={isActive(5)}>
            <SupportLink
              href="https://audio-grenade.mybigcommerce.com/"
              // target="_blank"
            >
              <Item>Shop</Item>
            </SupportLink>
          </MenuItem>
        </RightMenu>
      </>
    );
  };

  const compactNavMenu = () => {
    return (
      <>
        <CompactNavContainer>
          <Dropdown
            button
            className="icon"
            size="huge"
            direction="left"
            fluid
            icon="bars"
          >
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to="/">
                  {/* <MenuItem as={isActive(1)} onClick={() => activateItem(1)}> */}
                  <Item textColor={GlobalColors.PrimaryGrey}>Home</Item>
                  {/* </MenuItem> */}
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/how-it-works">
                  {/* <MenuItem as={isActive(2)} onClick={() => activateItem(2)}> */}
                  <Item textColor={GlobalColors.PrimaryGrey}>How It Works</Item>
                  {/* </MenuItem> */}
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/gifts">
                  {/* <MenuItem as={isActive(3)} onClick={() => activateItem(3)}> */}
                  <Item textColor={GlobalColors.PrimaryGrey}>
                    Corporate Gifts
                  </Item>
                  {/* </MenuItem> */}
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/contact">
                  {/* <MenuItem as={isActive(4)} onClick={() => activateItem(4)}> */}
                  <Item textColor={GlobalColors.PrimaryGrey}>Contact Us</Item>
                  {/* </MenuItem> */}
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                {/* <MenuItem> */}
                <SupportLink
                  href="https://audio-grenade.freshdesk.com/support/home"
                  target="_blank"
                >
                  <Item textColor={GlobalColors.PrimaryGrey}>Support</Item>
                </SupportLink>
                {/* </MenuItem> */}
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <SupportLink
                  href="https://audio-grenade.mybigcommerce.com/"
                  // target="_blank"
                >
                  {/* <MenuItem> */}
                  <Item textColor={GlobalColors.PrimaryGrey}>Shop</Item>
                  {/* </MenuItem> */}
                </SupportLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </CompactNavContainer>
      </>
    );
  };

  return (
    <NavContainer>
      <NavMenu>
        <MenuItem>
          <Logo src={logo} alt="logo" className="App-logo" />
          <CompanyName>Audio Grenade</CompanyName>
        </MenuItem>
        {compactNavMenu()}
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

const CompactNavContainer = styled.div`
  display: none;
  position: absolute;
  top: 2rem;
  right: 2rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    display: inline;
  }
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
  padding: 2rem 2rem 1rem 0rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    display: none;
  }
`;

const CenterMenu = styled.div`
  position: relative;
  text-align: center;
  border-bottom: 5px !important;
  display: flex;
  justify-content: center;
  padding: 2rem 2rem 1rem 2rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    display: none;
  }
`;

const ConnectedNavbar = props => (
  <AuthConsumer>{value => <Navbar {...props} auth={value} />}</AuthConsumer>
);

export default ConnectedNavbar;
