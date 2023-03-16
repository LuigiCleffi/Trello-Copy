import { Button, Card } from "react-bootstrap";
import styled from "styled-components";

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
