export const Types = {
  GET_TODO_LIST: "todo/GET_TODO_LIST",
  ADD_TODO: "todo/ADD_TODO",
  UPDATE_TODO: "todo/UPDATE_TODO",
  REMOVE_TODO: "todo/REMOVE_TODO",
  SUCCESS_TODO_LIST: "todo/SUCCESS_TODO_LIST",
  FAILURE_TODO_LIST: "todo/FAILURE_TODO_LIST",
}

export const Creators = {
  getTodoList: data => ({
    type: Types.GET_TODO_LIST,
    payload: { data },
  }),
  addTodo: data => ({
    type: Types.ADD_TODO,
    payload: { data },
  }),
  updateTodo: data => ({
    type: Types.UPDATE_TODO,
    payload: { data },
  }),
  removeTodo: data => ({
    type: Types.REMOVE_TODO,
    payload: { data },
  }),
  todoSuccess: data => ({
    type: Types.SUCCESS_TODO_LIST,
    payload: { data },
  }),
  todoFailure: error => ({
    type: Types.FAILURE_TODO_LIST,
    payload: { error },
  }),
};


const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_TODO_LIST:
      return { ...state, loading: true };
    case Types.ADD_TODO:
      return { ...state, loading: true };    
    case Types.UPDATE_TODO:
      return { ...state, loading: true };
    case Types.REMOVE_TODO:
      return { ...state, loading: true };
    case Types.SUCCESS_TODO_LIST:
      return { data: action.payload.data, loading: false, error: false };
    case Types.FAILURE_TODO_LIST:
      return { data: [], loading: false, error: true };
    default:
      return state;
      break;
  }
}