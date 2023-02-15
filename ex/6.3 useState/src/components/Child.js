import "./Child.css";
import { Balloon } from "./Balloon";

export function Child(props) {

  return <div className="child">
  <h3>{props.name}</h3>
  <Balloon color={props.color}></Balloon>
  </div>;
};

