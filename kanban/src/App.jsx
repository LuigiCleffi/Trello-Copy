import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Container } from "react-bootstrap";
import { NavbarTrello } from "./components/Navbar";
import { v4 } from "uuid";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Image, Plus } from "phosphor-react";
import { AddCardButton } from "./components/EditibleInput/styles";
import { EditableInput } from "./components/EditibleInput";

const initialItems = [
  { id: v4(), content: "Conteúdo 1" },
  { id: v4(), content: "Conteúdo 2" },
  { id: v4(), content: "Conteúdo 3" },
];

const initialColumns = [
  {
    name: "To do",
    id: v4(),
    items: initialItems,
  },
  {
    name: "Doing",
    id: v4(),
    items: [],
  },
  {
    name: "Done",
    id: v4(),
    items: [],
  },
];

function App() {
  const [columns, setColumns] = useState(initialColumns);
  const [selectedColumn, setSelectedColumn] = useState(null);
  
  const handleAddCard = (columnId) => {
    setSelectedColumn(columnId);
  };

  const handleCancelAddCard = () => {
    setSelectedColumn(null);
  };

  const handleSaveCard = (columnId, content) => {
    const newCard = { id: v4(), content };
    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          items: [...column.items, newCard],
        };
      } else {
        return column;
      }
    });
    setColumns(newColumns);
    setSelectedColumn(null);
  };

  const onDragEnd = (result) => {
    let sourceColumnItems = [];
    let destinationColumnItems = [];
    let draggedItem = {};

    let sourceColumnId = 0;
    let destinationColumnId = 0;

    for (let i in columns) {
      if (columns[i].id == result.source.droppableId) {
        sourceColumnItems = columns[i].items;
        sourceColumnId = i;
      } else if (columns[i].id == result.destination.droppableId) {
        destinationColumnItems = columns[i].items;
        destinationColumnId = i;
      }
    }

    for (let i in sourceColumnItems) {
      if (sourceColumnItems[i].id == result.draggableId) {
        draggedItem = sourceColumnItems[i];
      }
    }
    // Excluí o objeto arrastado.
    let filteredSourceColumnItems = sourceColumnItems.filter(
      (item) => item.id != result.draggableId
    );

    // Adicionar o mesmo na nova posição.
    if (result.source.droppableId == result.destination.droppableId) {
      filteredSourceColumnItems.splice(
        result.destination.index,
        0,
        draggedItem
      );

      // Mudar o state
      let columnsCopy = JSON.parse(JSON.stringify(columns));
      columnsCopy[sourceColumnId].items = filteredSourceColumnItems;
      setColumns(columnsCopy);
    } else {
      destinationColumnItems.splice(result.destination.index, 0, draggedItem);
      // Mudar o state
      let columnsCopy = JSON.parse(JSON.stringify(columns));
      columnsCopy[sourceColumnId].items = filteredSourceColumnItems;
      columnsCopy[destinationColumnId].items = destinationColumnItems;
      setColumns(columnsCopy);
    }
  };

  return (
    <Container>
      <NavbarTrello />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((column) => (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={column.id}
            >
              <Droppable droppableId={column.id} key={column.id}>
                {(provided) => (
                  <Box {...provided.droppableProps}>
                    <Box
                      style={{
                        backgroundColor: "#ebebf1",
                        width: 400,
                        height: "fit-content",
                        padding: 15,
                        margin: 10,
                      }}
                    >
                      <Typography fontWeight='bold' variant="h4">{column.name}</Typography>
                      <Box ref={provided.innerRef} width="100%" height="100%">
                        {column.items.map((item, index) => (
                          <Draggable
                            draggableId={item.id}
                            index={index}
                            key={item.id}
                          >
                            {(provided) => (
                              <Box
                                marginBottom={1}
                                elevation={2}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{...provided.draggableProps.style}}
                              >
                                <EditableInput initialValue={item.content} />
                              </Box>
                            )}
                          </Draggable>
                        ))}

                        {selectedColumn === column.id && (
                          <EditableInput
                            onCancel={handleCancelAddCard}
                            onSave={(content) =>
                              handleSaveCard(column.id, content)
                            }
                          />
                        )}
                      </Box>
                      {provided.placeholder}
                      <AddCardButton
                        className="mt-4 w-100"
                        variant="bg-light"
                        onClick={() => handleAddCard(column.id)}
                      >
                        <div>
                          <Plus size={20} /> Adicionar um cartão
                        </div>
                        <Image size={20} />
                      </AddCardButton>
                    </Box>
                  </Box>
                )}
              </Droppable>
            </Box>
          ))}
        </DragDropContext>
      </Box>
    </Container>
  );
}

export default App;
