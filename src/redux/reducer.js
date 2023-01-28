import { GET_FORM_DB, POST_FORM_DB } from "./actions";

let initialState = {
  form: [],
  formDb: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FORM_DB:
      return {
        ...state,
        formDb: action.payload,
      };
    case POST_FORM_DB:
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
}
