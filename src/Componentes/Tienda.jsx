
import { useState } from "react";
import "../stylesheets/Home.css";

import {
  Container, Row, Col, Card, Button, Modal, Badge, Offcanvas
} from "react-bootstrap";

const productos = [
  {
    id: 1,
    nombre: "Comic Visumbrio",
    precio: "$25.000",
    imagen: "https://via.placeholder.com/300x350",
    descripcion: "Edición física del cómic Visumbrio."
  },
  {
    id: 2,
    nombre: "Poster Oficial",
    precio: "$15.000",
    imagen: "https://via.placeholder.com/300x350",
    descripcion: "Poster ilustrado de Visumbrio."
  },
  {
    id: 3,
    nombre: "Pack de Stickers",
    precio: "$8.000",
    imagen: "https://via.placeholder.com/300x350",
    descripcion: "Colección de stickers exclusivos."
  }
];

export const Tienda = () => {
  const [showModal, setShowModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const [showCart, setShowCart] = useState(false);
  const [carrito, setCarrito] = useState([]);

  const verProducto = (producto) => {
    setProductoSeleccionado(producto);
    setShowModal(true);
  };

  const agregarCarrito = (producto) => {
  setCarrito((prev) => [...prev, producto]);
  console.log("Agregado");
};

  return (
    <>
      <section className="banner-tienda">
        <Container>
          <h1>Tienda Visumbrio</h1>
          <p>
            Descubre productos exclusivos inspirados en el universo de
            Visumbrio.
          </p>

          <Button
            variant="light"
            onClick={() => setShowCart(true)}
          >
            🛒 Carrito ({carrito.length})
          </Button>
        </Container>
      </section>

      <Container>

        <div className="mb-4 text-center">
          <Badge className="badge-visumbrio fs-6">
            Edición Especial Disponible
          </Badge>
        </div>

        <Row>
          {productos.map((producto) => (
            <Col md={4} className="mb-4" key={producto.id}>
              <Card className="product-card h-100">

                <Card.Img
                  src={producto.imagen}
                />

                <Card.Body>
                  <Card.Title>
                    {producto.nombre}
                  </Card.Title>

                  <Card.Text>
                    {producto.precio}
                  </Card.Text>

                  <Button
                    className="btn-visumbrio me-2"
                    onClick={() => verProducto(producto)}
                  >
                    Ver más
                  </Button>

                  <Button
                    className="btn-visumbrio-secundario"
                    onClick={() => agregarCarrito(producto)}
                  >
                    Agregar
                  </Button>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {productoSeleccionado?.nombre}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={productoSeleccionado?.imagen}
            alt=""
            className="img-fluid mb-3"
          />

          <p>{productoSeleccionado?.descripcion}</p>

          <h5>{productoSeleccionado?.precio}</h5>
        </Modal.Body>
      </Modal>

      <Offcanvas
        show={showCart}
        onHide={() => setShowCart(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Carrito de Compras
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {carrito.length === 0 ? (
            <p>No hay productos.</p>
          ) : (
            carrito.map((item, index) => (
              <div key={index} className="mb-3">
                <strong>{item.nombre}</strong>
                <br />
                {item.precio}
              </div>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};



















/* <div className="container flex-grow-1">
import React from 'react'

export const Tienda = () => {
  return (
      <>
      
          
          </>
    
  )
}
<h3 className='text-center mb-5 tituli'>TIENDA</h3>
<h5 className="text-center mb-5">NUESTROS PRODUCTOS</h5>

          <div className="row g-5 justify-content-center">
              <div className="col-6 col-md-4 col-lg-3 text-center">
                  <img src="./src/assets/Pantalon.png" className="img-fluid mb-2 product-img" alt="Pantalón" />
                  <p className="nombre">Pantalón Negro</p>
              </div>

              <div className="col-6 col-md-4 col-lg-3 text-center">
                  <img src="./src/assets/billetera.png" className="img-fluid mb-2 product-img" alt="Billetera" />
                  <p className="nombre">Billetera Visumbrio</p>
              </div>

              <div className="col-6 col-md-4 col-lg-3 text-center">
                  <img src="./src/assets/medias.png" className="img-fluid mb-2 product-img" alt="Medias" />
                  <p className="nombre">Medias Negras</p>
              </div>

              <div className="col-6 col-md-4 col-lg-3 text-center">
                  <img src="./src/assets/gorro-blanco.png" className="img-fluid mb-2 product-img" alt="Gorro" />
                  <p className="nombre">Gorro Blanco</p>
              </div>

              <div className="col-6 col-md-4 col-lg-3 text-center">
                  <img src="./src/assets/botella.png" className="img-fluid mb-2 product-img" alt="Botella" />
                  <p className="nombre">Botella Negra</p>
              </div>
          </div>
      </div><section className="barra-difuminada text-center">
              <p className="text-white mb-0">
                  Si eres una persona con alto interés en temas sociales, culturales y en dinámicas de poder, esta página es para ti
              </p>
          </section>*/