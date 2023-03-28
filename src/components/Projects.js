import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "WeLoveMerchant",
      description: "Angular, JavaScript, TypeScript",
      imgUrl: projImg4,
      projURL: 'https://github.com/ljat11/WeLoveMerchant',
      prevURL: 'https://ljat11.github.io/WeLoveMerchant/'

    },
    {
      title: "Basic Pokedex",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg5,
      projURL: 'https://github.com/ljat11/Pokedex_basico',
      prevURL: 'https://ljat11.github.io/Pokedex_basico/'
    },
    {
      title: "Expeses Chart (frontEnd Mentor challenge)",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg6,
      projURL: 'https://github.com/ljat11/expenses-chart',
      prevURL: 'https://ljat11.github.io/expenses-chart/'
    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'
    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
  ];

  const projects2 = [
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
  ];

  const projects3 = [
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
    {
      title: "COMING SOON",
      description: "Design & Development",
      imgUrl: projImg7,
      projURL: '/',
      prevURL: '/'

    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Some Projects, from web that I've made.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
