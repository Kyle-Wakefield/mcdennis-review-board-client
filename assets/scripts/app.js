'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.onPageLoad()
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-button').on('click', events.onSignOut)
  $('#create-review-form').on('submit', events.onCreateReview)
})
