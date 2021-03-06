var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link
var UserDetails = require('../components/UserDetails')
var UserDetailsWrapper = require('../components/UserDetailsWrapper')
var MainContainer = require('../components/MainContainer');
var Loading = require('../components/Loading');

var styles= require('../styles/index');

function puke (obj) {
	return <pre>{JSON.stringify(obj, null , ' ')}</pre>
}

function ConfirmBattle(props) {

	return props.isLoading === true
		?	<Loading/> 
		: 	<MainContainer>
				<h1>Confirm Players</h1>
				<div className='col-sm-8 col-sm-offset-2'>
						<UserDetailsWrapper header = "Player One">
							<UserDetails info={props.playersInfo[0]} />
						</UserDetailsWrapper>
						<UserDetailsWrapper header = "Player Two">
							<UserDetails info={props.playersInfo[1]} />
						</UserDetailsWrapper>
				</div>
				<div className='col-sm-8 col-sm-offset-2'>
					<div className='col-sm-12' style= {styles.space}>
						<button type="button" className="btn btn-large btn-success" onClick={props.onInitiateBattle}> Initiate Battle! </button>
					</div>
					<div className='col-sm-12' style= {styles.space}>
						<Link to="/playerOne">
							<button type="button" className="btn btn-large btn-danger"> Reselect Players </button>
						</Link>
					</div>
				</div>
			</MainContainer>

}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired

}

module.exports=ConfirmBattle