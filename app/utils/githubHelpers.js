var axios = require ('axios');

var id = 'YOUR_CLIENT_ID';
var sec = 'YOUR_SECRET_ID';
var param = "?client_id="+id+'&client_secret='+ sec;

function getUserInfo(username) {
	// console.log("user:"+username)
	return axios.get('https://api.github.com/users/'+ username + param)

}

var helpers = {
	getPlayersInfo: function(players) {
		// console.log("Inside githubhelpers")
		// console.log("players:"+players )
		// fetch some data from github
		return axios.all(players.map(function(username){
			return getUserInfo(username)
		})).then(function(info) {
			// console.log('Info',info)
			return info.map(function(user){
				return user.data;
			})
			}).catch(function(err){
				console.warn('Error in getPlayersInfo:', err)
		})
	}
};

module.exports = helpers;