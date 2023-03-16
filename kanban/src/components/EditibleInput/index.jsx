import { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { Pencil, Trash, X, Check } from "phosphor-react";
import { EditableInputHandle, EditableInputWrapper } from "./styles";


export function EditableInput({initialValue,onDelete}) {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setValue("");
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  const handleChange = (evt) => {
    const newChange = evt.target.value
    setValue(newChange);
  };

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete();
    }
  };


  return (
    
      <EditableInputWrapper>
        <EditableInputHandle>
          <InputGroup>
            <FormControl
              value={value}
              onChange={handleChange}
              readOnly={!isEditing}
            />
            <Form.Group>
              {isEditing ? (
                <>
                  <Button
                    variant="success"
                    className="mx-1"
                    onClick={handleSaveClick}
                  >
                    <Check size={12} />
                  </Button>
                  <Button variant="secondary" onClick={handleCancelClick}>
                    <X size={12} />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="dark"
                    className="mx-2"
                    onClick={handleEditClick}
                  >
                    <Pencil />
                  </Button>
                  {onDelete && (
                    <Button variant="danger" onClick={handleDeleteClick}>
                      <Trash />
                    </Button>
                  )}
                </>
              )}
            </Form.Group>
          </InputGroup>
        </EditableInputHandle>
      </EditableInputWrapper>
  );
}


