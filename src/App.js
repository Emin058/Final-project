import React from "react";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
};

export default App;
