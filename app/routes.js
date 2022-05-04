const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//Front door
router.post('/contact-type-answer', function (req, res) {

  let contactType = req.session.data.contactType

  if (contactType === 'Make a complaint') {
      res.redirect('/complaints')
  } else if (contactType === 'Ask a general question') {
    res.redirect('/ask-a-question')
  }

})

// Ask a question

// Is your question about an awarding organisation regulated by Ofqual?
router.post('/is-it-ao-answer', function (req, res) {

  let isItAo = req.session.data.isItAo

  if (isItAo === 'Yes') {
      res.redirect('/ask-a-question/search-for-ao')
    } else {
      res.redirect('/ask-a-question/is-it-qual')
  }

})

// Is your question about a qualification regulated by Ofqual?
router.post('/is-it-qual-answer', function (req, res) {

  let isItqual = req.session.data.isItqual

  if (isItqual === 'Yes') {
      res.redirect('/ask-a-question/search-for-qual')
    } else {
      res.redirect('/ask-a-question/center-school-info')
  }

})

// Complaints

// Send them to manage

router.post('/complaint-type-answer', function (req, res) {

  let complaintType = req.session.data.complaintType

  if (complaintType === 'View an existing complaint') {
      res.redirect('/manage/login')
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
