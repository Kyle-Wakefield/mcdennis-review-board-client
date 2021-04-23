'use strict'

const config = require('./config')
const store = require('./store.js')

const signUp = function (formData) {
  console.log('signUp')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  console.log('signIn')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  console.log('changePassword')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: formData
  })
}

const signOut = function () {
  console.log('signOut')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const createReview = function (formData) {
  console.log('createReview')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createReview
}
