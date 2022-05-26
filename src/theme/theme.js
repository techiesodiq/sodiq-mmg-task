import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: "0px",
        },
      },
    },
  },
});

export default theme;
