import styled from "styled-components";

const Container = styled.div`
  /* background-color: #f7f8fa; */
  `;
// navigation
Container.Navigation = styled.div`
  margin-top: 25px;
  background-color: #f7f8fa;
  `;
Container.NavigationNav = styled.div`
  display: flex;
  align-items: center;
  width: 1172px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
  `;
  //heroNavbar
  Container.HeroNavbar = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  padding-left: 17px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
    gap: 4px;
    order: 1;
  }
`;

Container.HeroLink = styled.p`
  margin-left: 65px;
  @media (max-width: 768px) {
    margin: 0;
    font-size: 14px;
  }
`;


Container.Sidebar = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

Container.HeroWrapper = styled.div`
  width: 1172px;
  margin: 0px auto 25px auto;
  /* display: flex; */
  @media (max-width: 768px){
    width: 100%;
  }
`;
Container.Hero = styled.div`
  display: flex;
  @media (max-width: 768px){
    width: 100%;
  }
`;
Container.HeroLeftSide = styled.div``;
Container.HeroRightSide = styled.div`
  width: 899px;
  @media (max-width: 768px){
    width: 100%;
  }
`;
// sidebar
Container.SidebarHeader = styled.div`
  width: 312px;
  display: flex;
  align-items: center;
  background: #7ac751;
  color: #fff;
  padding: 23px 40px 23px 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 200px;
    gap: 10px;
    order: 2;
    padding: 13px 20px 13px 20px;
  }
`;
Container.SidebarIcon = styled.img``;
Container.SidebarTitle = styled.h3`
  font-size: 16px;
`;
Container.SidebarLink = styled.div`
  padding-top: 10px;
  width: 260px;
  background-color: #f7f8fa;
`;

Container.SidebarCollection = styled.p`
  color: #555;
  padding: 10px 0 14px 29px;
  cursor: pointer;
`;



// heroContent
Container.HeroContent = styled.div`
  /* width: 899px; */
  width: 100%;
  margin: 12px 0 0 11px;
  display: flex;
  border-radius: 1px;
  background: linear-gradient(
    103deg,
    rgba(241, 250, 255, 0.88) 0.89%,
    #f1faff 101.61%
  );
  backdrop-filter: blur(77.5px);
  @media (max-width: 768px){
    flex-direction: column;
    width: 100%;
  }
`;

Container.HeroInfo = styled.div`
  padding: 73px 0 0 47px;
`;
Container.HeroSubTitle = styled.h1`
  color: #7ac751;
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 1.1px;
`;
Container.HeroTitle = styled.h1`
  width: 318px;
  color: #2f2f2f;
  font-size: 40px;
  font-weight: 500;
  line-height: normal;
  margin-top: 6px;
`;
Container.HeroText = styled.h2`
  color: rgba(81, 81, 81, 0.71);
  font-size: 27px;
  font-weight: 600;
  line-height: 26px;
  margin-top: 29px;
`;
Container.HeroButton = styled.button`
  border-radius: 5px;
  background: #7ac751;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  padding: 10px 18px;
  border: none;
  margin-top: 35px;
`;

Container.HeroImage = styled.img`
  margin-top: 36px;
  @media (max-width: 768px){
    width: 70%;
    margin: 0 auto;
  }
`;

// -----------------------
Container.HeroAlbum = styled.div`
  padding-bottom: 58px;
  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

Container.AlbumCard = styled.div`
  width: 98px;
  height: 91px;
  text-align: center;
  margin-top: 58px;
  border-radius: 8px;
  border: 2px solid #fff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.56) 100%
  );
  box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0);

  @media (max-width: 768px){
    height: 168px;
  }
`;
Container.AlbumCardImg = styled.img`
  padding-top: 5px;
  @media (max-width: 768px){
    width: 80px;
    height: 100px;
    object-fit: cover;
  }
`;
Container.AlbumCardPrice = styled.p`
  color: #7ac751;
  font-size: 7px;
  font-style: normal;
  font-weight: 500;
  @media (max-width: 768px){
    font-size: 14px;
  }
`;
Container.AlbumCardTitle = styled.p`
  color: #555;
  font-family: Rubik;
  font-size: 7px;
  font-weight: 500;
  margin-top: 6px;
  @media (max-width: 768px){
    font-size: 14px;
  }
`;

export { Container };
