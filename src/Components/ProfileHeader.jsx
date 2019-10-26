import React, { Component } from 'react';
import { Container, Row, Col, Button, ButtonGroup ,Modal,InputGroup,FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import { handleProfileInfo } from '../Actions/index.js';
import './style.css'


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    profileInfoThunk: () => dispatch(handleProfileInfo()),
});

class ProfileHeader extends Component {
   constructor(props){
       super(props);
       this.state={
           showModal:false
       };
   }
    componentDidMount = async () => {
        await this.props.profileInfoThunk()
        console.log(this.props.profile.profileInfo);     
    };

    openModal = () => {
        this.setState({ showModal: true });
      };

      closeModal=() =>{

        this.setState({showModal:false})
      };
    render() {


        const styles = {
            backgroundImage: 'url(https://i.ibb.co/pRvQrTQ/close-up-code-coder-965345-1.jpg)',
            height: "200px",

        }

        const profilePicture = {
            width: '150px',
            border: '2px black solid',

        }

       


        return (




            <Container fluid className="mt-5 ml-5">

                <Row>
                    <Col sm={8} style={styles}>

                    </Col>

                </Row>
                <Row>

                    <Col sm={8} className="Col8" >
                        {this.props.profile.profileInfo && this.props.profile.profileInfo.username && 
                            <div>
                        <Row>
                            <Col sm={8}>
                                <img alt="profilePicture" className="mt-2" style={profilePicture} src="https://i.ibb.co/bgnVcJC/42580880-930620103797369-3469130438864273408-n.jpg" />
                            </Col>
                            <Col sm={4}>
                                <ButtonGroup className="mt-2" aria-label="Basic example">
                                    <Button variant="primary" onClick={() => {
                this.openModal();
              }}>Add profile section</Button>
                                    <Button variant="light">More</Button>
                                </ButtonGroup>
                            </Col>
                            
                        </Row>


                        <Row>
                        <Col className=" mt-3" sm={7}>
                                <h4>{this.props.profile.profileInfo.name} {this.props.profile.profileInfo.surname}</h4>
                                <p>{this.props.profile.profileInfo.bio}</p>
                                <h6>{this.props.profile.profileInfo.area}</h6>
                            </Col>
                            <Col className="ml-3 mb-5" sm={4}>
                                <h4><FontAwesomeIcon icon="university" fixedWidth /> {this.props.profile.profileInfo.title}</h4>
                            </Col>


                        </Row>
                        </div>

                        }
                    </Col>
                </Row>
                <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showModal}
          onHide={this.toggleModal}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Add a Work Experience
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="user"
                onChange={e => this.setState({ username: e.target.value })}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.closeModal();
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
