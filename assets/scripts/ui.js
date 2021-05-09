'use strict'

const store = require('./store')

const onError = function () {
  // console.log(err)
}

const onSignUpError = function (err) {
  $('#sign-up-error-div').show()
  setTimeout(() => $('#sign-up-error-div').hide(), 3000)
  onError(err)
}

const onSignInError = function (err) {
  $('#sign-in-error-div').show()
  setTimeout(() => $('#sign-in-error-div').hide(), 3000)
  onError(err)
}

const onChangePasswordError = function (err) {
  $('#change-password-error-div').show()
  setTimeout(() => $('#change-password-error-div').hide(), 3000)
  onError(err)
}

const onCreateReviewError = function (err) {
  $('#create-review-error-div').show()
  setTimeout(() => $('#create-review-error-div').hide(), 3000)
  onError(err)
}

const onEditReviewError = function (err) {
  $('#edit-review-error-div').show()
  setTimeout(() => $('#edit-review-error-div').hide(), 3000)
  onError(err)
}

const onSuccess = function (message, response) {
  // console.log(message)
  // console.log(response)
  $('.modal').modal('hide')
  $('form').trigger('reset')
  $('#success-message-modal').modal('show')
  $('#success-message-div').html(`<h4>${message}</h4>`)
}

const onSignUpSuccess = function (response) {
  onSuccess('Successfully Signed Up', response)
}

const onSignInSuccess = function (response) {
  onSuccess('Successfully Logged In', response)
  store.user = response.user
  // console.log(store.user)
  $('.signed-in-feature').show()
  $('.signed-out-feature').hide()
  $('#signed-in-as-div').html('Logged in as: ' + store.user.email)
}

const onChangePasswordSuccess = function (response) {
  onSuccess('Successfully Changed Password', response)
}

const onSignOutSuccess = function (response) {
  onSuccess('Successfully Signed Out', response)
  $('.signed-out-feature').show()
  $('.signed-in-feature').hide()
  store.user = null
  $('#signed-in-as-div').html('You\'re not logged in. Log in to leave a review.')
}

const onCreateReviewSuccess = function (response) {
  onSuccess('Successfully Created Review', response)
}

const onIndexSuccess = function (response) {
  // Change the name of the review list based on the current index path
  if (store.indexPath === '/reviews') {
    $('#review-list-header').html('All Reviews')
  } else if (store.indexPath.match('/reviews/users')) {
    $('#review-list-header').html(store.indexedUser + '\'s Reviews')
  } else if (store.indexPath.match('/reviews/items')) {
    $('#review-list-header').html(store.indexedItem + ' Reviews')
  }

  // reverse the order of the reviews so they'll show up newest to oldest
  response.reviews.reverse()
  let reviewHtml = ''
  response.reviews.forEach((review) => {
    const itemName = review.item.replace('_', ' ')
    // add the content of the review
    reviewHtml += `
      <div class="single-review-div black-border" data-_id="${review._id}">
        <div class="review-header">
          <span class="title-span">${review.title}</span>
          <span>Review of: ${itemName}</span>
          <span>Written By: ${review.ownerEmail}</span>
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
          <button class="btn btn-dark edit-review-button" data-toggle="modal" data-target="#edit-review-modal">Edit Review</button>
          <button class="btn btn-dark delete-review-button">Delete Review</button>
        </div>
      `
    }
    reviewHtml += '</div>'
  })
  $('#review-list-div').html(reviewHtml)
}

const onDeleteReviewSuccess = function (response) {
  onSuccess('Successfully Deleted Review', response)
}

const onEditReviewSuccess = function (response) {
  onSuccess('Successfully Edited Review', response)
}

module.exports = {
  onError,
  onSignUpError,
  onSignInError,
  onCreateReviewError,
  onEditReviewError,
  onChangePasswordError,
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onCreateReviewSuccess,
  onIndexSuccess,
  onDeleteReviewSuccess,
  onEditReviewSuccess
}
