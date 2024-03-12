import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SubNav = () => {
  return (
    <>
      <Container>
        <Nav>
          <Search>
            <SearchIcon>
              <img src="./images/Search.svg" alt="" />
            </SearchIcon>

            <input type="text" placeholder="Search store" />
          </Search>
          <Wrap>
            <NavLink to={"/"}>Discover</NavLink>

            <NavLink to={"/browse"}>Browse</NavLink>

            <NavLink to={"/news"}>News</NavLink>
          </Wrap>
        </Nav>
        <WC_Container>
          <NavLink to={"/wishlist"}>Wishlist</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
        </WC_Container>
      </Container>
    </>
  );
};

export default SubNav;

const Container = styled.div`
  height: 100px;
  margin: 0px 238px;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Search = styled.div`
  height: 40px;
  width: 230px;
  background-color: #353535;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 8px 0px;
  background-color: #202020;
  input {
    border: none;
    outline: none;
    background: transparent;
    color: rgb(245, 245, 245);

    &::placeholder {
      font-size: 13.3px;
      font-family: var(--inter-font);
      color: #aaaaae;
    }
  }
`;
const SearchIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: transparent;
  border: none;
  margin-left: 12.5px;
  color: #aaaaae;

  img {
    height: 13px;
    width: 13px;
  }
`;

const Wrap = styled.div`
  display: flex;
  gap: 9px;

  .active {
    color: white;
    border: 1px solid white;
  }

  a {
    text-decoration: none;
    color: #aaaaaed6;
    padding: 9px;
    font-size: 16px;
    border-radius: 4px;
    font-weight: 500;
    letter-spacing: 0;
    border: 1px solid rgba(0, 0, 0, 0);
    &:hover {
      color: rgb(245, 245, 245);
    }
  }
`;

const WC_Container = styled(Wrap)`
  margin-right: 11px;
`;
