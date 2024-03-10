import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function Welcome() {
  return (
    <div>
        <Alert className='text-center fs-3' variant='info'>
          Welcome to our store!
        </Alert>
    </div>
  )
}
