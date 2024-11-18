import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

function Footer() {
  return (
    <div className="footer_outer_container">
      <Container className="footer_inner_container">
        <Row className="footer_icons justify-content-center mb-4">
          <FacebookOutlinedIcon className="mx-3" />
          <InstagramIcon className="mx-3" />
          <YouTubeIcon className="mx-3" />
        </Row>

        <Row className="footer_data justify-content-between">
          <Col xs={12} sm={6} md={3} className="footer_col">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3} className="footer_col">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3} className="footer_col">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3} className="footer_col">
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact US</li>
            </ul>
          </Col>
        </Row>

        <Row className="service_code justify-content-center mb-4">
          <Col xs={12} className="text-center">
            <Button variant="outline-light" className="service-code-btn">
              Service Code
            </Button>
          </Col>
        </Row>

        <Row className="copy-write justify-content-center">
          <Col xs={12} className="text-center">
            <p>&copy; 1997-2004 Netflix, Inc.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
