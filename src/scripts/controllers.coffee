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
  "ArticleFactory"
  ($scope, ArticleFactory) ->
    ArticleFactory.query (response) ->
      $scope.articles = response.data
      return
]

.controller "DetailsCtrl", [
  "$scope"
  "$routeParams"
  "ArticleFactory"
  ($scope, $routeParams, ArticleFactory) ->
    $scope.isLoading = () ->
      typeof $scope.article is "undefined"
    ArticleFactory.get(
      id: $routeParams.id,
      (response) ->
        $scope.article = response.data
        return
    ) 
]

.controller "AddCtrl", [
  "$scope"
  "ArticleFactory"
  ($scope, ArticleFactory) ->
    
]