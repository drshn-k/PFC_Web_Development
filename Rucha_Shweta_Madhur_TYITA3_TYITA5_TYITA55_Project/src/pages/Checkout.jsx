import React, { useState } from "react";
import { Container, Row, Col, Form, input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { collection, serverTimestamp, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import {db}from "../firebase.config"
import { addDoc ,doc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const intitialstate ={
   yrname:"",
   email:"",
   phonenumber:"",
   address:"",
   city:"",
   postalcode:"",
   country:""

}






const Checkout = () => {


  const[form,setform] = useState(intitialstate);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);


  const{yrname,email,
  phonenumber,
  address,
  city,
  postalcode,
  country}=form;

  
  const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

 

  const  navigate = useNavigate();

  const handlesubmit=async(e)=>{
    e.preventDefault();
    if(yrname && email && 
      phonenumber &&
      address && 
      city &&
      postalcode && 
      country){
        console.log(form);
        
          try{
            await addDoc(collection(db,"details"),{
              ...form,
              timestamp:serverTimestamp()
            });
            console.log("posted successfully");
          }catch(err){console.log(err)}
       
  }
  else{
    console.log("fill all the fields");
  }

  // navigate("/");
}
  
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <form className="billing__form"  onSubmit={handlesubmit}>
                {/* <input className="form__group"> */}
                  <input type="text" name="yrname"  value={yrname} onChange={handlechange} placeholder="Enter your name" />
                {/* </input> */}

                {/* <input className="form__group"> */}
                  <input type="email" name="email" value={email} onChange={handlechange} placeholder="Enter your email" />
                {/* </input> */}

                {/* <input className="form__group"> */}
                  <input type="text" name="phonenumber"  value={phonenumber} onChange={handlechange}placeholder="Phone number" />
                {/* </input> */}

                {/* <input className="form__group"> */}
                  <input type="text" name="address" value={address} onChange={handlechange}placeholder="Street address" />
                {/* </input> */}

                {/* <input className="form__group"> */}
                  <input type="text"  name="city"  value={city} onChange={handlechange}placeholder="City" />
                {/* </input> */}

                {/* <input className="form__group"> */}
                  <input type="text"  name="postalcode" value ={postalcode} onChange={handlechange} placeholder="Postal code" />
                {/* </input> */}

                {/* <input className="form__group"> */}
                  <input type="text"  name ="country"  value={country} onChange={handlechange} placeholder="Country" />
                {/* </input> */}
                <button type ="submit" tyclassName="buy__btn2 auth__btn w-100">
                  Place an order
                </button>
              </form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>

                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button type ="submit" tyclassName="buy__btn2 auth__btn w-100">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
