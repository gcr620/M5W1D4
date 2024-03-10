import React from 'react'
import Card from 'react-bootstrap/Card';

function getBooks() {
    
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
