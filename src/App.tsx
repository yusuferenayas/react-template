import React, { useMemo, useReducer } from "react";
import Navigator from "./Navigator";
import AppContextProvider from "./Stores/AppContext/Provider";
import {
  appContextReducer,
  appContextInitialStates,
} from "./Stores/AppContext/Reducer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  const [state, dispatch] = useReducer(
    appContextReducer,
    appContextInitialStates
  );
  const appContextProvider = useMemo(
    () => ({
      contextState: state,
      contextDispatch: dispatch,
    }),
    [state, dispatch]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider value={appContextProvider}>
        <Navigator />
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default App;
