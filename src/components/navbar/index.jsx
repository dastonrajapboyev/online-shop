import React from "react";
import { Container } from "./style";
// icons
import Logo from "../../assets/navbar-img/Logo.svg";
import Search from "../../assets/navbar-img/search.svg";
import Shop from "../../assets/navbar-img/Shop.svg";
import Bell from "../../assets/navbar-img/bell.svg";
import User from "../../assets/navbar-img/user-icon.svg";

const Navbar = () => {
  return (
    <Container>
      <Container.Nav>
        <Container.LogoInfo>
          <Container.LogoImg src={Logo} alt="image" />
          <Container.Logotext>Furniking</Container.Logotext>
        </Container.LogoInfo>

        <Container.Search>
          <Container.SearchInput placeholder="search here" />
          <Container.Select>
            <Container.Option>Categories</Container.Option>
            <Container.Option>Table</Container.Option>
            <Container.Option>Chair</Container.Option>
          </Container.Select>
          <Container.SearchBtn>
            <Container.SearchIcon src={Search} alt="search-icon" />
          </Container.SearchBtn>
        </Container.Search>

        <Container.Shopping>
          <Container.ShopIcon src={Shop} alt="Shop-icon" />
          <Container.BellIcon src={Bell} alt="bell-icon" />
          <Container.UserIcon src={User} alt="user-icon" />
        </Container.Shopping>
      </Container.Nav>
    </Container>
  );
};

export default Navbar;
