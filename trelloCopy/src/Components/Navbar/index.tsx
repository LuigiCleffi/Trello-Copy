import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CaretDown, MapTrifold} from 'phosphor-react';
import {  BoardArea, Pipe, StarButton, UserArea, Brand, ArrowDown } from './styles';
import { User } from 'phosphor-react';

export function NavbarTrello() {
  return (
    <Navbar expand="lg">
        
        
        <Brand className="text-light" href="#home">Todo List</Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <StarButton size={25} /> 
            <Pipe>|</Pipe>  
            <UserArea>
              <User size={16} /> 
              <Nav.Link href="#link">Visível à Área de trabalho</Nav.Link> 
            </UserArea>
            <Pipe>|</Pipe>  
            <BoardArea className="bg-light">
            <MapTrifold size={16} />
              <Nav.Link href="#link" className='text-dark'>Quadro</Nav.Link> 
            </BoardArea>

            <ArrowDown size={25} />

          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}
