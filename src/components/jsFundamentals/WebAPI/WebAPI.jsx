import Fetch from "./Fetch";
import Toggle from "@components/Toggle";

export default function WebAPI() {
    return (
        <Toggle title="Web API" size={2}>
            <Fetch />
        </Toggle>
    );
}
