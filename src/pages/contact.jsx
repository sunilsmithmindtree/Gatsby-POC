import React from "react";
import Link from "gatsby-link";
import { Jumbotron, Button } from "react-bootstrap";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
             const { events } = this.props.data;

             console.log('events', events);

             const title = events.edges[0].node.eventTitle || "Contact Page";

             return <Jumbotron>
                 <h2>{title}</h2>
                 <p>
                   This is a simple hero unit, a simple
                   jumbotron-style component for calling extra
                   attention to featured content or information.
                 </p>
                 <p>
                   <Button bsStyle="primary">Learn more</Button>
                   {/* <Link to="/">Go back to the Home Page</Link> */}
                 </p>
               </Jumbotron>;
           }
}

export default ContactPage;

export const ContactPageQuery = graphql`
         query Events {
           events: allEvents {
             edges {
               node {
                 id
                 eventTitle
               }
             }
           }
         }
       `;
