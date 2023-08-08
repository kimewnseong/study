import { connect } from "react-redux";
import {
  removeTodoActionCreator,
  removeAllActionCreator,
} from "../ducks/todoDuck";
import addTodoThunkActionCreator from "../thunks/addTodoThunk";
import TodoApp from "../../components/TodoApp";

function mapStateToProps(state, ownProps) {
  return {
    todoItems: state.todo,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => {
      // dispatch(addTodoActionCreator(text));
      dispatch(addTodoThunkActionCreator(text));
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllActionCreator());
    },
    triggerAsyncFunction: (asyncFunction) => {
      dispatch(asyncFunction);
    },
  };
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
