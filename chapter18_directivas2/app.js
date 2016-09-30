angular.module("CustomDirective",[])
.directive("myAutoComplete",function(){
    function link(scope,element,attrs){
        $(element).autocomplete({
            source:scope[attrs.autocomplete],
            select: function(ev,ui){
                ev.preventDefault();
                if(ui.item){
                    scope.optionSelected(ui.item.value);
                }
            },
            focus: function(ev,ui){
                ev.preventDefault();
                $(this).val(ui.item.lable);
            }
        });
    };
    return{
        link:link
    };
})
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
    $scope.repos = [];
    $http.get("https://api.github.com/users/christiangoni/repos")
    .success(function(data){
        $scope.posts = data;
        for(var i=data.length -1; i>=0; i--){
            var repo = data[i];
            $scope.repos.push(repo.name);
        };
    })
    .error(function(err){
        console.log(err);
    })
    .$scope.optionSelected = function(data){
        $scope.$apply(function(){
            $scope.main_repo = data;
        })
    }
});