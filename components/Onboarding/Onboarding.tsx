import { Info } from "./Info";
import { Form } from "./Form";
import { Disclaimer } from "./Disclaimer";

export function Onboarding({ setIsOnboarding }) {
  return (
    <section className="box">
      <Info />
      <Form setIsOnboarding={setIsOnboarding} />
      <Disclaimer />
    </section>
  );
}
