import "./index.css";

const Cards = (props) => {
  const { eachItem } = props;
  const { title, info } = eachItem;
  return (
    <li className="cardItem">
      <h1>{title}</h1>
      <p>{info}</p>
    </li>
  );
};
export default Cards;
