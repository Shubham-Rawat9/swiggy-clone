// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// const Header = () => {
//   return (
//     <header>
//       <Container className="py-5">
//         <Row className="align-items-center">
//             <Col md={4}> 
//             <div className="w-50">
//                     <img src={swiggy} alt="swiggy logo"  className="img-fluid"/> </div> 
//             </Col>
//             <Col md={8}>
//                     <nav>
//                         <ul className="list-unstyled d-flex justify-content-end">
//                             <li className="px-4 fw-bolder"><a href="#" className="text-white text-decoration-none">Swiggy Corporate</a></li>
//                             <li className="px-4 fw-bolder"><a href="#" className="text-white text-decoration-none">Partner with us</a></li>
//                             <li className="px-4 fw-bolder"><a href="#" className="text-white text-decoration-none border border-1 p-3"> Get the App</a></li>
//                             <li className="px-4 fw-bolder"><a href="#" className="text-white text-decoration-none border bg-black p-3"> Sign In</a></li>
//                         </ul>
//                     </nav>
//             </Col>
//         </Row>
//       </Container>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import swiggy from '../../assets/images/swiggy_logo.png';
import { Container, Row, Col } from 'react-bootstrap';


const Header = () => {
  return (
    <header>
      <Container className=" shadow-sm py-5">
        <Row className="align-items-center">
          <Col md={3}>
          <div className="w-50">
                    <img src={swiggy} alt="swiggy logo"  className="img-fluid"/> 
          </div> 
            </Col>
         
          <Col md={9}>
             <nav>
                         <ul className="list-unstyled d-flex justify-content-end">
                             <li className="px-4 fw-bolder"><a href="#" className="text-white text-decoration-none">Swiggy Corporate</a></li>
                             <li className="px-4 fw-bolder"><a href="#" className="text-white text-decoration-none">Partner with us</a></li>
                             <li className="px-4 fw-bolder"><a href="#" className="text-white text-decoration-none border border-1 p-3"> Get the App</a></li>
                             <li className="px-4 fw-bolder"><a href="#" className="text-white text-decoration-none border bg-black p-3"> Sign In</a></li>
                         </ul>
                     </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
