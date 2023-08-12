import {
  INIT_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
} from "@/actions";

export const initialState = {
  loading: false,
  data: [],
  successAttempts: 0,
  errorAttempts: 0,
  firstOption: "",
  secondOption: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case INIT_FETCH_DATA:
      console.log({ INIT_FETCH_DATA });
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_FETCH_DATA:
      console.log({ SUCCESS_FETCH_DATA });
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FAIL_FETCH_DATA:
      console.log({ FAIL_FETCH_DATA });
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
