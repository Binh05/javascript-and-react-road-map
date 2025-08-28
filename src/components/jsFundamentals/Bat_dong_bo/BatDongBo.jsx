import Toggle from "@components/Toggle";
import Score from "@components/jsFundamentals/Bat_Dong_Bo/Score";
import Promises from "./Promises";
import Callback from "./Callback";
import Async from "./Async";

export default function BatDongBo() {
    // {let a = 10;
    // const intervalId = setInterval(() => {
    //   console.log(a);
    //   a--;

    //   if (!a) {
    //     clearInterval(intervalId);
    //     console.log("interval end");
    //   }
    // }, 1000);}

    const handleClick = () => {
        let t = 1;
        const IntervalId = setInterval(() => {
            console.log(t);
            t++;
        }, 1000);

        setTimeout(() => {
            console.log("finish after 3 second");
            clearInterval(IntervalId);
        }, 3000);
    };

    return (
        <Toggle title="Asynchronous" size={2}>
            <button onClick={handleClick}>Click me</button>
            <Score />
            <Callback />
            <Promises />
            <Async />
        </Toggle>
    );
}
