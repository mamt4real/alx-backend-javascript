const {readFile} = require("fs/promises")

/**
 * readDatabase - reads a database file
 * @param {string} path - file path
 * @return {*} object of arrays of firstname per field
 */
const readDatabase = async (path) => {
	try{
		const content = await readFile(path, {encoding: "utf8"});
		const lines = content.split("\n");
		lines.shift(0);
		const result = {}
		lines.forEach((line) => {
			const columns = line.split(",");
			if (columns.length < 4) return;
			const [firstName, _, __, field] = columns;
			if (result.hasOwnProperty(field))
				result[field.toUpperCase()].push(firstName);
			else
				result[field.toUpperCase()] = [firstName];
		});
		return result
	}catch (error){
		Promise.reject(error)
	}
}

module.exports = {
	readDatabase
}
