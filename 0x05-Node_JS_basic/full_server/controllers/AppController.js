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
  		res.set('Content-Type', 'text/plain');
		res.status(200).send("Hello Holberton School!")
	}
}

export default AppController
