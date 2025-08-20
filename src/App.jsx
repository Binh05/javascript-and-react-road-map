import ThemeContextHook from "@components/themeContextHook/ThemeContextHook";
import { ThemeProvider } from "./stores/themeContextHook/ThemeContext";
import JSCheckList from "@components/jsFundamentals/JSCheckList";
import JSBase from "@components/jsFundamentals/JSBase";

function App() {
  return (
    <div className="mt-8 grid w-full justify-center">
      <JSBase />
      <JSCheckList />
      <ThemeProvider>
        <ThemeContextHook />
      </ThemeProvider>
    </div>
  );
}

export default App;
