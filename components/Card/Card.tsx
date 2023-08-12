import { useState } from "react";
import classnames from "classnames";
import { TbQuestionMark } from "react-icons/tb";

import { SELECT_CARD, ERROR_ATTEMPT, SUCCESS_ATTEMPT } from "@/actions";

export function Card({
  dispatch,
  reference,
  image,
  name,
  firstOption,
  secondOption,
}) {
  const [active, setActive] = useState(false);

  function handleClick(e) {
    e.preventDefault();

    setActive(!active);

    if (firstOption) {
      if (firstOption === e.currentTarget.name) {
        dispatch({ type: SUCCESS_ATTEMPT, payload: e.currentTarget.name });
      } else {
        dispatch({ type: ERROR_ATTEMPT });
      }
    } else {
      dispatch({ type: SELECT_CARD, payload: e.currentTarget.name });
    }
  }

  const className = classnames("Card", {
    "Card--active": active,
  });

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={firstOption && secondOption}
      name={reference}
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
            {image && <img src={image} className="Card-image" alt={name} />}
            <h3 className="Card-name">{name}</h3>
          </div>
        </div>
      </div>
    </button>
  );
}
