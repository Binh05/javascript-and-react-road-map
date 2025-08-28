export default function ({ title, children }) {
  return (
    <>
      <p className="text-lg">
        <strong>{title}:</strong>
      </p>
      <p>- {children}</p>
    </>
  );
}
