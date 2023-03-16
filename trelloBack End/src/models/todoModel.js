import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        id: { type: String },
        item: {type: String, required: true},
        status: {
            type: String,
            enum: ['Todo', 'Doing', 'Done'],
            default: 'A fazer'
        },
        createdAt: { type: Date, default: Date.now }
    },
    {
        versionKey: false
    });


const todos = mongoose.model('todos', TodoSchema)

export default todos