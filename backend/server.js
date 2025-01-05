const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const routes=require("./routes/ToDoRoute")

require('dotenv').config()

const app=express();
const PORT=process.env.port || 5000


app.use(cors(
  {
    origin:["https://fullstack-todo-frontend-eight.vercel.app"],
    methods:["POST","GET"],
    credentials:true
  }
));
app.use(express.json());

mongoose.connect('mongodb+srv://Rishabh:rishabh1259@cluster0.zxqft.mongodb.net/ToDoApp?retryWrites=true&w=majority&appName=Cluster0')

app.use(routes);

app.listen(PORT,()=>{
  console.log(`app is listening on ${PORT}`)
})
