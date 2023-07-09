import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/form";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {

  //謎部分①
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  //React hock(関数コンポーネントで扱える)
  //[状態変数, 状態を変更するための関数]と定義する
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  //謎部分②
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (<div className="container">
    <div className="app-wrapper">
      <div>
        <Header />
      </div>
      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo} />
      </div>
    </div>

  </div>);
}

export default App;