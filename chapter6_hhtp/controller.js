// nombre de modulo y dependencias
angular.module("myfirstapp",[])
.controller("firstcontroller",function($scope,$http){
    $scope.posts = [];
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .success(function(data){
        console.log(data);
        $scope.posts = data;
    })
    .error(function(err){

    });
});

//MVVM