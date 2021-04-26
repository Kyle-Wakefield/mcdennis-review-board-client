'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const store = require('./store.js')
const getFormFields = require('./../../lib/get-form-fields.js')

const onSignUp = function (event) {
  // Prevent the page from refreshing when the form is submitted
  event.preventDefault()
  console.log('onSignUp')

  // Obtain the information entered by the user
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  // Prevent the page from refreshing when the form is submitted
  event.preventDefault()
  console.log('onSignIn')

  // Obtain the information entered by the user
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signIn(formData)
    .then(response => {
      ui.onSignInSuccess(response)
      onIndex()
    })
    .catch(ui.onError)
}

const onChangePassword = function (event) {
  // Prevent the page from refreshing when the form is submitted
  event.preventDefault()
  console.log('onChangePassword')

  // Obtain the information entered by the user
  const formData = getFormFields(event.target)
  console.log(formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  // Prevent the page from refreshing when the button is clicked
  event.preventDefault()
  console.log('onSignOut')

  api.signOut()
    .then(response => {
      ui.onSignOutSuccess(response)
      onIndex()
    })
    .catch(ui.onError)
}

const onCreateReview = function (event) {
  // Prevent the page from refreshing when the button is clicked
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)

  api.createReview(formData)
    .then(ui.onCreateReviewSuccess)
    .catch(ui.onError)
}

const onIndex = function () {
  console.log('onIndex')
  api.index()
    .then((response) => {
      ui.onIndexSuccess(response)
      $('.delete-review-button').on('click', onDeleteReview)
    })
    .catch(ui.onError)
}

const onIndexAll = function () {
  console.log('onIndexAll')
  store.indexPath = '/reviews'
  onIndex()
}

// const onIndexSelf = function () {
//   console.log('onIndexSelf')
//   store.indexPath = '/reviews/users/' + store.user._id
//   onIndex()
// }

const onIndexItem = function (event) {
  console.log('onIndexItem')
  const item = event.target.dataset.item
  store.indexPath = '/reviews/items/' + item
  onIndex()
}

const onDeleteReview = function (event) {
  console.log(event.target)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateReview,
  onIndexAll,
  // onIndexSelf,
  onIndexItem
}
