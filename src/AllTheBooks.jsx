import React from 'react'
import Card from 'react-bootstrap/Card';
import "./Books/fantasy.json";

window.onload = () => {
    getBooks()
}

async function getBooks() {
    try {
        let res = await fetch("./Books/fantasy.json")
        console.log(res);
        let raw = res.json();
        console.log(raw);
    } catch (error) {
        alert('Errore nel Get')
    }
}

export default function AllTheBooks() {
  return (
    <div className='container'>
        <div className='row row-cols-auto'>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600" alt='BOOK'>
                </Card.Img>    
            </Card>
        </div>
    </div>
  )
}
