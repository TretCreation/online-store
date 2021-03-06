import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

import {useParams} from 'react-router-dom'
import { fetchOneProduct } from '../http/productAPI';

const ProductPage = () => {
  const [product, setProduct] = useState({info: []})
  const {id} = useParams()
  
  useEffect(() => {
    fetchOneProduct(id).then(data => setProduct(data))

  }, [])
  
  return (
        <Container>
            <Col md={4}>
              <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img}/>
            </Col>
            <Col md={4}>
              <Row>
                <h2>{product.name}</h2>
              </Row>
            </Col>
            <Col md={4}>
              <Card>
                <h3>{product.price} ₴</h3>
                <Button>Click to cart</Button>
              </Card>
            </Col>
            <Row className="d-flex m-3">
              <h2>Characteristics</h2>
              {product.info.map(info => 
                <Row key={info.id}>
                  {info.title}: {info.description}
                </Row>
              )}
            </Row>
        </Container>
    );
};

export default ProductPage;