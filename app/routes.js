const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//Frot door
router.post('/contact-type-answer', function (req, res) {

let contactTypeChoice = req.session.data['contact-type']

if (contactTypeChoice === 'complaint') {
    res.redirect('/complaints')
} else {
    //res.redirect('/job_alerts2/create-success-email')
}

})

module.exports = router
