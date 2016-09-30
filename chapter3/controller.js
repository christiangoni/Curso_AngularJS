angular.module("myfirstapp",[])
.controller("firstcontroller",function($scope){
    $scope.nombre = "Chris";
}).controller("secondcontroller",function($scope){
    $scope.mode = "God";
});

//MVVM