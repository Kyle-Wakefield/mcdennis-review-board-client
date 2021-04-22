'use strict'

const store = require('./store.js')

const onError = function (err) {
  console.log(err)
}

const onSuccess = function (action, response) {
  console.log(action)
  console.log(response)
  $('#sign-up-modal').modal('hide')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-modal').modal('hide')
  $('#sign-in-form').trigger('reset')
  $('#change-password-modal').modal('hide')
  $('#change-password-form').trigger('reset')
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

module.exports = {
  onError,
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess
}
