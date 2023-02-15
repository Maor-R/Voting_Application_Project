
import "./Button.css"
export function Button(props) {

  return <>
  
  <button id={props.color} style={{backgroundColor:props.color}} onClick={props.handleFunc}>{props.color}
  </button>
  </>;
};

