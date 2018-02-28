import React from "react";
import Link from "gatsby-link";
import { Panel, Button } from "react-bootstrap";

export default class PanelComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Panel id="collapsible-panel-example-1" defaultExpanded>
        <Panel.Heading>
          <Panel.Title>{this.props.title}</Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.

            <p style={{ marginTop: '10px' }}>
              <Button bsStyle="primary" bsSize="small">Learn more</Button>
            </p>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>);
  }
}
