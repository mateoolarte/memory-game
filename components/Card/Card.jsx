import { useContext } from "react";
import classnames from "classnames";
import { TbQuestionMark } from "react-icons/tb";

import { StoreContext } from "@/context/StoreContext";
import { SELECT_CARD } from "@/actions";

export function Card({ id, reference, image, name }) {
  const [state, dispatch] = useContext(StoreContext);
  const { game } = state;
  const { successAttempts, firstOption, secondOption, validating } = game;

  function handleClick(e) {
    e.preventDefault();

    dispatch({ type: SELECT_CARD, payload: { reference, id } });
  }

  const isActive =
    successAttempts.includes(reference) ||
    firstOption.id === id ||
    secondOption.id === id;
  const className = classnames("Card", {
    "Card--active": isActive,
  });

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isActive || validating}
      className={className}
    >
      <div className="Card-container">
        <div className="Card-front">
          <div className="Card-frontContent">
            <TbQuestionMark className="Card-icon" />
          </div>
        </div>
        <div className="Card-back">
          <div className="Card-backContent">
            {image && (
              <img
                src={image}
                className="Card-image"
                alt={name}
                loading="lazy"
              />
            )}
            <h3 className="Card-name">{name}</h3>
          </div>
        </div>
      </div>
    </button>
  );
}
