import React from "react";

function StrikeThrough(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={{ textDecoration: "line-through" }}>{props.text} </li>
    </div>
  );
}

export default StrikeThrough;
