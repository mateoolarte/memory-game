import { Logo } from "../Logo";

export function Header({ children }) {
  return (
    <header className="shadow mb-5 bg-slate-50">
      <div className="container-boxed flex p-4 xl:py-4 xl:px-0 justify-between items-center">
        <Logo />
        {children}
      </div>
    </header>
  );
}
