 import React from 'react'
 import { Container,Row,Col,Table,Image } from 'react-bootstrap'
 import { BiSolidPhoneCall } from "react-icons/bi";
 import { MdEmail } from "react-icons/md";
 import { ImMobile } from "react-icons/im";
 const Contact = () => {
   return (
     <>
     <Container style={{marginTop:'50px'}}>
        <Row>
            <Col md={6}>
              <h1>UGS PIZZA</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore labore sed. Architecto ipsum eius optio ullam, alias labore quo soluta iste quos autem reprehenderit animi sed fuga, porro quasi sapiente iure doloribus explicabo praesentium dignissimos voluptatum, repudiandae maiores? Delectus at mollitia tempore autem itaque deserunt enim sunt corporis quibusdam rem maiores dignissimos voluptatibus minus, voluptatem consequuntur! Magni molestias fugit ab at nam debitis amet iusto quam officia doloremque culpa eligendi, praesentium nobis quod expedita. Deserunt molestiae dignissimos debitis voluptate repudiandae cupiditate totam maxime, libero id neque voluptatum culpa asperiores pariatur animi aut? Consequuntur ex dolores libero error voluptatem officia illo, temporibus et sunt quam? Quo cupiditate fugit perspiciatis fugiat vel dolorum? Atque nam velit optio molestiae et recusandae harum rerum sunt suscipit officia. Quasi, inventore autem! Dicta necessitatibus rerum, neque natus, nemo voluptates velit consectetur eum quibusdam, distinctio optio architecto in quod. Quidem itaque officiis, laudantium.</p>
              <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th className='bg-warning text-center'colSpan={3} >--- Contact Details ---</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><BiSolidPhoneCall/></td>
          <td>Phone</td>
          <td>0431-543210</td>
        </tr>
        <tr>
          <td><ImMobile/></td>
          <td>Mobile</td>
          <td>9876543210</td>
        </tr>
        <tr>
          <td><MdEmail/></td>
          <td>Email</td>
          <td>ugstrichy@gmail.com</td>
        </tr>
      </tbody>
    </Table>
            </Col>
            <Col md={6}>
            <Image src="images/farmhouse.jpg" style={{width:'100%',height:'50%'}} />
            </Col>
        </Row>
     </Container>
       
     </>
   );
 };
 
 export default Contact;
 