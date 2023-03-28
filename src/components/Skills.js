import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
// import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                About me
                            </h2>
                            <p>My name is Leonel Abrante, I am a Informatic engineer from Unitec in Venezuela. I started learning web programming since 2020. Soft skills: self-taught, teamwork, flexibility, attention to details.</p>
                            <h2>
                                Skills
                            </h2>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>Web Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>javaScript</h5>
                                </div>

                                <div className="item">
                                    <img src={meter3} alt="" />
                                    <h5>HTML & CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>Angular</h5>
                                </div>
                               
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>Git & Github</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} alt="" /> */}
        </section>
    )
}