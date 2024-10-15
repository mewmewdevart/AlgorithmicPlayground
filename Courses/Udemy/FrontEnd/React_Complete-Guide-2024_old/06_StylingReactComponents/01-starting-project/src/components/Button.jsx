export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-purple-300 px-4 py-2 hover:bg-purple-500"
      {...props}
    >
      {children}
    </button>
  );
}
