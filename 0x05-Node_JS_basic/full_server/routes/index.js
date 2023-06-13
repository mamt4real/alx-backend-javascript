import AppController from '../controllers/AppController.js'
import StudentController from '../controllers/StudentsController.js'

const router = (app) => {
	app.get("/", AppController.getHomepage);
	app.get("/students", StudentController.getAllStudents)
	app.get("/students/:major", StudentController.getAllStudentsByMajor)
}

export default router
