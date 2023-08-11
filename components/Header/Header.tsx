export function Header({ children }) {
  return (
    <header className="shadow mb-4">
      <div className="flex max-w-5xl mx-auto py-4">
        <h1>Memory game</h1>
        {children}
      </div>
    </header>
  );
}
