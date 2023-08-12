import {
  INIT_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
  SELECT_CARD,
  SUCCESS_ATTEMPT,
  ERROR_ATTEMPT,
} from "@/actions";

export const initialState = {
  loading: false,
  data: [],
  successAttempts: [],
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
    case SELECT_CARD:
      console.log({ SELECT_CARD });

      return {
        ...state,
        firstOption: action.payload,
      };
    case SUCCESS_ATTEMPT:
      console.log({ SUCCESS_ATTEMPT });

      return {
        ...state,
        successAttempts: [...state.successAttempts, action.payload],
        firstOption: "",
      };
    case ERROR_ATTEMPT:
      console.log({ ERROR_ATTEMPT });

      return {
        ...state,
        errorAttempts: state.errorAttempts + 1,
        firstOption: "",
      };
    default:
      return state;
  }
}
