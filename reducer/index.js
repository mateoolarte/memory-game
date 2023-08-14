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
  CHECK_USER_SETTINGS,
  SET_USER_SETTINGS,
  UPDATE_USERNAME,
} from "@/actions";

const option = { reference: "", id: "" };

export const initialState = {
  settings: {
    username: "",
    level: 0,
  },
  game: {
    loading: false,
    error: "",
    data: [],
    successAttempts: [],
    errorAttempts: 0,
    firstOption: option,
    secondOption: option,
    finished: false,
    validating: false,
  },
};

export function reducer(state, action) {
  switch (action.type) {
    case CHECK_USER_SETTINGS:
      console.log({ CHECK_USER_SETTINGS });

      return {
        ...state,
        settings: {
          ...state.settings,
          username: window.localStorage.getItem("username") || "",
          level: Number(window.localStorage.getItem("level")) || 0,
        },
        game: {
          ...state.game,
          data: JSON.parse(window.localStorage.getItem("data")) || [],
        },
      };
    case SET_USER_SETTINGS:
      console.log({ SET_USER_SETTINGS });

      window.localStorage.setItem("username", action.payload.username);
      window.localStorage.setItem("level", action.payload.level);

      return {
        ...state,
        settings: {
          ...state.settings,
          username: action.payload.username,
          level: action.payload.level,
        },
      };
    case UPDATE_USERNAME:
      console.log({ UPDATE_USERNAME });

      window.localStorage.setItem("username", action.payload);

      return {
        ...state,
        settings: {
          ...state.settings,
          username: action.payload,
        },
      };
    case INIT_FETCH_DATA:
      console.log({ INIT_FETCH_DATA });
      return {
        ...state,
        game: {
          ...state.game,
          loading: true,
          error: "",
        },
      };
    case SUCCESS_FETCH_DATA:
      console.log({ SUCCESS_FETCH_DATA });

      window.localStorage.setItem("data", JSON.stringify(action.payload));

      return {
        ...state,
        game: {
          ...state.game,
          data: action.payload,
          loading: false,
        },
      };
    case FAIL_FETCH_DATA:
      console.log({ FAIL_FETCH_DATA });
      return {
        ...state,
        game: {
          ...state.game,
          loading: false,
          error: action.payload,
        },
      };
    case SELECT_CARD:
      console.log({ SELECT_CARD });

      if (state.game.firstOption.reference) {
        return {
          ...state,
          game: {
            ...state.game,
            secondOption: action.payload,
          },
        };
      }

      return {
        ...state,
        game: {
          ...state.game,
          firstOption: action.payload,
        },
      };
    case SUCCESS_ATTEMPT:
      console.log({ SUCCESS_ATTEMPT });

      return {
        ...state,
        game: {
          ...state.game,
          validating: false,
          successAttempts: [...state.game.successAttempts, action.payload],
          firstOption: option,
          secondOption: option,
        },
      };
    case ERROR_ATTEMPT:
      console.log({ ERROR_ATTEMPT });

      return {
        ...state,
        game: {
          ...state.game,
          validating: false,
          errorAttempts: state.game.errorAttempts + 1,
          firstOption: option,
          secondOption: option,
        },
      };
    case GAME_COMPLETED:
      console.log({ GAME_COMPLETED });

      return {
        ...state,
        game: {
          ...state.game,
          loading: false,
          successAttempts: [],
          errorAttempts: 0,
          firstOption: option,
          secondOption: option,
          validating: false,
          finished: true,
        },
      };
    case GAME_START:
      console.log({ GAME_START });

      console.log({ action: action.payload, state: state.settings.level });

      window.localStorage.setItem("level", action.payload);

      if (action.payload !== state.settings.level) {
        window.localStorage.removeItem("data");
      }

      return {
        ...state,
        settings: {
          ...state.settings,
          level: action.payload,
        },
        game: {
          ...state.game,
          finished: false,
          data: action.payload !== state.settings.level ? [] : state.game.data,
        },
      };
    case VALIDATE_ATTEMPT:
      console.log({ VALIDATE_ATTEMPT });

      return {
        ...state,
        game: {
          ...state.game,
          validating: true,
        },
      };
    default:
      return state;
  }
}
