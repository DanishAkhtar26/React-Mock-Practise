App.js File Content : 

import React, {useState} from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [editList, setEditList] = useState(null);
  const [editInput, setEditInput] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodos = {
      id: new Date().getTime(),
      text: input
    };
    setList([...list].concat(newTodos));
    setInput("");
  };

  const deleteTodo = (id)=>{
    const newList = list.filter((todo)=>todo.id!== id);
    setList(newList);
  }

  const saveTodo = (id)=>{
    const updateTodos = [...list].map((todo)=>{
      if(todo.id === id){
        todo.text = editInput;
      }
      return todo;
    });
    setList(updateTodos);
    setEditInput("");
    setEditList(null);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <span>  </span>
        <button>Submit</button>
      </form>
      <ol>
      {list.map((todo) => (
          <li key={todo.id}>
            {editList === todo.id ? (
              <span>
                <input
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
              </span>
            ) : (
              <span>{todo.text}     </span>
            )}

            <span>
            <button onClick={() => setEditList(todo.id)}>Edit</button>
            <span>   </span>
              {editList ? (
                <button onClick={() => saveTodo(todo.id)}>save</button>
              ) : (
                ""
              )}
              <button onClick={() => deleteTodo(todo.id)}>&times; Remove</button>
            </span>
          </li>
        ))}
      </ol>

    </div>
  );
}

