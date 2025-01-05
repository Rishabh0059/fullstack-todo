const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const routes=require("./routes/ToDoRoute")

require('dotenv').config()

const app=express();
const PORT=process.env.port || 5000

app.use(express.json());
app.use(cors(
  {
    origin:["https://fullstack-todo-frontend-eight.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
  }
));

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("connection successfully"))
.catch((err)=>console.log(err))

app.use(routes);

app.listen(PORT,()=>{
  console.log(`app is listening on ${PORT}`)
})
