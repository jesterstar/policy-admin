import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {
  Container,
  Col,
  Row,
  Button
} from 'reactstrap';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <h1>Create policy group:</h1>
        <Row>
          <Col>
            <AvForm>
              <AvField name="name" label="Name (default error message)" type="text" errorMessage="Invalid name" validate={{
                required: {value: true},
                pattern: {value: '^[A-Za-z0-9]+$'},
                minLength: {value: 6},
                maxLength: {value: 16}
              }} />
              <div>Policies Multi select</div>
              <Button color="primary">Submit</Button>
            </AvForm>
          </Col>
        </Row>
      </Container>
    );
  }
}