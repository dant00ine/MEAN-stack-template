//require controllers
var users = require('../controllers/users.js')

module.exports = function(app){

	app

	.get('/users', function(request, response){
		users.index(request, response)
	})

	.get('/users/new', function(request, response){
		users.create(request, response)
	})

	.get('/users/:id', function(request, response){
		users.show(request, response)
	})

	.post('/users/:id/edit', function(request, response){
		users.update(request, response)
	})

	.post('/users', function(request, response){
		users.create(request, response)
	})

	.post('/users/:id/destroy', function(request, response){
		users.destroy(request, response)
	})

	.post('users/:id/update', function(request, response){
		users.update(request, response)
	})


	.get('/*', function(request, response){
		response.redirect('/')
	})

	.post('/*', function(request, response){
		response.redirect('/')
	})
}