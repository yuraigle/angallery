"use strict"

# Controllers 
angular.module("myApp.controllers", [])

.controller "MainCtrl", [
  "$scope"
  "$location"
  ($scope, $location) ->
    $scope.isActive = (link) ->
      $location.path() is link
    $scope.noback = () ->
      $location.path() is "/home"
]

.controller "ListCtrl", [
  "$scope"
  "Picture"
  ($scope, Picture) ->
    $scope.pictures = Picture.query()
]

.controller "DetailsCtrl", [
  "$scope"
  "$routeParams"
  "Picture"
  ($scope, $routeParams, Picture) ->
    $scope.picture = Picture.get({id: $routeParams.id})
    $scope.isLoading = () ->
      typeof $scope.picture.src is "undefined"
]

.controller "AddCtrl", [
  "$scope"
  "Picture"
  ($scope, Picture) ->
    
]