import Button from "@components/global/Button";

function Fetch() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log("5 users:", data.slice(0, 5));
    //     });

    return (
        <>
            <form className="space-y-2">
                <Input label="title" placeholder="enter your title" />
                <Input label="body" placeholder={"enter your body"} />
                <Button
                    className="border-primary border-2 p-4 uppercase"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </>
    );
}

function Input({ label, placeholder }) {
    return (
        <div className="space-x-2">
            <label className="uppercase" htmlFor={label}>
                {label}:
            </label>
            <input
                className="border-primary rounded-sm border-2 pl-2"
                type="text"
                id={label}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Fetch;
