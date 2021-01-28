import { createMuiTheme } from "@material-ui/core";
import themeVariables from "./variables";

export const materialUITheme = createMuiTheme({
  palette: {
    primary: {
      main: themeVariables.mediumColor,
    },
  },
});
