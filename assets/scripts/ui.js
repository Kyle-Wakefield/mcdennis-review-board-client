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

module.exports = {
  onError,
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onCreateReviewSuccess
}
