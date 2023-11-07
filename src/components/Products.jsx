import Card from "./Card";
import "./card.css";

const Products = () => {
  const shoes = [
    {
      id: 1,
      img: "src/assets/Minji1.jpeg",
      brand: "Nich",
      details: "This is a shoes details",
      price: "100$",
    },
    {
      id: 2,
      img: "src/assets/Minji2.jpg",
      brand: "Nike",
      details: "This is a shoes details",
      price: "200$",
    },
    {
      id: 3,
      img: "src/assets/Minji3.jpg",
      brand: "Nike",
      details: "This is a shoes details",
      price: "300$",
    },
    {
      id: 4,
      img: "src/assets/Minji4.jpeg",
      brand: "Nich",
      details: "This is a shoes details",
      price: "400$",
    },
  ];

  return (
    <>
      {shoes.map((s) => {
        return <Card products={s} key={s.id} />;
      })}
    </>
  );
};

export default Products;
