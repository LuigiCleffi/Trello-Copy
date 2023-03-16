import { FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import Draggable from 'react-draggable';


export const FormGroup = styled(InputGroup)`
    margin-top: 15px!important;
`
export const DraggableBehave = styled(Draggable)`
    cursor: move;
    background-color: #eee;
    padding: 5px;
    border: 1px solid #ddd;
  
`

export const EditableInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
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