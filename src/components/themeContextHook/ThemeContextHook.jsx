import Toggle from "@components/Toggle";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../stores/themeContextHook/ThemeContext";
import Button from "@components/global/Button";
export default function ThemeContextHook() {
    const theme = useContext(ThemeContext);

    const changeTheme = () => {
        theme.setTheme(theme.theme === "light" ? "dark" : "light");
        console.log(theme.theme);
    };

    return (
        <Toggle title="Theme useContext Hook">
            <>
                <Button type="button" onClick={changeTheme}>
                    Change Theme
                </Button>
                <div
                    className={clsx(
                        "mt-4",
                        theme.theme === "dark" && "bg-dark",
                    )}
                >
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsum beatae porro earum voluptas molestiae dolor
                        natus velit non consequatur provident perferendis
                        possimus quasi labore quaerat eos, quis molestias
                        exercitationem omnis.
                    </p>
                </div>
            </>
        </Toggle>
    );
}
