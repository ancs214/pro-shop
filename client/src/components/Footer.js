import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <a target="_blank" href="https://icons8.com/icon/13010/shop">Shop icon by Icons8</a>
                        <br />
                        Copyright &copy; ProShop
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer