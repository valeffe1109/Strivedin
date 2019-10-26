import React, { Component } from 'react';
import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handlePostsInfo, handleProfileInfo } from '../Actions/index.js'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
	postsInfoThunk: () => dispatch(handlePostsInfo()),
	profileInfoThunk: () => dispatch(handleProfileInfo())
})


class Home extends Component {


    

	componentDidMount = async () => {
		await this.props.postsInfoThunk()
		console.log(this.props.posts.postsInfo);
		await this.props.profileInfoThunk();
		console.log(this.props.profile.profileInfo)
	};
	render() {
		
		const profilePicture = {
            width: '150px',
            border: '2px black solid',

        }
		return (

			<Container className="mt-5">
				<Row>
					<Col className="mt-5 Col8" sm={3}>
						{this.props.profile.profileInfo && this.props.profile.profileInfo.username &&
                          <div>
							<img alt="profilePicture" className="mt-2 rounded-circle" style={profilePicture} src="https://i.ibb.co/bgnVcJC/42580880-930620103797369-3469130438864273408-n.jpg" />
							<h4>{this.props.profile.profileInfo.name} {this.props.profile.profileInfo.surname}</h4>
							<p>{this.props.profile.profileInfo.bio}</p>
							<h6>{this.props.profile.profileInfo.area}</h6>
							</div>}

					</Col>


					<Col className="mt-5 " sm={6}>
						{this.props.posts.postsInfo.length > 0 && this.props.posts.postsInfo.map((posts, index) => (
							<Col className="mt-2 Col8" sm={12}>
								<h6 className="text-center">{posts.text}</h6>

								<small>{posts.username}</small>
								<img src={posts.image} />
							</Col>
						))
						}
					</Col>



					<Col className="mt-5" sm={3}>

						<h6 className="text-center">ADD TO YOUR FEED</h6>


					</Col>



				</Row>
			</Container>

		)


	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
