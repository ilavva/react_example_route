import React from "react";
import "./Child1.css";
export default function Child1(props: { myStr: string }) {
  return (
    <div className="child-class">
      <h2>Child1</h2>
      <h2>{props.myStr}</h2>
    </div>
  );
}
