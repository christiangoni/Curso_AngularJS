angular.module("CustomDirective",[])
// backImg en la vista sera back-img
.directive('backImg',function(){
    // scope, elemento html(div),attributos(clases,etc)
    return function(scope,element,attrs){
        attrs.$observe('backImg',function(value){
            element.css({
                'background':"url("+value+")",
                "background-size":"cover",
                "background-position":"center"
            })
        });
    }
})
.controller("AppCtrl",function($scope,$http){
    $http.get("https://api.github.com/users/christiangoni/repos")
    .success(function(data){
        $scope.repos = data;
    })
    .error(function(err){
        console.log(err);
    });
});