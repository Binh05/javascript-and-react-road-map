import Button from "@components/global/Button";

function Fetch() {
    // Bai 1:
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data.slice(0, 5))
    //     });

    // Bai 2:
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        title: formData.get("title"),
                        body: formData.get("body"),
                        userId: 1,
                    }),
                },
            );
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    // Bai 3:
    function getPost(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .catch((err) => {
                throw err;
            });
        // .then((data) => {
        //     return data;
        // });
    }

    async function updatePost(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const id = formData.get("id");

        try {
            const post = await getPost(id);
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        id: id,
                        title: "new title",
                        body: "new body",
                        userId: 1,
                    }),
                },
            );
            const data = await res.json();
            console.log(post, data);
        } catch (err) {
            console.log(err);
        }
    }

    // Bai 4:
    const updatePostTitle = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const id = formData.get("id");

        try {
            const post = await getPost(id);
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        title: "new title",
                    }),
                },
            );
            const data = await res.json();
            console.log(post, data);
        } catch (err) {
            console.log(err);
        }
    };

    // Bai 5:
    const deletePost = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const id = formData.get("id");

        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            { method: "DELETE" },
        );
        console.log("Deleted status:", res.status);
    };

    // Bai 6:
    Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
            res.json(),
        ),
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
            res.json(),
        ),
    ]).then(([users, posts]) => {
        console.log("users:", users);
        console.log("posts:", posts.slice(0, 5));
    }); // Nếu tạo biến const = fetch bang async await rồi cho const vô Promise.all thì làm sao?

    return (
        <>
            <div>
                <code id="bai_1"></code>
            </div>
            <form className="space-y-2" onSubmit={handleSubmit}>
                <Input
                    label="title"
                    name="title"
                    placeholder="enter your title"
                />
                <Input
                    label="body"
                    name="body"
                    placeholder={"enter your body"}
                />
                <Button
                    className="border-primary border-2 p-4 uppercase"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
            <form onSubmit={updatePost} className="mt-4 space-y-2">
                <Input label="id" placeholder={"enter your id"} name={"id"} />
                <Button type="submit">update post by id</Button>
            </form>
            <form onSubmit={updatePostTitle} className="mt-4 space-y-2">
                <Input label="id" placeholder={"enter your id"} name={"id"} />
                <Button type="submit">update post title by id</Button>
            </form>
            <form onSubmit={deletePost} className="mt-4 space-y-2">
                <Input label="id" placeholder={"enter your id"} name={"id"} />
                <Button type="submit">delete post by id</Button>
            </form>
        </>
    );
}

function Input({ label, name, placeholder }) {
    return (
        <div className="space-x-2">
            <label className="uppercase" htmlFor={label}>
                {label}:
            </label>
            <input
                className="border-primary rounded-sm border-2 pl-2"
                type="text"
                id={label}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Fetch;
