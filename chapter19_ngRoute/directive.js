angular.module("CustomDirective")
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