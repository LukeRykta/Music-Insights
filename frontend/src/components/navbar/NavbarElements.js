import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: black;
  //background: transparent;
  display: flex;
  font-size: 1rem;
  z-index: 10;
  height: 60px;
  border: black 2px solid;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;  
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
  padding-right: 24px;
  margin-bottom: 5px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, .25em);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffffff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }    
`;

export const NavItem = styled.div`
    height: 60px;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 52px;
    cursor: pointer;
  
    &.active {
      border-bottom: 3px solid #01bf71;
    }

    &:hover {
      color: #01bf71;
      transition: 0.3s ease-out;
    }
`;

export const NavBtn = styled.nav`
  display: flex;
  //margin-top: 15px;
  align-items: center;
  padding-left: 14px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LeftWrapper = styled.div`
  width: 100%;
  display: flex;
  
`

export const RightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  margin-bottom: 5px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &.hover {
    transition: all 0.2s ease-in-out;
    background: #ff0000;
    color: #010606;
  }
`