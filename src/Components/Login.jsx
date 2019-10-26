import React, { Component } from 'react';
import { Button, Container, Col,Form } from 'react-bootstrap'
import './style.css'


class Login extends Component {
	state = {}
	render() {
		return (
			<Container className="LPC d-flex justify-content-center">
				<Col sm={6} className="mt-5">
					<h1> LOGIN !</h1>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
				
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
				
						<Button style={{backgroundColor:"white",color:"black"}} type="submit">
							Submit
  </Button>
					</Form>
				</Col>
			</Container>
		);
	}
}

export default Login;