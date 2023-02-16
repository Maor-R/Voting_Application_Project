import "./Card.css";
export function Card(props) {

  return (
      <div key={props.name + props.birthday} className="Card">
        <label>Name:</label>
        <p>{props.data.name}</p>
        <label>Birthday:</label>
        <p>{props.data.birthday}</p>
        <label>Meats food:</label>
        {props.data.favoriteFoods.meats.map((meat) => (
          <p>{meat}</p>
        ))}
        <label>Fish food:</label>
        {props.data.favoriteFoods.fish.map((f) => (
          <p>{f}</p>
        ))}
      </div>
  );
}
