import { Logo } from "../Logo";

export function Info() {
  return (
    <div className="text-center">
      <Logo />
      <p className="heading mt-4">¡Welcome!</p>
      <p className="text text-left">
        Before start the game you need to complete the information below to give
        you a personalized experience.
      </p>
    </div>
  );
}
