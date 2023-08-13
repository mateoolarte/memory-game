import { useContext } from "react";

import { StoreContext } from "@/context/StoreContext";

import { Info } from "./Info";
import { Form } from "./Form";
import { Disclaimer } from "./Disclaimer";

export function Onboarding() {
  const [state] = useContext(StoreContext);
  const { username, level } = state?.settings;

  if (username && level > 0) return null;

  return (
    <section className="box">
      <Info />
      <Form />
      <Disclaimer />
    </section>
  );
}
