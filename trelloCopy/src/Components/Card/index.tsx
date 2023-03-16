import { Card, Button } from "react-bootstrap";
import { AddCardButton, Container, Title } from "./styles";
import EditableInput from "./component/EditibleInput";
import { useState } from "react";
import { Plus, Image } from "phosphor-react";

interface ICardContainer {
  title: string;
}

export function CardContainer({ title }: ICardContainer): JSX.Element {
  const [inputs, setInputs] = useState<string[]>([]);

  const handleAddInputClick = () => {
    setInputs([...inputs, "New Input"]);
  };

  const handleInputDelete = (index: number) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Card.Body>
        <Title className="font-weight-bold">{title}</Title>
        {inputs.map((initialValue, index) => (
          <div key={index}>
            <EditableInput
              
              initialValue={initialValue}
              onDelete={() => handleInputDelete(index)}
            />
          </div>
        ))}
        <AddCardButton className="mt-4 w-100" variant="bg-light" onClick={handleAddInputClick}>
          <div>
          <Plus size={20} />  Adicionar um cartão    
          </div>
        <Image size={20} />
        </AddCardButton>
      </Card.Body>
    </Container>
  );
}
