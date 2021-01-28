import { IAppContextActionTypes } from "./Actions";

export interface IAppContextState {
  authToken: string;
}

export const appContextInitialStates: IAppContextState = {
  authToken: "",
};

export const appContextReducer = (
  state: IAppContextState,
  action: IAppContextActionTypes
): IAppContextState => {
  switch (action.type) {
    case "SET_AUTH_TOKEN": {
      return {
        ...state,
        authToken: action.authToken,
      };
    }

    default:
      return state;
  }
};
