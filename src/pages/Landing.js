import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";

function Landing() {
  return (
    <Container className="centered landing">
      <div className="bg"></div>
      {/* Logo */}
      <Fade top>
        <div className="landingLogoBG">
          <div className="landingLogo">J</div>
        </div>
      </Fade>

      <Container className="textBox">
        <Fade bottom>
          {/* App Title */}
          <Row>
            <Col>
              <div className="landingTitle">Jeweled</div>
            </Col>
          </Row>

          {/* Sub Title */}
          <Row>
            <Col>
              <div className="landingSub">The Dating App</div>
            </Col>
          </Row>

          {/* Description */}
          <Row>
            <Col>
              <div className="landingDesc">
                Transitioning into a more meaningful relationship
              </div>
            </Col>
          </Row>

          {/* Sign In */}
          <Row>
            <Col>
              <Button className="signIn borderButton">Sign In</Button>
            </Col>
          </Row>

          {/* Sign Up */}
          <Row>
            <Col>
              <Button className="signUp borderlessButton">Sign Up</Button>
            </Col>
          </Row>
        </Fade>
      </Container>
    </Container>
  );
}

export default Landing;
