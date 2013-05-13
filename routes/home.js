
/*
 * our routes
 */

module.exports = function(app){
	// landing page
	app.get('/', function(req, res){
		res.render('home', {title: 'Bob Williams'});
	});
};
