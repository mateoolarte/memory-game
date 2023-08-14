import { useContext, useMemo } from "react";

import { StoreContext } from "@/context/StoreContext";
import { useFetchData } from "@/hooks/useFetchData";
import { useValidateAttempt } from "@/hooks/useValidateAttempt";
import { useGameCompleted } from "@/hooks/useGameCompleted";
import { transformData } from "@/utils/transformData";

import { Statistics } from "../Statistics";
import { Cards } from "../Cards";
import { Congratulations } from "../Congratulations";
import { Loading } from "../Loading";
import { Error } from "../Error";

export function Board() {
  const [state] = useContext(StoreContext);
  const { game } = state;

  const { data, loading, error, finished } = game;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const parsedData = useMemo(() => transformData(data), [data, finished]);

  useFetchData();
  useValidateAttempt();
  useGameCompleted();

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <section className="container-boxed mb-8">
      {!finished && (
        <>
          <Statistics />
          <Cards data={parsedData} />
        </>
      )}

      {finished && <Congratulations />}
    </section>
  );
}
