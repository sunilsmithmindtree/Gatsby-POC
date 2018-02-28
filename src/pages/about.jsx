import React from "react";
import Link from "gatsby-link";
import { Jumbotron, Button } from "react-bootstrap";

export default class AboutPage extends React.Component {
                 constructor(props) {
                   super(props);

                   this.createMarkup = this.createMarkup.bind(this);
                 }

                 createMarkup(option) {
                   const { homeData } = this.props.data;
                   switch (option) {
                     case "title":
                       return { __html: homeData.edges[0].node.title };
                       break;
                     case "description":
                       return { __html: homeData.edges[0].node.description };
                       break;
                     default: 
                      return { __html: null };

                   }
                 }

                 render() {
                  
                   const { homeData } = this.props.data;

                   console.log("homeData", this.props.data);

                   return <Jumbotron>
                       <div dangerouslySetInnerHTML={this.createMarkup("title")} />
                       <div dangerouslySetInnerHTML={this.createMarkup("description")} />
                       <p>
                         <Button bsStyle="primary" href={homeData.edges[0].node.url} target="_blank">
                           Learn more
                         </Button>
                         {/* <Link to="/">Go back to the Home Page</Link> */}
                       </p>
                     </Jumbotron>;
                 }
               }

export const AboutPageQuery = graphql`
         query HomePage {
           homeData: allHomePages {
             edges {
               node {
                 id
                 title
                 description
                 slug
                 url
               }
             }
           }
         }
       `;
