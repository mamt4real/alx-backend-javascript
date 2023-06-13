const express = require('express');

const app = express();

require("./routes")(app)

app.listen(1245, () => {})

module.exports = app
