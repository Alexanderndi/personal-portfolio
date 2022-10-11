import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ecommerce Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      webUrl: "https://dewolsela.com",
    },
    {
      title: "Fashion Industry Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      webUrl: "https://aesteshia.com",
    },
    {
      title: "Ecommerce Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      webUrl: "https://snap-shop.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
      webUrl: "https://snap-shop.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      webUrl: "https://dewolsela.com",
    },
    {
      title: "Business Startup",
      description: "PHP & Laravel Development",
      imgUrl: projImg6,
      webUrl: "https://aesteshia.com",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My Services: Develop complete website from scratch/documentation, Installing laravel application, Add new features with an existing application, Fixing bugs from an existing application, Upgrade to the latest version, Integrating the application with external API, API development. My Expertise: Php MySql Vue.js Laravel Laravel WordPress Bootstrap JavaScript jQuery CSS HTML</p>
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
                    <Tab.Pane eventKey="section">
                      <p>My Services: Develop complete website from scratch/documentation, Installing laravel application, Add new features with an existing application, Fixing bugs from an existing application, Upgrade to the latest version, Integrating the application with external API, API development. My Expertise: Php MySql Vue.js Laravel Laravel WordPress Bootstrap JavaScript jQuery CSS HTML</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My Services: Develop complete website from scratch/documentation, Installing laravel application, Add new features with an existing application, Fixing bugs from an existing application, Upgrade to the latest version, Integrating the application with external API, API development. My Expertise: Php MySql Vue.js Laravel Laravel WordPress Bootstrap JavaScript jQuery CSS HTML</p>
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
