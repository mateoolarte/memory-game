import {
  INIT_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
  SELECT_CARD,
  SUCCESS_ATTEMPT,
  ERROR_ATTEMPT,
  GAME_COMPLETED,
  GAME_START,
  VALIDATE_ATTEMPT,
} from "@/actions";

const option = { reference: "", id: "" };

export const initialState = {
  loading: false,
  data: [],
  successAttempts: [],
  errorAttempts: 0,
  firstOption: option,
  secondOption: option,
  finished: false,
  validating: false,
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

      if (state.firstOption.reference) {
        return {
          ...state,
          secondOption: action.payload,
        };
      }

      return {
        ...state,
        firstOption: action.payload,
      };
    case SUCCESS_ATTEMPT:
      console.log({ SUCCESS_ATTEMPT });

      return {
        ...state,
        validating: false,
        successAttempts: [...state.successAttempts, action.payload],
        firstOption: option,
        secondOption: option,
      };
    case ERROR_ATTEMPT:
      console.log({ ERROR_ATTEMPT });

      return {
        ...state,
        validating: false,
        errorAttempts: state.errorAttempts + 1,
        firstOption: option,
        secondOption: option,
      };
    case GAME_COMPLETED:
      console.log({ GAME_COMPLETED });

      return {
        ...state,
        loading: false,
        successAttempts: [],
        errorAttempts: 0,
        firstOption: option,
        secondOption: option,
        validating: false,
        finished: true,
      };
    case GAME_START:
      console.log({ GAME_START });

      return {
        ...state,
        finished: false,
      };
    case VALIDATE_ATTEMPT:
      console.log({ VALIDATE_ATTEMPT });

      return {
        ...state,
        validating: true,
      };
    default:
      return state;
  }
}
