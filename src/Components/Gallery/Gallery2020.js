import React from 'react'
import img2020 from '../../Images/2020PujoGallery/2020GalleryMain.jpeg'

import Image from 'react-bootstrap/Image'
import {Container, Col, Row} from 'react-bootstrap'

class Gallery2020 extends React.Component {

    render(){
    
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                        </Col>
                        <Col xs={6} md={4}>
                        </Col>
                        <Col xs={6} md={4}>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={img2020} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Gallery2020