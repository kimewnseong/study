import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../redux/slices/todoSlice";

const Wrapper = styled.div`
  padding: 16px;
`;

const StyledInput = styled.input`
  padding: 16px;
`;

const StyledButton = styled.button`
  padding: 16px;
`;

function TodoMenu() {
  const selectedBoardId = useSelector((state) => state.board.selectedBoardId);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");

  return (
    <Wrapper>
      <StyledInput
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <StyledButton
        onClick={() => {
          if (newTodo === "") {
            alert("추가 할 할 일을 입력해주세요.");
            return;
          }
          dispatch(addTodo({ boardId: selectedBoardId, todo: newTodo }));
          setNewTodo("");
        }}
      >
        할 일 추가하기
      </StyledButton>
    </Wrapper>
  );
}

export default TodoMenu;
