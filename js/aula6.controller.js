app.controller('aula06Controller', function($scope){

	$scope.nome = "Curso AngularJS Devmedia";

	$scope.olamundo = function(nome){
		alert("Ola "+nome+"!");
	}
});