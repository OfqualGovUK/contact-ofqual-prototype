const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//Front door
router.post('/contact-type-answer', function (req, res) {

  let contactType = req.session.data.contactType

  if (contactType === 'Make a complaint') {
      res.redirect('/complaints')
  } else if (contactType === 'Make an enquiry') {
    res.redirect('/make-an-enquiry')
  } else if (contactType === 'Make a Freedom of Information request') {
    res.redirect('/foi')
  } else if (contactType === 'View an existing query or complaint') {
    res.redirect('/manage/login')
  } else {
    res.redirect('/placeholder')
  }

})

// Manage

// Ask a question

// Is your question about an awarding organisation regulated by Ofqual?
router.post('/is-it-ao-answer', function (req, res) {

  let isItAo = req.session.data.isItAo

  if (isItAo === 'Yes') {
      res.redirect('/make-an-enquiry/search-for-ao')
    } else {
      res.redirect('/make-an-enquiry/is-it-qual')
  }

})

// Is your question about a qualification regulated by Ofqual?
router.post('/is-it-qual-answer', function (req, res) {

  let isItQual = req.session.data.isItQual

  if (isItQual === 'Yes') {
      res.redirect('/make-an-enquiry/search-for-qual')
    } else {
      res.redirect('/make-an-enquiry/is-it-centre-or-school')
  }

})

// Is your question about a specific centre or school?
router.post('/is-it-centre-or-school-answer', function (req, res) {

  let isItCenterOrSchool = req.session.data.isItCenterOrSchool

  if (isItCenterOrSchool === 'Yes') {
      res.redirect('/make-an-enquiry/centre-school-info')
    } else {
      res.redirect('/make-an-enquiry/the-question')
  }

})

// Is your question about a specific centre or school?
router.post('/is-it-documents-answer', function (req, res) {

  let isItDocument = req.session.data.isItDocument

  if (isItDocument === 'Yes') {
      res.redirect('/make-an-enquiry/upload-document')
    } else {
      res.redirect('/make-an-enquiry/is-it-centre-or-school')
  }

})

// FOI

// Is your request about a qualification regulated by Ofqual?
router.post('/foi/is-it-qual-answer', function (req, res) {

  let isItQual = req.session.data.isItQual

  if (isItQual === 'Yes') {
      res.redirect('/foi/choose-qual')
    } else {
      res.redirect('/foi/the-request')
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
