import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleFinishTodo, deleteTodo } from "../../redux/slices/todoSlice";
import TodoItem from "./TodoItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

function TodoList() {
  const selectedBoardId = useSelector((state) => state.board.selectedBoardId);
  const selectedBoardTodos = useSelector(
    (state) => state.todo.boardTodosMap[selectedBoardId]
  );

  const dispatch = useDispatch();

  if (!selectedBoardTodos) {
    return null;
  }

  return (
    <Wrapper>
      {selectedBoardTodos.map((todo, idx) => {
        return (
          <TodoItem
            key={idx}
            todo={todo}
            onFinish={(e) => {
              e.stopPropagation();

              dispatch(
                toggleFinishTodo({ boardId: selectedBoardId, todoId: todo.id })
              );
            }}
            onDelete={(e) => {
              e.stopPropagation();

              dispatch(
                deleteTodo({
                  boardId: selectedBoardId,
                  todoId: todo.id,
                })
              );
            }}
          />
        );
      })}
    </Wrapper>
  );
}

export default TodoList;
