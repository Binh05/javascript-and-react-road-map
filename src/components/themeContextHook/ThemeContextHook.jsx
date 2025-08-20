import Toggle from "@components/Toggle";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../stores/themeContextHook/ThemeContext";

export default function ThemeContextHook() {
  const theme = useContext(ThemeContext);

  const changeTheme = () => {
    theme.setTheme(theme.theme === "light" ? "dark" : "light");
    console.log(theme.theme);
  };

  return (
    <Toggle title="Theme useContext Hook">
      <>
        <button
          type="button"
          className="border-primary text-primary hover:bg-primary cursor-pointer rounded-sm border-2 px-6 py-2 hover:text-white"
          onClick={changeTheme}
        >
          Change Theme
        </button>
        <div className={clsx("mt-4", theme.theme === "dark" && "bg-dark")}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            beatae porro earum voluptas molestiae dolor natus velit non
            consequatur provident perferendis possimus quasi labore quaerat eos,
            quis molestias exercitationem omnis.
          </p>
        </div>
      </>
    </Toggle>
  );
}
