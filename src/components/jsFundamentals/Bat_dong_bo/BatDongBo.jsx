import Toggle from "@components/Toggle";
import Score from "@components/jsFundamentals/Bat_Dong_Bo/Score";
import Promises from "./Promises";
import Callback from "./Callback";
import Async from "./Async";

export default function BatDongBo() {
    return (
        <Toggle title="Asynchronous" size={2}>
            <Score />
            <Callback />
            <Promises />
            <Async />
        </Toggle>
    );
}
