// nombre de modulo y dependencias
angular.module("myfirstapp",[])
.controller("firstcontroller",function($scope,$http){
    $scope.posts = [];
    $scope.newPost = {};
    // cargar datos desde http....
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .success(function(data){
        console.log(data);
        // cargar datos recibidos en coleccion
        $scope.posts = data;
    })
    .error(function(err){

    });
    // add new post
    $scope.addPost = function(){
        $http.post("https://jsonplaceholder.typicode.com/posts",{
                // recoger datos de new post
                title:  $scope.newPost.title,
                body:   $scope.newPost.body,
                userId: 1
            })
            .success(function(data,status,headers,config){
                // pushea a la coleccion el new post
                $scope.posts.push($scope.newPost);
                console.log($scope.newPost);
                $scope.newPost = {};
            })
            .error(function(data,status,headers,config){
                console.log(error);
            });            
    }
});

//MVVM