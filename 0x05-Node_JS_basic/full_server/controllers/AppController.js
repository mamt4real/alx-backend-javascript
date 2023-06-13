/**
 * AppController - Handles request response
 */

class AppController{

	/**
	 * getHomepage - returns the homepage message
	 * @param {*} req - request object
	 * @param {*} res - response object
	 */
	static getHomepage(req, res){
		res.status(200).send("Hello Holberton School!")
	}
}

module.exports = AppController
