// nombre de modulo y dependencias
angular.module("myfirstapp",[])
.run(function($rootScope){
    $rootScope.nombre = "Root";
})
.controller("firstcontroller",function($scope){
    $scope.nombre = "firstcontroller";
    setTimeout(function(){
        $scope.$apply(function(){
            $scope.nombre = "raquel";
        });
    },2000);
})
.controller("childcontroller",function($scope){
    $scope.nombre = "childcontroller";
});

//MVVM