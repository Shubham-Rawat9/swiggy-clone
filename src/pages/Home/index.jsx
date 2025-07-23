import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import veggie from '../../assets/images/HomeVeggies.png';
import sushi from '../../assets/images/homeSushi.png';
import homecardfirst from '../../assets/images/card1.png';
import homecardsecond from '../../assets/images/card2.png';
import homecardthird from '../../assets/images/card3.png';


const Home = () => {
  return (
  
        <section className='swiggy-bg position-relative overflow-hidden vh-100 p-0 m-0'>

  <Container>
    <Row>
     
   
      <div className='position-absolute' style={{ top: '35%', right: '1%', transform: 'translateY(-50%)' }}>
          <img src={veggie} alt="veggie image" className='img-fluid' style={{ width: '250px', margin: 0, padding: 0 }} />
      </div>
   
      <div className='position-absolute' style={{ top: '35%', left: '82%', transform: 'translateY(-50%)' }}>
        <img src={sushi} alt="sushi image" className='img-fluid' style={{ width: '250px', margin: 0, padding: 0 }}/>
      </div>

    
    <Col>
  <Row className="text-center">
    <h2 className="display-5 text-white fw-bold">
      Order food & groceries. Discover best restaurants. Swiggy it!
    </h2>
  </Row>

  <Row className="justify-content-evenly align-items-center  py-3">
    <Col md={4} className='text-end '>
      <input
        type="text"
        placeholder="Enter your delivery location"
        className='button1 p-3 border-0 text-secondary' 
      /> 
    </Col>
    <Col md={6}>
      <div className="button2 p-2 text-center align-content-center "style={{ maxWidth: '400px' }}><p className='text-secondary'>Search for your restaurants</p></div>
    </Col>
  </Row>

  <Row className='justify-content-center py-5'>
    <Col md={4}><img src={homecardfirst} alt="card 1" className='img-fluid'/></Col>
    <Col md={4}><img src={homecardsecond} alt="card 1" className='img-fluid'/></Col>
    <Col md={4}><img src={homecardthird} alt="card 1" className='img-fluid'/></Col>
  </Row>
</Col>


    </Row>
  </Container>
</section>

  )
}

export default Home;