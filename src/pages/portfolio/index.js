import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="g-4">
          {dataportfolio.map((data, i) => (
            <Col key={i} xs={12} sm={6} lg={4}>
              <div className="po_item bg-light p-3 d-flex justify-content-center align-items-center position-relative rounded" style={{ height: "300px" }}>
                <img src={data.img} alt="" className="img-fluid h-100 w-auto" style={{ objectFit: "contain" }} />
                <div className="content position-absolute bottom-0 bg-dark bg-opacity-50 text-white w-100 text-center p-2 rounded-bottom">
                  <p>{data.description}</p>
                  <a href={data.link} className="text-white text-decoration-underline">View Project</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
