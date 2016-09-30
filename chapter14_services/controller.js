// nombre de modulo y dependencias
angular.module("ToDoList",["LocalStorageModule"])
.factory("ToDoService",function(localStorageService){
    var ToDoService = {};
    // iniciar clave del servicio
    ToDoService.key = "todolist";
    //cargar datos si existen en localstorage
    if (localStorageService.get(ToDoService.key)){
        ToDoService.activities = localStorageService.get(ToDoService.key);
    }else{
        ToDoService.activities = [];
    }
    // funcion add activity
    ToDoService.add = function(newActiv){
        // meter actividad en array
        ToDoService.activities.push(newActiv);
    };
    // actualizar localstorage con array de activities
    ToDoService.updateLocalStorage = function(){
        localStorageService.set(ToDoService.key,ToDoService.activities);
    };
    // vaciar array activities y actualizar localstorage
    ToDoService.clean = function(){
        ToDoService.activities = [];
        ToDoService.updateLocalStorage();
        return ToDoService.getAll();
    };
    // devolver array activities
    ToDoService.getAll = function(){
        return ToDoService.activities;
    };
    // borrar una actividad
    ToDoService.removeItem = function(item){
        ToDoService.activities = ToDoService.activities.filter(function(activity){
            // si activity != item ==>return
             return activity !== item;
        });
        ToDoService.updateLocalStorage();
        return ToDoService.getAll();
        /*
            ToDoService.activities = [{},{},{}] 
        */
    }
    // devolver servicio como objeto
    return ToDoService;
})
.controller("ToDoController",function($scope,ToDoService){
    $scope.todo = ToDoService.getAll();
    /*$scope.watchCollection("todo",function(newValue,oldValue){
        localStorageService.set("todolist",$scope.todo);
    })*/
    $scope.newActiv = {}; 
    $scope.addActiv = function(){
        ToDoService.add($scope.newActiv);
        $scope.newActiv = {};  
    }
    $scope.removeActiv = function(item){
        $scope.todo = ToDoService.removeItem(item);
    }
    $scope.clean = function(){
        $scope.todo = ToDoService.clean();
    }

});