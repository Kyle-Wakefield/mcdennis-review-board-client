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
      Authorization: 'Bearer ' + store.user.token
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
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createReview = function (formData) {
  console.log('createReview')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const index = function () {
  console.log('index ' + store.indexPath)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + store.indexPath
  })
}

const deleteReview = function (id) {
  console.log('deleteReview')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/reviews/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const editReview = function (id, formData) {
  console.log('editReview')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/reviews/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createReview,
  index,
  deleteReview,
  editReview
}
