export default function Async() {
    // Bài 9:
    // {async function getTodo() {
    //     try {
    //         const res = await fetch(
    //             "https://jsonplaceholder.typicode.com/todos/1",
    //         );
    //         const data = await res.json();
    //         console.log(data.title);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // getTodo();}

    // Bài 10:
    // {const getTodos = async () => {
    //     try {
    //         const res1 = await fetch(
    //             "https://jsonplaceholder.typicode.com/todos/1",
    //         );
    //         const data1 = await res1.json();

    //         const res2 = await fetch(
    //             "https://jsonplaceholder.typicode.com/todos/2",
    //         );
    //         const data2 = await res2.json();

    //         console.log(data1, data2);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // getTodos();}

    // Bai 11:
    // {
    //     const fetchTodo = async (id) => {
    //         try {
    //             const res = await fetch(
    //                 `https://jsonplaceholder.typicode.com/todos/${id}`,
    //             );
    //             const data = await res.json();
    //             return data;
    //         } catch (err) {
    //             throw err;
    //         }
    //     };

    //     async function fetchTodos() {
    //         try {
    //             const todo1 = fetchTodo(3);
    //             const todo2 = fetchTodo(4);

    //             const data = await Promise.all([todo1, todo2]);

    //             console.log(data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchTodos();
    // }

    // Bai 12:
    // {async function fetchError() {
    //     try {
    //         const res = await fetch("https://apierror.example.com");
    //         const data = await res.json();
    //         console.log(data);
    //     } catch (err) {
    //         console.log("Loi khi goi api:", err);
    //     }
    // }
    // fetchError();}

    return <></>;
}
