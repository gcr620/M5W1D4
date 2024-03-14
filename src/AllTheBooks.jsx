import React, { useState } from 'react'
import data from "./Books/fantasy.json";
import SingleBook from './SingleBook';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// {
//     "asin": "0316438960",
//     "title": "The Last Wish: Introducing the Witcher",
//     "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
//     "price": 9.59,
//     "category": "fantasy"
//   },


export default function AllTheBooks(props) {
    let [inputN, setInputN] = useState("");
    let s = false;

    function searchRes(i) {
      data.forEach(el => {
        if (!i.value) {
          alert("Empty search")
          s = false;
        } else {
          let tempVal = data.filter(i)
          s = true;
        }
        
      });
    }

  return (
    <>
    <div className='container-fluid mb-5 d-flex justify-content-center'>
    <div className='search d-flex justify-content-center align-items-center gap-3'>
    <Form.Label htmlFor="inputSearch"></Form.Label>
    <Form.Control className='border-3'
        type="text"
        id="inputSearch"
        aria-describedby="search"
        placeholder='Search book...'
        value={inputN}
        onChange={(e) => setInputN(e.target.value)}
      />
      <Button type="submit" 
        onClick={() => searchRes(inputN)}
      >
        Search
        </Button>
    </div>
    </div>
    <div className='container'>
        <div className='row row-cols-auto justify-content-between align-items-center gap-2'>
              {!s && data.map((el) => (
                <SingleBook key={el.asin} title={el.title} img={el.img} price={el.price} category={props.category}/>
               ))}
                   
        </div>
    </div>
    </>
  )
}
