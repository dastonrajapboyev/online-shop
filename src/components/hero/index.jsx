import React from "react";
import { Container } from "./style";

import SidebarIcon from "../../assets/sidebar-icon/menu 1.svg";
import HeroImage1 from "../../assets/hero-img/hero 1.png";
import HeroImage2 from "../../assets/hero-img/hero2.png";
import HeroImage3 from "../../assets/hero-img/hero3.png";
import HeroImage4 from "../../assets/hero-img/hero4.png";


const Hero = () => {
  return (
    <Container>
      <Container.Navigation>
        <Container.NavigationNav>
          <Container.SidebarHeader>
            <Container.SidebarIcon src={SidebarIcon} />
            <Container.SidebarTitle>ALL COLLECTIONS</Container.SidebarTitle>
          </Container.SidebarHeader>
          <Container.HeroNavbar>
            <Container.HeroLink>HOME</Container.HeroLink>
            <Container.HeroLink>SHOP</Container.HeroLink>
            <Container.HeroLink>BLOG</Container.HeroLink>
            <Container.HeroLink>ABOUT</Container.HeroLink>
            <Container.HeroLink>CONTACT US</Container.HeroLink>
          </Container.HeroNavbar>
        </Container.NavigationNav>
      </Container.Navigation>
      <Container.HeroWrapper>
        <Container.Hero>
          <Container.HeroLeftSide>
            <Container.Sidebar>
              <Container.SidebarLink>
                <Container.SidebarCollection>All</Container.SidebarCollection>
                <hr />
                <Container.SidebarCollection>
                  New Arrivals
                </Container.SidebarCollection>
                <hr />
                <Container.SidebarCollection>
                  Hot Sale
                </Container.SidebarCollection>
                <hr />
                <Container.SidebarCollection>
                  Furniture
                </Container.SidebarCollection>
                <hr />
                <Container.SidebarCollection>
                  Amrature
                </Container.SidebarCollection>
                <hr />
                <Container.SidebarCollection>
                  Tabble
                </Container.SidebarCollection>
                <hr />
                <Container.SidebarCollection>Chair</Container.SidebarCollection>
                <hr />
                <Container.SidebarCollection>Sofa</Container.SidebarCollection>
                <hr />
                <Container.SidebarCollection>
                  Mirrors
                </Container.SidebarCollection>
                <hr />
                <Container.SidebarCollection>
                  Stools
                </Container.SidebarCollection>
                <hr />
                <Container.SidebarCollection>
                  Benches
                </Container.SidebarCollection>
                <hr />
              </Container.SidebarLink>
            </Container.Sidebar>
          </Container.HeroLeftSide>
          <Container.HeroRightSide>
            <Container.HeroContent>
              <Container.HeroInfo>
                <Container.HeroSubTitle>
                  TOP COLLECTIONS 2022
                </Container.HeroSubTitle>
                <Container.HeroTitle>
                  We Serve Your Dream Furniture
                </Container.HeroTitle>
                <Container.HeroText>
                  Get 50% off all products
                </Container.HeroText>
                <Container.HeroButton>SHOP NOW</Container.HeroButton>
              </Container.HeroInfo>
              <Container.HeroImage src={HeroImage1} alt="hero image" />
              <Container.HeroAlbum>
                <Container.AlbumCard>
                  <Container.AlbumCardImg src={HeroImage2} />
                  <Container.AlbumCardPrice>$120</Container.AlbumCardPrice>
                  <Container.AlbumCardTitle>
                    Office Desk Chair
                  </Container.AlbumCardTitle>
                </Container.AlbumCard>
                <Container.AlbumCard>
                  <Container.AlbumCardImg src={HeroImage3} />
                  <Container.AlbumCardPrice>$180</Container.AlbumCardPrice>
                  <Container.AlbumCardTitle>
                    Home Alisa Sofa
                  </Container.AlbumCardTitle>
                </Container.AlbumCard>
                <Container.AlbumCard>
                  <Container.AlbumCardImg src={HeroImage4} />
                  <Container.AlbumCardPrice>$250</Container.AlbumCardPrice>
                  <Container.AlbumCardTitle>
                    Modern Chair
                  </Container.AlbumCardTitle>
                </Container.AlbumCard>
              </Container.HeroAlbum>
            </Container.HeroContent>
          </Container.HeroRightSide>
        </Container.Hero>
      </Container.HeroWrapper>
    </Container>
  );
};

export default Hero;
