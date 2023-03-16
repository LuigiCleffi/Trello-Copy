import express from "express"
import TodosController from "../controllers/todoController.js";

const router = express.Router()

router
    .get("/todos", TodosController.listTodo)
    .post("/todos", TodosController.createTodo)
    .put("/todos/:id", TodosController.updateTodo)
    .delete("/todos/:id", TodosController.deleteTodo)

export default router;