const {readDatabase} = require("../utils")

/**
 * StudentsController - handle students requests response
 */
class StudentsController{

	/**
	 * getAllStudents - retrieves all students
	 * @param {*} req - request object
	 * @param {*} res - response object
	 */
	static async getAllStudents(req, res){
  		res.set('Content-Type', 'text/plain');
		const path = req.query.file || process.argv[2];
		try{
			const data = await readDatabase(path);
			const sorted = Object.keys(data);
			sorted.sort()
			res.write("This is the list of our students\n");
			for (const key of sorted)
				res.write(
					`Number of students in ${key}: ${data[key].length}. List: ${
						data[key].join(", ")
					}`
				);
			res.status(200).end();
		}catch (error){
			res.status(500).send("Cannot load the database");
		}

	}

	/**
	 * getAllStudentsByMajor - retrieve students by major
	 * @param {*} req request object
	 * @param {*} res response object
	 */
	static async getAllStudentsByMajor(req, res){
  		res.set('Content-Type', 'text/plain');
		const path = req.query.file || process.argv[2];
		const major = req.params.major

		if (!["SWE", "CS"].includes(major))
			return res.status(500).send("Major parameter must be CS or SWE");

		try{
			const data = await readDatabase(path);
			res.write(`List: ${data[major].join(", ")}`);
			res.status(200).end();
		}catch (error){
			res.status(500).send("Cannot load the database");
		}
	}

}

module.exports = StudentsController
