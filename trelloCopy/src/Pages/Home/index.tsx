import { Container } from "react-bootstrap";
import { CardContainer } from "../../Components/Card";
import { NavbarTrello } from "../../Components/Navbar";
import { KanbanContainer } from "./styles";
export function Home() {
  return (
    <Container>
      <NavbarTrello />
      <KanbanContainer>
        <CardContainer title="Todo" />
        <CardContainer title="Doing" />
        <CardContainer title="Done" />
      </KanbanContainer>
    </Container>
  );
}
