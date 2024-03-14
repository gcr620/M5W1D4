import React from 'react'
import data from "./Books/fantasy.json";
import SingleBook from './SingleBook';

// {
//     "asin": "0316438960",
//     "title": "The Last Wish: Introducing the Witcher",
//     "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
//     "price": 9.59,
//     "category": "fantasy"
//   },

export default function AllTheBooks(props) {
    console.log("i libri sono:");
    console.log(data);
  return (
    <div className='container'>
        <div className='row row-cols-auto justify-content-between align-items-center gap-2'>
               {data.map((el, index) => (
                <SingleBook title={el.title} img={el.img} price={el.price} category={props.category} id={el.asin}/>
               ))}     
        </div>
    </div>
  )
}
