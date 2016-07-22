// Your html-routes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.

//////////////////
// DEPENDENCIES //
//////////////////

var path = require('path');



/////////////
// ROUTING //
/////////////

module.exports = function(app){

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found.
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}