import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Header from "./components/Header";


const Home = () => {
  return (
        <section className='bg-danger'> 
            <Header/>
            <Container>
                <Row>
                  <div> image</div>
                  <div>
                    <h4>Order food & groceries. Discover best restaurants. Swiggy it!</h4>
                    <div>
                  <input type="text" placeholder='Enter your delivery location' />
                     <datalist id="cities">
        <option value="Delhi" />
        <option value="Mumbai" />
        <option value="Kolkata" />
        <option value="Chennai" />
      </datalist>
                    </div>
                    

                  </div>
                </Row>
            </Container>
        </section>
  )
}

export default Home