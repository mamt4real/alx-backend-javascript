const AppController = require('../controllers/AppController')
const StudentController = require('../controllers/StudentsController')

module.exports = (app) => {
	app.get("/", AppController.getHomepage);
	app.get("/students", StudentController.getAllStudents)
	app.get("/students/:major", StudentController.getAllStudentsByMajor)
}
