import express  from "express";
import todos from "./todoRoute.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: "Todo App, welcome !"})
    })

    app.use(
        express.json(),
        todos
    )
}

export default routes