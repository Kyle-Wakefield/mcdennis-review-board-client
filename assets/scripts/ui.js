'use strict'

const store = require('./store')

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
  store.user = response.user
  console.log(store.user)
  $('.signed-in-feature').show()
  $('.signed-out-feature').hide()
}

const onChangePasswordSuccess = function (response) {
  onSuccess('Change Password Success', response)
}

const onSignOutSuccess = function (response) {
  onSuccess('Sign Out Success', response)
  $('.signed-out-feature').show()
  $('.signed-in-feature').hide()
  store.user = null
}

const onCreateReviewSuccess = function (response) {
  onSuccess('Create Review Success', response)
}

const onIndexSuccess = function (response) {
  onSuccess('Index Success', response)

  // reverse the order of the reviews so they'll show up newest to oldest
  response.reviews.reverse()
  let reviewHtml = ''
  response.reviews.forEach((review) => {
    // add the content of the review
    reviewHtml += `
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
    `
    // if the user is logged in and owns the review, add edit and delete buttons
    if ((store.user !== null) && (store.user._id === review.owner)) {
      reviewHtml += `
        <div class="review-footer">
          <button class="btn btn-dark edit-review-button">Edit Review</button>
          <button class="btn btn-dark delete-review-button">Delete Review</button>
        </div>
      `
    }
    reviewHtml += '</div>'
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
