// nombre de modulo y dependencias
var app = angular.module("myfirstapp",[]);

app.controller("firstcontroller",function($scope){
    // variables
    $scope.nombre = "Chris";
    $scope.nuevoComentario = {};
    // array
    $scope.comentarios = [
        {
            comentario : "good",
            usuario : "david"
        },
        {
            comentario : "bad",
            usuario : "aitor"
        }
    ];
    // funcion
    $scope.addComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
})

//MVVM