"use strict"

# Services 

angular.module("myApp.services", ["ngResource"])

.factory "ArticleFactory", [
  "$resource"
  ($resource) ->
    return $resource("http://local.dev/article/:id", {id: '@id'},
      query:
        method: "GET"
        isArray: false
      get:
        method: "GET"
        isArray: false
    )
]