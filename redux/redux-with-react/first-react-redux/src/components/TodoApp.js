import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../redux/slices/todoSlice";

function TodoApp(props) {
  const [newTodo, setNewTodo] = useState("");
  const todoItems = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>오늘 할 일</h3>
      <ul>
        {todoItems.map((todo, idx) => {
          return <li key={idx}>{todo}</li>;
        })}
      </ul>

      <div>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button
          onClick={() => {
            dispatch(addTodoActionCreator(newTodo));
            setNewTodo("");
          }}
        >
          할 일 추가
        </button>
        <button onClick={() => dispatch(removeTodoActionCreator())}>
          할 일 삭제
        </button>
        <button onClick={() => dispatch(removeAllActionCreator())}>
          모두 삭제
        </button>
      </div>
    </div>
  );
}

export default TodoApp;
