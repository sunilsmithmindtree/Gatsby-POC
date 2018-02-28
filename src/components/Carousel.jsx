import React from "react";
import Link from "gatsby-link";
import { Carousel, Button } from "react-bootstrap";

// import Carousel1 from "../asset/images/carousal1.jpg";
// import Carousel2 from "../asset/images/carousal2.jpg";
// import Carousel3 from "../asset/images/carousal3.jpg";

export default class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    // console.log("carousal", this.props.carouselData);
    var carouselComp = null;
    if (this.props.carouselData && this.props.carouselData.length > 0) {
      // console.log(this.props.carouselData);

      carouselComp = this.props.carouselData.map((item, i) => {

        return (
          <Carousel.Item key={i}>
              <img width={1300} height={400} alt="1300x400" src={item.image["0"].url} />
              <Carousel.Caption>
                <div dangerouslySetInnerHTML={{__html: `${item.title}`}} />
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis
                  interdum.
                </p>
                <p>
                  <Button bsStyle="primary">Learn more</Button>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
      });

    } 

    if (carouselComp) {
      return (
        <Carousel>
          {carouselComp}
        </Carousel>
      );
    }
    
    return null;
    
  }
}





// return <Carousel>
    //       <Carousel.Item>
    //         <img width={1300} height={400} alt="1300x400" src={Carousel1} />
    //         <Carousel.Caption>
    //           <h3>Carousel 1</h3>
    //           <p>
    //             Nulla vitae elit libero, a pharetra augue mollis interdum.
    //           </p>
    //           <p>
    //             <Button bsStyle="primary">Learn more</Button>
    //           </p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //       <img width={1300} height={400} alt="1300x400" src={Carousel2} />
    //       <Carousel.Caption>
    //         <h3>Carousel 2</h3>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //         <p>
    //           <Button bsStyle="primary">Learn more</Button>
    //         </p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img width={1300} height={400} alt="1300x400" src={Carousel3} />
    //       <Carousel.Caption>
    //         <h3>Carousel 3</h3>
    //         <p>
    //           Praesent commodo cursus magna, vel scelerisque nisl
    //           consectetur.
    //         </p>
    //         <p>
    //           <Button bsStyle="primary">Learn more</Button>
    //         </p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     </Carousel>;
