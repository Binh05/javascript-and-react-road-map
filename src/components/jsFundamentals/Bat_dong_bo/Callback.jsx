export default function Callback() {
    /* callback hell */
    // Bai 3:
    // {setTimeout(() => {
    //     console.log("1");

    //     setTimeout(() => {
    //         console.log("-> 2");

    //         setTimeout(() => {
    //             console.log("-> 3");

    //             setTimeout(() => {
    //                 console.log("-> 4");
    //             }, 1000);
    //         }, 1000);
    //     }, 1000);
    // }, 1000);}

    // after fix
    // {function delayLog(msg, time, next) {
    //     setTimeout(() => {
    //         console.log(msg);
    //         if (next) next();
    //     }, time);
    // }
    // delayLog("1", 1000, () => {
    //     delayLog("-> 2", 1000, () => {
    //         delayLog("-> 3", 1000, () => {
    //             delayLog("-> 4", 1000);
    //         });
    //     });
    // });}

    //Bai 4
    // {function readFileFake(filename, callback) {
    //     setTimeout(() => {
    //         if (filename === "data.txt") callback(null, "Hello world!");
    //         else {
    //             const err = new Error(`invalid file name: ${filename}`);
    //             callback(err);
    //         }
    //     }, 2000);
    // }

    // readFileFake("data.txt", (err, data) => {
    //     if (err) {
    //         console.log(err.message);
    //         return;
    //     }
    //     console.log("file data:", data);
    // });}

    return <></>;
}
