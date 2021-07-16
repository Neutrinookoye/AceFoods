import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'

const Footer = () => {
    let date = new Date()
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; AceFoods {date.getFullYear()}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer