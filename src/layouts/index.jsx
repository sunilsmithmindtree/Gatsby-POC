import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Gatsby POC"
          meta={[
            { name: "description", content: "Gatsby POC" },
            { name: "keywords", content: "GatsbyJS, Graphql" }
          ]}
        />
        <Header />

        <div className="container-fluid body-container">
          {this.props.children()}
        </div>

        <Footer />
      </div>
    );
  }
}
