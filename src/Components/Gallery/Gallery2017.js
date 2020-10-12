import React from 'react'
import Image from 'react-bootstrap/Image'
import {Container, Col, Row} from 'react-bootstrap'

import img2019_1 from '../../Images/2019PujoGallery/2019GalleryMain.jpg'
import img2019_2 from '../../Images/2019PujoGallery/PHOTO-2019-1.jpg'
import img2019_3 from '../../Images/2019PujoGallery/PHOTO-2019-2.jpg'
import img2019_4 from '../../Images/2019PujoGallery/PHOTO-2019-3.jpg'
import img2019_5 from '../../Images/2019PujoGallery/PHOTO-2019-4.jpg'
import img2019_6 from '../../Images/2019PujoGallery/PHOTO-2019-5.jpg'
import img2019_7 from '../../Images/2019PujoGallery/PHOTO-2019-6.jpg'
import img2019_8 from '../../Images/2019PujoGallery/PHOTO-2019-7.jpg'
import img2019_9 from '../../Images/2019PujoGallery/PHOTO-2019-8.jpg'
import img2019_10 from '../../Images/2019PujoGallery/PHOTO-2019-9.jpg'

class Gallery2017 extends React.Component {

    render(){
    
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs={6} md={4} lg={6}>
                            <Image src={img2019_4} thumbnail />
                        </Col>
                        <Col xs={6} md={4} lg={6}>
                            <Image src={img2019_2} thumbnail />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4} lg={6}>
                            <Image src={img2019_5} thumbnail />
                        </Col>
                        <Col xs={6} md={4} lg={6}>
                            <Image src={img2019_6} thumbnail />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4} lg={6}>
                            <Image src={img2019_8} thumbnail />
                        </Col>
                        <Col xs={6} md={4} lg={6}>
                            <Image src={img2019_9} thumbnail />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4} lg={6}>
                            <Image src={img2019_1} thumbnail />
                        </Col>
                        <Col xs={6} md={4} lg={6}>
                            <Image src={img2019_10} thumbnail />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4} lg={6}>
                            <Image src={img2019_3} thumbnail />
                        </Col>
                        <Col xs={6} md={4} lg={6}>
                            <Image src={img2019_7} thumbnail />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Gallery2017