import { createContext } from "react";
import Button from "./Button";


export const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value='rgb(24, 21, 19)'>
      <Button/>
    </ThemeContext.Provider>
  );
}

export default App;
