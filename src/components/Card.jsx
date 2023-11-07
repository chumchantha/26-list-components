import "./card.css";

const Card = (props) => {
  const { img, brand, details, price } = props.products;
  return (
    <article>
      <img src={img} alt="img" />
      <h2>{brand}</h2>
      <p>{details}</p>
      <span>{price}</span>
    </article>
  );
};

export default Card;

// const props = {
//   products: {
//     img: "...",
//     brand: "...",
//     details: "...",
//     price: "...",
//   },
// };
