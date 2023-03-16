import {  Button, Card, InputGroup } from "react-bootstrap";
import styled from "styled-components";


export const FormGroup = styled(InputGroup)`
  display: flex;
  flex-direction: row;
`

export const EditableInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditableInputHandle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  border: 3px solid #ccc;
  background-color: #f1f1f1;
  cursor: grab;
  border-radius: 8px;

  &:active {
    cursor: grabbing;
  }
`;

export const Title = styled(Card.Title)`
    font-weight: bold;
` 
export const Container = styled(Card)`
    width: 21.5rem;
` 
export const AddCardButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    &:hover{
    transition: all 0.3s;
    background-color: rgba(180,180,180, 0.5);
    transform: scale(1.06);
    }
` 
