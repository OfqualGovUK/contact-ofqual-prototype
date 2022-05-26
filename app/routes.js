const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Ask a question

// What is you enquiry about?
router.post('/enquiry-type-answer', function (req, res) {

  let enquiryType = req.session.data.enquiryType

  if ((enquiryType === 'Recognition of a qualification') || (enquiryType === 'How Ofqual operates') || (enquiryType === 'My enquiry is about something else')) {
      res.redirect('/make-an-enquiry/the-question')
    } else {
      res.redirect('/make-an-enquiry/qual-type')
  }

})

//Is your enquiry about a specific subject?about an awarding organisation regulated by Ofqual?
router.post('/is-it-subject-answer', function (req, res) {

  let isItSubject = req.session.data.isItSubject

  if (isItSubject === 'Yes') {
      res.redirect('/make-an-enquiry/search-for-subject')
    } else {
      res.redirect('/make-an-enquiry/is-it-ao')
  }

})

// Is your question about an awarding organisation regulated by Ofqual?
router.post('/is-it-ao-answer', function (req, res) {

  let isItAo = req.session.data.isItAo

  if (isItAo === 'Yes') {
      res.redirect('/make-an-enquiry/search-for-ao')
    } else {
      res.redirect('/make-an-enquiry/the-question')
  }

})

// Is your question about a qualification regulated by Ofqual?
router.post('/qual-type-answer', function (req, res) {

  let qualType = req.session.data.qualType

  if ((qualType === 'A/AS level') || (qualType === 'GCSE') ) {
      res.redirect('/make-an-enquiry/is-it-subject')
    } else {
      res.redirect('/make-an-enquiry/is-it-ao')
  }

})

// Do you have any supporting documentation you want to include?
// router.post('/the-question-answer', function (req, res) {

//   let questionAnswer = req.session.data.questionAnswer

//   if (questionAnswer === 'Yes') {
//       res.redirect('/make-an-enquiry/upload-document')
//     } else {
//       res.redirect('/make-an-enquiry/check-answers')
//   }

// })

// Do you have any supporting documentation you want to include?
router.post('/is-it-documents-answer', function (req, res) {

  let isItDocument = req.session.data.isItDocument

  if (isItDocument === 'Yes') {
      res.redirect('/make-an-enquiry/upload-document')
    } else {
      res.redirect('/make-an-enquiry/check-answers')
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
