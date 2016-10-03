angular.module("FinalApp",["lumx","ngRoute","ngResource"])
.config(function($routeProvider){
    $routeProvider
        .when("/",{
            controller: "MainController",
            templateUrl: "templates/home.html"
        })
        .when("/post/:id",{
            controller: "PostController",
            templateUrl:"templates/post.html"
        })
        .when("/posts/new",{
            controller: "NewPostController",
            templateUrl: "templates/newPost.html"
        })
        .when("post/edit/:id",{
            controller: "PostController",
            templateUrl: "templates/newPost.hmtl"
        })
});