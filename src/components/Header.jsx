import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";

const Header = () => {
  return (
    <Container>
      <Nav>
        <LogoBtn>
          <img src="/images/EpicLogo.svg" alt="" />
          <DropdownBtn>
            <IoIosArrowDown />
          </DropdownBtn>
        </LogoBtn>
        <VerticalLine>
          <img src="/images/Line.svg" alt="" />
        </VerticalLine>
        <StoreImg>
          <img src="/images/Store.svg" alt="" />
        </StoreImg>

        <Wrap>
          <Link>Distribution</Link>
          <Link>Support</Link>
          <Link>Unreal Engine</Link>
        </Wrap>
      </Nav>
      <LPD>
        <Language>
          <RiGlobalLine />
        </Language>
        <Profile>
          <IoPersonOutline />
        </Profile>
        <Download>Download</Download>
      </LPD>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #18181c;
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 24px;
`;
const LogoBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 9.2px;
`;

const DropdownBtn = styled.div`
  font-size: 17px;
  color: #b3b3b3;
  padding-top: 5px;
`;

const VerticalLine = styled.div`
  height: 32px;
  width: 2px;

  margin: 0px 24px 0px 18px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const StoreImg = styled.div`
  height: 32px;
  width: 54px;

  img {
    height: 100%;
    width: 100%;
  }
`;
const Wrap = styled.div`
  display: flex;
  gap: 2px;
  margin-left: 16.5px;
  align-items: center;

  a {
    text-decoration: none;
    color: #aaaaae;
    font-family: var(--inter-font);

    font-weight: 400;

    padding: 5px 15px 5px 15px;

    line-height: 150%;
    font-size: 0.875rem;
    letter-spacing: 0.02em;
    transition: color var(--easing-duration, 0.2s)
        var(--easing, cubic-bezier(0.65, 0, 0.35, 1)),
      background-color var(--easing-duration, 0.2s)
        var(--easing, cubic-bezier(0.65, 0, 0.35, 1));
    border-radius: 0.5rem;
    &:hover {
      background-color: #404044;

      color: #e6e6ea;
    }
  }
`;

const LPD = styled.div`
  margin-right: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Language = styled.button`
  height: 30px;
  width: 30px;
  color: #e0e0e0aa;
  background: transparent;
  border: none;
  outline: none;
  font-size: 24px;
  display: flex;
  align-items: center;
`;
const Profile = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #272727;
  border: none;
  outline: none;
  color: #e0e0e0aa;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  object-fit: contain;
`;
const Download = styled.button`
  background: #26bbff;

  border: none;
  padding: 7.5px 12px;

  border-radius: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  color: #1b1b1b;
  font-family: var(--inter-font);
  display: flex;
`;
