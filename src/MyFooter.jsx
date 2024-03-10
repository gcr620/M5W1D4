import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function MyFooter() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Footer</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
