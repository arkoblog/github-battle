var React = require('react')
var PropTypes = React.PropTypes;
var transparentBg= require('../styles/index').transparentBg

// functional stateless components
function Prompt(props) {

		return (
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
				<h1>{props.header}</h1>
				<div className="col-sm-12">
					<form onSubmit={props.onSubmitUser}>
						<div className="form-group">
							<input 
							onChange={props.onUpdateUser}
							value={props.username}
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

};

Prompt.proptypes = {
		header: PropTypes.string.isRequired,
		onSubmitUser: PropTypes.func.isRequired,
		onUpdateUser: PropTypes.func.isRequired,
		username: PropTypes.string.isRequired				
	}

/*var Prompt = React.createClass ({
	propTypes: {
		header: PropTypes.string.isRequired;
		onSubmitUser: PropTypes.func.isRequired;
		onUpdateUser: PropTypes.func.isRequired;
		username: PropTypes.string.isRequired;				
	},
	render: function(){
		return (
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
				<h1>{this.props.header}</h1>
				<div className="col-sm-12">
					<form onSubmit={this.props.onSubmitUser}>
						<div className="form-group">
							<input 
							onChange={this.props.onUpdateUser}
							value={this.props.username}
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
});
*/
module.exports = Prompt;
