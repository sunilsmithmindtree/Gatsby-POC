import React from "react";
import Link from "gatsby-link";

import { Row, Col, Panel } from "react-bootstrap";

import CarouselComponent from "../components/Carousel.jsx";
import PanelComponent from "../components/Panel.jsx";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.data)
    const { indexPageData } = this.props.data;

    console.log("indexPageData", indexPageData);
    



    return <div>
        <Row>
          <CarouselComponent carouselData={indexPageData.edges["0"].node.carousel} />
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <PanelComponent title={"Title 1"} />
          </Col>
          <Col sm={4}>
            <PanelComponent title={"Title 2"} />
          </Col>
          <Col sm={4}>
            <PanelComponent title={"Title 3"} />
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <PanelComponent title={"Title 4"} />
          </Col>
          <Col sm={4}>
            <PanelComponent title={"Title 5"} />
          </Col>
          <Col sm={4}>
            <PanelComponent title={"Title 6"} />
          </Col>
        </Row>
      </div>;
  }
}

export const IndexPageQuery = graphql`
         query IndexPageData {
           indexPageData: allEvents {
             edges {
               node {
                 eventTitle
                 carousel {
                   title
                   image {
                     url
                   }
                 }
               }
             }
           }
         }
       `;
