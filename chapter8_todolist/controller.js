// nombre de modulo y dependencias
angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
    if (localStorageService.get("todolist")){
        // cargar datos de localstorage
        $scope.todo = localStorageService.get("todolist");
    }else{
        $scope.todo = [];
    }
    /*
        descrip: "terminar X
        fecha:  '3-03-15
    */
    /*
    watch 1 funcion que devuelvo lo que se observa
    watch 2 funcion cuando se modifica ese valor
    $scope.$watch(function(){
        return $scope.newActiv;
    },function(newValue,oldValue){
        Console.log(newValue);
        Console.log(oldValue);
    })*/

    // 1 coleccion a vigilar
    // 2 que hacer cuando se modifica
    $scope.watchCollection("todo",function(newValue,oldValue){
        localStorageService.set("todolist",$scope.todo);
    })
    $scope.addActiv = function(){
        $scope.todo.push($scope.newActiv);
        $scope.newActiv = {};
        // gracias a watchCollection
        //localStorageService.set("todolist",$scope.todo);  
    }
    $scope.clean = function(){
        $scope.todo = [];
        // gracias a watchCollection
        //localStorageService.set("todolist",$scope.todo);
    }
});