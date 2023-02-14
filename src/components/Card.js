import "./Card.css";

export function Card(props) {

  return <div className="card">
  <div  className="img" style= {{backgroundImage: `url(${props.img})`}}></div>
  <h3>{props.title}</h3>
  <p>{props.description}</p>
  <a href={props.link}>Explore</a>
  </div>;
};

