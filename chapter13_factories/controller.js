// nombre de modulo y dependencias
angular.module("ToDoList",["LocalStorageModule"])
.service("ToDoService",function(localStorageService){
    // iniciar clave del servicio
    this.key = "todolist";
    //cargar datos si existen en localstorage
    if (localStorageService.get(this.key)){
        this.activities = localStorageService.get(this.key);
    }else{
        this.activities = [];
    }
    // funcion add activity
    this.add = function(newActiv){
        // meter actividad en array
        this.activities.push(newActiv);
    };
    // actualizar localstorage con array de activities
    this.updateLocalStorage = function(){
        localStorageService.set(this.key,this.activities);
    };
    // vaciar array activities y actualizar localstorage
    this.clean = function(){
        this.activities = [];
        this.updateLocalStorage();
        return this.getAll();
    };
    // devolver array activities
    this.getAll = function(){
        return this.activities;
    };
    // borrar una actividad
    this.removeItem = function(item){
        this.activities = this.activities.filter(function(activity){
            // si activity != item ==>return
             return activity !== item;
        });
        this.updateLocalStorage();
        return this.getAll();
        /*
            ToDoService.activities = [{},{},{}] 
        */
    }
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