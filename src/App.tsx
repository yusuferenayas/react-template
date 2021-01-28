import React, { useMemo, useReducer } from "react";
import Navigator from "./Navigator";
import AppContextProvider from "./Stores/AppContext/Provider";
import {
  appContextReducer,
  appContextInitialStates,
} from "./Stores/AppContext/Reducer";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@material-ui/core";
import { materialUITheme } from "Theme/MaterialUITheme";

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
        <ThemeProvider theme={materialUITheme}>
          <Navigator />
        </ThemeProvider>
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default App;
