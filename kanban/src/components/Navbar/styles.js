import { Navbar } from 'react-bootstrap';
import styled from "styled-components";
import { CaretDown, Star } from 'phosphor-react';
import { Nav } from "react-bootstrap";

const buttonStyles = `
  padding: 6px;
  background-color: rgba(200, 200, 200, 0.5);
  color: #ffff;
  border-radius: 5px;
  height: 30px; 
  display: flex;
  justify-content: center;
  align-items: center; 


  &:hover {
    transition: color 0.8s;
    cursor: pointer;
    background-color: rgba(240, 240, 240, 0.5);
    color: #DEC400;
    transform: scale(1.1);
  }

`;

export const Pipe = styled.span`
    margin: 0 8px;
`
export const StarButton = styled(Star)`
  ${buttonStyles}
`;

export const ArrowDown = styled(CaretDown)`
  ${buttonStyles}
  margin: 0 8px;

`;
export const BoardArea = styled.div`
  ${buttonStyles}
  font-weight: bold;
  color: #000;

  svg{
  color: #000;
  &:hover{
    transition: scale 0.3s;
    transform: scale(1.1);
  }
  }

`;
export const NavArea = styled(Nav)`
 display: flex;
 justify-content: center;
 align-items: center; 
`;
export const Brand = styled(Navbar.Brand)`
color: #fff;
font-weight: bold;
font-size: 20px; 
`;

export const UserArea = styled.div`
  ${buttonStyles}
  padding: 12px;
  font-size: 12px;
  color: #fff;
`;
