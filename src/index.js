import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const API = [
  {
    id: 1,
    image: "https://images.uzum.uz/d1jntsi1146hm2be98d0/t_product_540_high.jpg",
    price: 2314321,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 2,
    image: "https://images.uzum.uz/d16lnb33uvppu2abq550/t_product_540_high.jpg",
    price: 23321141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 3,
    image: "https://images.uzum.uz/curci9bvgbkm5ehfsslg/t_product_540_high.jpg",
    price: 2313241,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 4,
    image: "https://images.uzum.uz/d0e5h9q7s4fo7mq8ahqg/t_product_540_high.jpg",
    price: 2314321,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 5,
    image: "https://images.uzum.uz/d0tfetr3uvph50a0lssg/t_product_540_high.jpg",
    price: 2314321,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 6,
    image: "https://images.uzum.uz/ctrs906i4n324lr25hig/t_product_540_high.jpg",
    price: 231324441,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,


  },
  {
    id: 7,
    image: "https://images.uzum.uz/d03jtslpb7f46s87tvc0/t_product_540_high.jpg",
    price: 2314341,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 8,
    image: "https://images.uzum.uz/ctrs906i4n324lr25hig/t_product_540_high.jpg",
    price: 2523141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 9,
    image: "https://images.uzum.uz/d1akrs33uvppu2acni9g/t_product_540_high.jpg",
    price: 25323141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,


  },
  {
    id: 10,
    image: "https://images.uzum.uz/d15bt98n274lpu394m80/t_product_540_high.jpg",
    price: 25433141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 11,
    image: "https://images.uzum.uz/d1hrq7eojia34bc0020g/t_product_540_high.jpg",
    price: 52323141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,


  },
  {
    id: 12,
    image: "https://images.uzum.uz/d0vbavr3uvpglcmae6e0/t_product_540_high.jpg",
    price: 54323141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 13,
    image: "https://images.uzum.uz/d15bt98n274lpu394m80/t_product_540_high.jpg",
    price: 53423141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,


  },
  {
    id: 14,
    image: "https://uzum.uz/ru/product/smes-molochnaya-kabrita-197005",
    price: 54323141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 15,
    image: "https://uzum.uz/ru/product/noutbuk-hp-156-1380021",
    price: 54323141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,


  },
  {
    id: 16,
    image: "https://uzum.uz/ru/product/noutbuk-itech-dlya-seryj-metallik---291-1694031",
    price: 54323141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 17,
    image: "https://images.uzum.uz/d1h0pvql822nnunhlb50/t_product_540_high.jpg",
    price: 23141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`



  },
  {
    id: 18,
    image: "https://uzum.uz/ru/product/noutbuk-acer-aspire-1528440",
    price: 23141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,


  },
  {
    id: 19,
    image: "https://uzum.uz/ru/product/noutbuk-acer-nitro-1718795",
    price: 23147651,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,


  },
  {
    id: 20,
    image: "https://uzum.uz/ru/product/igrovoj-noutbuk-intel-1414775",
    price: 23165441,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`


  },
  {
    id: 21,
    image: "https://uzum.uz/ru/product/noutbuk-asus-vivobook-1229414",
    price: 2354141,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,


  },
  {
    id: 22,
    image: "https://uzum.uz/ru/product/noutbuk-hp-i51235u-1691009",
    price: 231543541,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    stars: `14 (37.9999)`

  },

];

const BookList = ({price}) =>{

  return(
    <section className='uzumBook'>

      <img src="" alt="" />
      <div>

      </div>
    </section>
  )

}


const Book = () =>{
return(
 <article>
  {
API.map((book) => {

})
  }
 </article>
)
}

const Main = () =>{
return(
  <Book/>
)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

