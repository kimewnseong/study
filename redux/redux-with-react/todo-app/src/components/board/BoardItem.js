import styled from "styled-components";

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: white;
  :hover {
    background-color: #eeeeee;
  }
  ${(props) => props._isSelected && `background-color: #dddddd`}
`;

function BoardItem(props) {
  const { board, isSelected, onSelect, onDelete } = props;

  return (
    <Wrapper _isSelected={isSelected} onClick={onSelect}>
      {board.title}

      <button
        onClick={(e) => {
          e.stopPropagation();
          if (window.confirm("보드를 삭제하시겠습니까?")) {
            onDelete();
          }
        }}
      >
        삭제
      </button>
    </Wrapper>
  );
}

export default BoardItem;
