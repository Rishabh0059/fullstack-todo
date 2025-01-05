import { useState } from "react"
import ToDo from "./components/ToDo"
import { useEffect } from "react"
import { addToDo, deleteTodo, getAllToDo, updateTodo } from "./utils/HandleApi"
import ErrorMessgae from "./components/ErrorMessgae"



function App() {
 
  const [toDo,setToDo]=useState([])
  const [text,setText]=useState("")
  const [isUpdating,setIsUpdating]=useState(false);
  const [toDoId,setToDoId]=useState("");

  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode=(_id,text)=>{
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }

  return (
    <>
     <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDos" value={text} onChange={(e)=> setText(e.target.value)}></input>

          <div className="add" onClick={isUpdating ? ()=> updateTodo(toDoId,text,setToDo,setText,setIsUpdating) : ()=> addToDo(text,setText,setToDo)}>{isUpdating ? "Update" :"Add"}</div>
        </div>

        <div className="list">
          {toDo.length===0 && <ErrorMessgae/>}
          {toDo.map((item)=><ToDo key={item._id} text={item.text}
          updateMode={()=>updateMode(item._id,item.text)}
          deleteTodo={()=>deleteTodo(item._id,setToDo)}></ToDo>)}
          
        </div>

      </div>

     </div>
    </>
  )
}

export default App
