import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
// import Header from '../../components/Header';
import veggie from '../../assets/images/HomeVeggies.png';
import sushi from '../../assets/images/homeSushi.png';


const Home = () => {
  return (
        
        <section className='swiggy-bg border border-1 position-relative overflow-hidden vh-100'>
  {/* <Header /> */}
  <Container>
    <Row>
     
      <div className='position-absolute start-0 top-50 translate-middle-y w-25'>
        <img src={veggie} alt="veggie image" className='img-fluid' />
      </div>
   
      <div className='position-absolute end-0 top-50 translate-middle-y w-25'>
        <img src={sushi} alt="sushi image" className='img-fluid' />
      </div>

      
      <Col className='mx-auto text-center w-75 py-5'>
        <h2 className='display-5 text-white fw-bold'>Order food & groceries. Discover best restaurants. Swiggy it!</h2>
        <div className='d-flex justify-content-evenly py-4'>
          <input type="text" placeholder='Enter your delivery loction' className='p-3 rounded-2'/>
          <input type="search"  placeholder='Search for restaurant, item or more' className='p-3 w-50 rounded-2'/>
        </div>
      </Col>

    </Row>
  </Container>
</section>

  )
}

export default Home;