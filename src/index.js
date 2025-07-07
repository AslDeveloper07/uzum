import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const API = [
  {
    id: 1,
    image: "https://images.uzum.uz/d1jntsi1146hm2be98d0/t_product_540_high.jpg",
    price: '23 143 21',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 2,
    image: "https://images.uzum.uz/d16lnb33uvppu2abq550/t_product_540_high.jpg",
    price: '23 321 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 3,
    image: "https://images.uzum.uz/curci9bvgbkm5ehfsslg/t_product_540_high.jpg",
    price: '23 132 41',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 4,
    image: "https://images.uzum.uz/d0e5h9q7s4fo7mq8ahqg/t_product_540_high.jpg",
    price: '23 143 21',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 5,
    image: "https://images.uzum.uz/d0tfetr3uvph50a0lssg/t_product_540_high.jpg",
    price: '23 143 21',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 6,
    image: "https://images.uzum.uz/ctrs906i4n324lr25hig/t_product_540_high.jpg",
    price: '23 132 4441',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 7,
    image: "https://images.uzum.uz/d03jtslpb7f46s87tvc0/t_product_540_high.jpg",
    price: '23 143 41',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 8,
    image: "https://images.uzum.uz/ctrs906i4n324lr25hig/t_product_540_high.jpg",
    price: '25 231 41',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 9,
    image: "https://images.uzum.uz/d1akrs33uvppu2acni9g/t_product_540_high.jpg",
    price: '25 323 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 10,
    image: "https://images.uzum.uz/d15bt98n274lpu394m80/t_product_540_high.jpg",
    price: '25 433 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 11,
    image: "https://images.uzum.uz/d1hrq7eojia34bc0020g/t_product_540_high.jpg",
    price: '52 323 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 12,
    image: "https://images.uzum.uz/d0vbavr3uvpglcmae6e0/t_product_540_high.jpg",
    price: '54 323 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 13,
    image: "https://images.uzum.uz/d15bt98n274lpu394m80/t_product_540_high.jpg",
    price: '53 423 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 14,
    image: "https://images.uzum.uz/ctc636ui4n3ehka3cr4g/t_product_540_high.jpg",
    price: '54 323 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 15,
    image: "https://images.uzum.uz/cupphetht56sc95ffng0/t_product_540_high.jpg",
    price: '54 323 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 16,
    image:
      "https://images.uzum.uz/ctrs906i4n324lr25hig/t_product_540_high.jpg",
    price: '54 323 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 17,
    image: "https://images.uzum.uz/d1h0pvql822nnunhlb50/t_product_540_high.jpg",
    price: '23 141 ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 18,
    image: "https://images.uzum.uz/d08v4iuf4hvqhbr48aj0/original.jpg",
    price: '23 141 ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 19,
    image: "https://images.uzum.uz/d03onec7fd1idpht7sgg/original.jpg",
    price: '23 147 651',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 20,
    image: "https://images.uzum.uz/cv3c02dpb7f9qcnfl0a0/t_product_540_high.jpg",
    price: '23 165 441',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
  {
    id: 21,
    image: "https://images.uzum.uz/d17r7f0n274lpu39l0h0/t_product_540_high.jpg",
    price: '23 541 41',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 22,
    image: "https://images.uzum.uz/d19vhp33uvppu2aci4mg/t_product_540_high.jpg",
    price: '23 154 354',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
    {
    id: 23,
    image: "https://images.uzum.uz/cupphetht56sc95ffng0/t_product_540_high.jpg",
    price: '54 323 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 24,
    image:
      "https://images.uzum.uz/ctrs906i4n324lr25hig/t_product_540_high.jpg",
    price: '54 323 141',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`,
  },
];

const BookList = ({ id, image, description, price, stars,  }) => {
  return (
    <section className="bookList">
      <div className="imege_scale">
        <img src={image} alt={description} />
      </div>
      <div className="text">
        <h2>{price}</h2>
        <p className="about">{description}</p>
        <p>{stars ? stars : 'News'}</p>
        <button className="btn">Add to Card</button>
      </div>
    </section>
  );
};

const Book = () => {
  return (
    <article className="book container">
      {API.map((uzum) =>(
        <BookList
          image={uzum.image}
          price={uzum.price}
          description={uzum.description}
          stars={uzum.stars}
          key={uzum.id}
        />
      ))}
    </article>
  );
};

const Main = () => {
  return (
    <>
    <Book />
    </>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
