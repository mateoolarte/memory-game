import { Logo } from "../Logo";

export function Header({ children }) {
  return (
    <header className="shadow mb-4 bg-slate-50">
      <div className="flex max-w-5xl mx-auto py-4">
        <Logo />
        {children}
      </div>
    </header>
  );
}
