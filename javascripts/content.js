var app = angular.module('ngHomepageApp', []);
app.controller("ProjectController", function($scope){
	$scope.projects = projectData;
	$scope.projects.forEach(function(project){console.log(project)});
});