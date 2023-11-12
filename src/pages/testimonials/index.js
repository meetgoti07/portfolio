import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { testimonials, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Testimonials = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Testimonials | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Testimonials </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>

        </Row>
        <Row className="sec_sp">

          <Col lg="7">
            {testimonials.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })
            }
          </Col>
          <div className="intro_btn-action pb-5">
                <Link to="/contact">
                  <div id="button_h" className="ac_btn btn">
                    Contact Me
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link>
              </div>
        </Row>

      </Container>
      
    </HelmetProvider>
  );
};
