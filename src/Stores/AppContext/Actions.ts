export type IAppContextActionTypes = {
  type: "SET_AUTH_TOKEN";
  authToken: string;
};

export const setAuthToken = (authToken: string): IAppContextActionTypes => ({
  type: "SET_AUTH_TOKEN",
  authToken,
});
