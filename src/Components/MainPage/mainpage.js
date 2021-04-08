import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import expanding from '../Images/expanding.png';
import progress from '../Images/progress.png';

const MainPage = () => {
    return (
      <>
      <h1>50 Projects 50 Days</h1>
      <br/>
      
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={expanding} />
  <Card.Body>
    <Card.Title>1. Expanding cards</Card.Title>
    <Button variant="primary" href="/ExpandingCards">Check it out!</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={progress} />
  <Card.Body>
    <Card.Title>2. Progress Steps</Card.Title>
    <Button variant="primary" href="/ProgressSteps">Check it out!</Button>
  </Card.Body>
</Card>
</>
    );
}


export default MainPage;