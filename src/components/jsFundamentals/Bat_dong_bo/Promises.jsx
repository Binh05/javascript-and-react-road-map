import Toggle from "@components/Toggle";

function Promises() {
    // Bài 5:
    // {const readFileFake = (filename) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (filename === "data.txt")
    //                 resolve("file content: hello world");
    //             else reject(`error: invalid file name ${filename}`);
    //         }, 2000);
    //     });
    // };}

    // readFileFake("data.txt")
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));

    // Bai 6:
    // {fetch("https://jsonplaceholder.typicode.com/users/1")
    //     .then((res) => res.json())
    //     .then((data) => console.log(`User name: ${data.name}`))
    //     .catch((error) => console.log(`Loi khi lay du lieu ${error}`));}

    // Bai 7:
    // {const ids = [1, 2, 3];
    // Promise.all(
    //     ids.map((id) =>
    //         fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    //             (res) => res.json(),
    //         ),
    //     ),
    // )
    //     .then((users) => {
    //         const usersName = users.map((user) => user.name);
    //         console.log(`User list: ${usersName}`);
    //     })
    //     .catch((err) => console.log(err));}

    // Bài 8:

    // {const promise1 = new Promise((resolve, reject) =>
    //     setTimeout(() => {
    //         resolve("resolve after 2 second");
    //     }, 2000),
    // );

    // const promise2 = new Promise((resolve, reject) =>
    //     setTimeout(() => reject("reject after 0.2 second"), 200),
    // );

    // const promise3 = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 5000, "resolve after 5 second");
    // });

    // Promise.race([promise1, promise2, promise3])
    //     .then((res) => console.log(`data: ${res}`))
    //     .catch((err) => console.log(`Loi: ${err}`));}

    return <Toggle title="Promises" size={3} />;
}

export default Promises;
