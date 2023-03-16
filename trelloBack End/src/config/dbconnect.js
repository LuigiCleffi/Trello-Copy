import mongoose from "mongoose";
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://luigi:GKO7I19pOl2NSuU3@cluster0.hjpax1r.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })

let db = mongoose.connection

export default db