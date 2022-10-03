<<<<<<< HEAD
=======
import React from "react";
>>>>>>> a81c4ceecd0aaf830498622e8c61ab81cee3b5e2
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

const theme = createTheme();

ReactDOM.render(
  <BrowserRouter>
<<<<<<< HEAD
=======
  
>>>>>>> a81c4ceecd0aaf830498622e8c61ab81cee3b5e2
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
