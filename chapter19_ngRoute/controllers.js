angular.module("CustomDirective")
.controller("ReposController",function($scope,$http){
    $scope.repos = [];
    $http.get("https://api.github.com/users/christiangoni/repos")
    .success(function(data){
        $scope.posts = data;
    })
    .error(function(err){
        console.log(err);
    })
})
.controller("RepoController",function($scope,$http,$routeParams){
    $scope.repo = {};
     //$http.get("https://api.twitter.com/users/twitter/"+$routeParams.name)
     $http.get("https://api.github.com/users/christiangoni/repos")
    .success(function(data){
        $scope.posts = data;
    })
    .error(function(err){
        console.log(err);
    })
});