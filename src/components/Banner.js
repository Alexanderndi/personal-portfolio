import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Fullstack Developer", "Frontend - React Js Developer", "Backend PHP & Laravel/Symfony Developer", "Backend Java & Spring Boot Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting
    ? fullText.substring(0, text.length - 1)
    : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
    setDelta(50); // faster deletion
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setDelta(period);
  } else if (isDeleting && updatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setDelta(100);
  }
}

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Eduo Ndifreke, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Fullstack Developer", "Frontend - React Js Developer", "Backend PHP & Laravel/Symfony Developer", "Backend Java & Spring Boot Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am Ndifreke Alexander, a Fullstack Developer with over 7 years' experience in frontend and backend applications development with inherent analytical and communication skills, a developer who pilots quality website and application development across the different aspect of Technology.</p>
                  <button onClick={() => window.location.href = "https://linkedin.com/in/ndifrekealexander"}>
                    Let’s Connect <ArrowRightCircle size={28} />
                  </button>

                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
