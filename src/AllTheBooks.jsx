import React from 'react'
import Card from 'react-bootstrap/Card';
import data from "./Books/fantasy.json";


export default function AllTheBooks(props) {
    // const {img} = props;
    console.log("i libri sono:");
    console.log(data);
  return (
    <div className='container'>
        <div className='row row-cols-auto justify-content-between align-items-center gap-2'>
               {data.map((el, index) => (
                <Card>
                   <Card.Img key={index} variant="top" src={el.img} alt='BOOK'>
                   </Card.Img>   
                </Card>
               ))}     
        </div>
    </div>
  )
}
