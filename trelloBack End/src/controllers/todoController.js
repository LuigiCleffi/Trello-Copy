import todos from "../models/todoModel.js";

class TodosController{

    static listTodo = (req, res) => {
        todos.find({})
        .exec()
        .then(todosInfo => {
            res.status(200).send(todosInfo)
          })
          .catch(err => {
            res.status(500).send({message: err.message})
          })
    }

    static createTodo = (req, res) => {
        let todo = new todos(req.body)
    
        todo.save()
            .then(function(result) {
                res.status(201).send(result.toJSON())
            })
            .catch(function(err) {
                return res.status(500).send({message: `Erro ao criar sua tarefa: ${err.message}`})
            });
    }
    
    static updateTodo = (req, res) => {
        const {id} = req.params 
        todos.findByIdAndUpdate(id, {$set: req.body})
            .then(() => {
                res.status(200).send({message: "Todo atualizado com sucesso"})
            })
            .catch((err) => {
                res.status(500).send({message: err.message})
            })
    } 
    
    static deleteTodo = (req, res) => {
        const { id } = req.params;
        todos.findByIdAndDelete(id)
          .then(() => {
            res.status(200).send({ message: "Todo excluído com sucesso" });
          })
          .catch((err) => {
            res.status(500).send({ message: err.message });
          });
      };
      
    
    
}

export default TodosController;
