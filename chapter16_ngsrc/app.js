angular.module("CustomDirective",[])
.controller("AppCtrl",function($scope,$http){
    $http.get("https://api.github.com/users/christiangoni/repos")
    .success(function(data){
        $scope.repos = data;
    })
    .error(function(err){
        console.log(err);
    });
});