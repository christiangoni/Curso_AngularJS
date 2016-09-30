// nombre de modulo y dependencias
angular.module("myfirstapp",[])
.controller("firstcontroller",function($scope,$http){
    $scope.posts = [];
    $scope.loading = true;
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .success(function(data){
        console.log(data);
        $scope.posts = data;
        $scope.loading = false;
    })
    .error(function(err){
        $scope.loading = false;
    });
});

//MVVM