import { Card } from "../Card";

export function Cards({ data }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 px-4 xl:px-0">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            reference={item.reference}
            image={item.image}
          />
        );
      })}
    </div>
  );
}
