// nombre de modulo y dependencias
var app = angular.module("myfirstapp",[]);

app.controller("firstcontroller",["$scope",function(m){
    // variables
    m.nombre = "Chris";
    m.nuevoComentario = {};
    // array
    m.comentarios = [
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
    m.addComentario = function(){
        m.comentarios.push(m.nuevoComentario);
        m.nuevoComentario = {};
    }
}]);

//MVVM