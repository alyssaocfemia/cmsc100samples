var student = require('./../controllers/student');
var degree = require('./../controllers/degree');

module.exports = function (router) {
	/*router for students*/
	router.route('/students')   
		.get(student.find)
		.post(student.insert)
		.put(student.update);
	router.route('/students/:studNum')   
		.get(student.findOne)
		.delete(student.remove);
		
	router.route('/degrees')   
		.get(degree.find)
		.post(degree.insert)
		.put(degree.update);
	router.route('/degrees/:id')   
		.get(degree.findOne)
		.delete(degree.remove);
	
	return router;
};

