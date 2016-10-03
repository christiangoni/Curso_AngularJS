angular.module("FinalApp")
.controller("MainController",function($scope,$resource,PostResource){ 
    User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id:"@id"});

    // .query() = GET /posts = array de post
    $scope.posts = PostResource.query();
    $scope.users = User.query();
    $scope.removePost = function(post){
        PostResource.delete({id: post.id},function(data){
            console.log(data);
        });
        // update array of post
        $scope.posts = $scope.posts.filter(function(el){
            return el.id !== post.id;
        })
    }
})
.controller("PostController",function($scope,PostResource,$routeParams,$location){
    $scope.title = "Editar Post";
    $scope.post = PostResource.get({id: $routeParams.id});
    $scope.savePost = function(){
        PostResource.update({id: $scope.post.id},{data: $scope.post},function(data){
            console.log(data);
            $location.path("/");
        });
    }
})
.controller("NewPostController",function($scope,$resource,PostResource,$location){
    $scope.post = {};
    $scope.title = "Crear post";
    $scope.savePost = function(){
        PostResource.save({data: $scope.post},function(data){
            console.log(data);
            $location.path("/");
        });
    }
});