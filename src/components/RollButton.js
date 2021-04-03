import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const RollButton = ({ roll }) => {
  const element = <FontAwesomeIcon icon={faArrowUp} />;

  return (
    <div onClick={roll} className={`detail__closing-btn `}>
      <button>{element} hide</button>
    </div>
  );
};

export default RollButton;
