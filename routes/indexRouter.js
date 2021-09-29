const express = require('express');
const fs = require('fs');


//Creating express router to handle home page requests
const router = express.Router();
router.get('/', (req, res) => {
    let index = fs.createReadStream('./appDirectory/index.html'); //Change the path if your html file has other name than index.html or is inside different directory
    index.pipe(res);
});


module.exports = router;