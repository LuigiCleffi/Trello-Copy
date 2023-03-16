import { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { Pencil, Trash, X, Check } from "phosphor-react";
import Draggable from "react-draggable";
import { EditableInputHandle, EditableInputWrapper } from "./styles";

interface EditableInputProps {
  id?: string;
  initialValue: string;
  onDelete?: () => void;
  onUpdate?: (value: string) => void;
  onCreate?: (value: string) => void;
}

function EditableInput({initialValue,onDelete}: EditableInputProps): JSX.Element {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (): void => {
    setValue("");
    setIsEditing(true);
  };

  const handleSaveClick = (): void => {
    setIsEditing(false);
  };

  const handleCancelClick = (): void => {
    setValue(initialValue);
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleDeleteClick = (): void => {
    if (onDelete) {
      onDelete();
    }
  };


  return (
    <Draggable>
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
                    className="mx-2"
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
    </Draggable>
  );
}

export default EditableInput;
