"use strict"
myApp = angular.module("myApp", [
  "ngRoute"
  "ngResource"
  "myApp.filters"
  "myApp.services"
  "myApp.directives"
  "myApp.controllers"
], ($routeProvider, $locationProvider) ->
  $routeProvider
  .when("/home",
    templateUrl: "partials/home.html"
    controller: "ListCtrl"
  )
  .when("/add",
    templateUrl: "partials/add.html"
    controller: "AddCtrl"
  )
  .when("/details/:id",
    templateUrl: "partials/details.html"
    controller: "DetailsCtrl"
  )
  .otherwise redirectTo: "/home"

  $locationProvider.html5Mode false

  return
)