import "./Name.css";
export function Name(props) {
  return (
    <div className="Name">
      <label>Name: </label>
      {props.names}
    </div>
  );
}
