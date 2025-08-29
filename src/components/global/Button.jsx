export default function Button({ type = "button", onClick, children }) {
    return (
        <button
            type={type}
            className="border-primary text-primary hover:bg-primary cursor-pointer rounded-sm border-2 px-6 py-2 hover:text-white"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
