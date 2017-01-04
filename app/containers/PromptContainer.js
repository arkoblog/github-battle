var React = require('react');
var transparentBg= require('../styles/index').transparentBg

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			username: ''
		}
	},
	onUpdateUser: function(e){
		this.setState({
			username: e.target.value
		})
	},
	onSubmitUser: function(e){
		e.preventDefault();
		var username=this.state.username;
		this.setState({
			username : ''
		});
		if (this.props.routeParams.playerOne) {
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
			// goto battle
		} else {
			this.context.router.push('/playerTwo/'+this.state.username)
			// console.log(this.context)
			//goto playerTwo
		}
	},
	render: function() {
		// console.log("Haha"+this);
		return (
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
				<h1>{this.props.route.header}</h1>
				<div className="col-sm-12">
					<form onSubmit={this.onSubmitUser}>
						<div className="form-group">
							<input 
							onChange={this.onUpdateUser}
							value={this.state.username}
							className="form-control"
							placeholder="Github Username" 
							type="text"/>

						</div>
						<div className="form-group col-sm-4 col-sm-offset-4">
							<button className="btn btn-block btn-success " type="submit">Submit </button>
						</div>
					</form>
				</div>
			</div>
		)
	}
})

module.exports= PromptContainer;