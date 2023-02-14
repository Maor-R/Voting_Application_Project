import "./Button.css";
export function Button(props) {
  const bold = props.bold? "bold":"";
  const classes = 'btn ' + bold;
  return <>
  <button className={classes} >{props.children}</button>
  </>;
};

