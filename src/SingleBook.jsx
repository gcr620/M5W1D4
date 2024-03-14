// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// {
//     "asin": "0316438960",
//     "title": "The Last Wish: Introducing the Witcher",
//     "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
//     "price": 9.59,
//     "category": "fantasy"
//   },

export default function SingleBook(props) {
  return (
    <Card id={props.asin}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         <p>€{props.price}</p>
         <p>Category: {props.category}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}