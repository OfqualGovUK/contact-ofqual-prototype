const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//Front door
router.post('/contact-type-answer', function (req, res) {

  let contactType = req.session.data.contactType

  if (contactType === 'complaint') {
      res.redirect('/complaints')
  } else {
      //res.redirect('/job_alerts2/create-success-email')
  }

})

//Complaints

// Send them to manage

router.post('/complaint-type-answer', function (req, res) {

  let complaintType = req.session.data.complaintType

  if (complaintType === 'View an existing complaint') {
      res.redirect('/manage')
  } else {
      //res.redirect('/job_alerts2/create-success-email')
  }

})

// Catch all route

router.get('*', function(req, res, next){
  
  if (req.query){
    res.locals.query = req.query
  }

  next()
})

module.exports = router
