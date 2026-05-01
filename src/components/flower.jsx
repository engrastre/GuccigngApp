import "./flower.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import julietRose from "../assets/J.jpg";
import lilies from "../assets/L.jpg";
import tulips from "../assets/T.jpg";
import sunflower from "../assets/S.jpg";

const FlowerShopForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    quantity: "",
    deliveryAddress: "",
    flowerType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.flowerType) {
      alert("Please select an arrangement.");
      return;
    }
    console.log("Luxury Order Received:", formData);
    setFormData({ customerName: "", quantity: "", deliveryAddress: "", flowerType: "" });
  };

  return (
    <div className="luxury-wrapper">
      <header className="shop-header text-center">
        <h1>MAISON DE GUCCI FLORALS</h1>
        <p className="subtitle">"Where technology meets the timeless beauty of the petal" — Teri</p>
      </header>

      <Container fluid="md">
        <Row className="gy-4 align-items-start"> 
          
          {/* IMAGE GRID*/}
          <Col xs={12} lg={{ span: 7, order: 2 }}>
            <Row className="g-3">
              <Col xs={6}>
                <div className="grid-item">
                  <img src={julietRose} alt="Juliet Rose" />
                  <span>Juliet Rose</span>
                </div>
              </Col>
              <Col xs={6}>
                <div className="grid-item">
                  <img src={lilies} alt="Lilies" />
                  <span>Royal Lilies</span>
                </div>
              </Col>
              <Col xs={6}>
                <div className="grid-item">
                  <img src={tulips} alt="Tulips" />
                  <span>French Tulips</span>
                </div>
              </Col>
              <Col xs={6}>
                <div className="grid-item">
                  <img src={sunflower} alt="Sunflower" />
                  <span>Golden Sun</span>
                </div>
              </Col>
            </Row>
          </Col>

          {/* FORM CARD*/}
          <Col xs={12} lg={{ span: 5, order: 1 }}>
            <section className="form-card shadow-sm">
              <h2 className="form-title">Place Your Order</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label>Customer Name</label>
                  <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label>Quantity</label>
                  <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label>Delivery Address</label>
                  <input type="text" name="deliveryAddress" value={formData.deliveryAddress} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label>Select Arrangement</label>
                  <select name="flowerType" value={formData.flowerType} onChange={handleChange} required>
                    <option value="">-- Choose Excellence --</option>
                    <option value="Juliet Rose">Juliet Rose</option>
                    <option value="Lilies">Royal Lilies</option>
                    <option value="Tulips">French Tulips</option>
                    <option value="Sunflower">Golden Sun</option>
                  </select>
                </div>
                <button type="submit" className="luxury-btn">RESERVE ORDER</button>
              </form>
            </section>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default FlowerShopForm;