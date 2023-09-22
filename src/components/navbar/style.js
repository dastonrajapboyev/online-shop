import styled from "styled-components";

const Container = styled.div`
  width: 1172px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
Container.Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 21px;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 20px;
    width: 100%;
  }
`;
Container.LogoInfo = styled.div`
  display: flex;
  align-items: center;
`;
Container.LogoImg = styled.img``;
Container.Logotext = styled.h1`
  margin-left: 5px;
  color: #555;
`;
Container.Search = styled.div`
  display: flex;
  @media (max-width: 768px) {
    order: 3;
  }
`;
Container.SearchInput = styled.input`
  width: 403px;
  padding: 8px 0 8px 25px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 2px solid #7ac751;
  border-right: 1px;
  color: #b0b0b0;
  font-size: 14px;
  line-height: normal;
  @media (max-width: 768px) {
    width: 100%;
    padding: 6px 0 6px 15px;
  }
`;
Container.Select = styled.select`
  color: #555;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  border: 2px solid #7ac751;
`;
Container.Option = styled.option``;
Container.SearchBtn = styled.button`
  border-radius: 0px 7px 6px 0px;
  background: #7ac751;
  padding: 13px 14px;
  border: none;
`;
Container.SearchIcon = styled.img``;

Container.Shopping = styled.div`
  display: flex;
  gap: 28px;
`;

Container.ShopIcon = styled.img``;
Container.BellIcon = styled.img``;
Container.UserIcon = styled.img``;

export { Container };
