import React, { Component } from 'react';
import './style.css'
import { connect } from 'react-redux';
import { handleExperiencesInfo } from '../Actions/index.js';
import { Container, Row, Col} from 'react-bootstrap'


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    experiencesInfoThunk: () => dispatch(handleExperiencesInfo()),
});



class ProfileBody extends Component {
    state = {  }
 
    componentDidMount = async () => {
        await this.props.experiencesInfoThunk()
        console.log(this.props.experiences.experiencesInfo);     
    }
    render() { 
        
        return ( 
            <Container fluid className="mt-5 ml-5">
                <h4>WORK EXPERIENCES :</h4>
                {this.props.experiences.experiencesInfo.length>0  && this.props.experiences.experiencesInfo.map((experiences,index)=>(
                <Row>
                    <Col sm={8} className="Col8 mt-5">
                        <Row>
                    <Col sm={5}>
                        <h6>{experiences.role}</h6>
                
                    </Col>
                    <Col sm={7}>
                    <p><strong>{experiences.company} </strong>: {experiences.description}</p>
                    <p>{experiences.startDate} {experiences.endDate}</p>
                    </Col>
                    </Row>
                    </Col>
                   
                    </Row>))
                }
                    
            </Container>
         );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProfileBody)