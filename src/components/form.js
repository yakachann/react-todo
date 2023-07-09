import React, {useEffect} from 'react' //Reactライブラリからインポート
import { v4 as uuidv4 } from 'uuid'; //uuidライブラリからインポート。v4関数は一意のIDを生成するために使用。

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  //useEffect()は「関数の実行タイミングをReactのレンダリング後まで遅らせるhock」
  //第一引数に「実行させたい副作用関数」を記述、第二引数に「副作用関数の実行タイミングを制御する依存データ」を記述
  useEffect(() => {
    if(editTodo){
      setInput(editTodo.title);
    }else{
      setInput("");
    }
  }, [setInput, editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    //preventDefaultとはform要素に送信先が指定されていない場合、現在のURLに対してフォームの内容を送信する
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='text' placeholder='Enter a Todo...' className='task-input' value={input} required onChange={onInputChange} />
        <button className='button-add' type='submit'>
          {editTodo ? "OK" : "Add"}
        </button>
      </form>

    </div>
  )
}
//他のファイルで呼び出すために公開
export default Form;