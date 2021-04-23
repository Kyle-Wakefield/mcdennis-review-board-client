'use strict'

const store = require('./store.js')

const onError = function (err) {
  console.log(err)
}

const onSuccess = function (action, response) {
  console.log(action)
  console.log(response)
  $('.modal').modal('hide')
  $('form').trigger('reset')
}

const onSignUpSuccess = function (response) {
  onSuccess('Sign Up Success', response)
}

const onSignInSuccess = function (response) {
  onSuccess('Sign In Success', response)
  store.token = response.user.token
  console.log(store.token)
}

const onChangePasswordSuccess = function (response) {
  onSuccess('Change Password Success', response)
}

const onSignOutSuccess = function (response) {
  onSuccess('Sign Out Success', response)
}

const onCreateReviewSuccess = function (response) {
  onSuccess('Create Review Success', response)
}

const onIndexSuccess = function (response) {
  onSuccess('Index Success', response)
  let reviewHtml = ''
  response.reviews.forEach((review) => {
    reviewHtml += `
    <div id="review-list-div" class="review-list">
      <div class="single-review-div black-border">
        <div class="review-header">
          <span class="title-span">${review.title}</span>
          <span>Review of: ${review.item}</span>
          <span>Written By: ${review.owner}</span>
        </div>
        <hr class="divider">
        <div class="review-body">
          ${review.body}
        </div>
      </div>
    </div>
    `
  })
  $('#review-list-div').html(reviewHtml)
}

module.exports = {
  onError,
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onCreateReviewSuccess,
  onIndexSuccess
}
