import React from 'react';

const TodoList = ({ todos, setTodos, setEditTodo }) => {

  const handleComplete = (todo) => {
    setTodos(
      //mapを使用すると配列の各要素に対して繰り返し処理を行い、要素を変更できる
      //item=各要素の値を取り出して、
      todos.map((item) => {
        if (item.id === todo.id) {
          //「...」はスプレッド構文で、配列やオブジェクトを展開したい場合に使用する
          return { ...item, completed: !item.completed }
        }
        return item;
      })
    )
  }
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input type='text'
          value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
              <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
              <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodoList;