var app = angular.module('myFriendsList');

app.controller('mainController', function($scope) {
	$scope.friends = ["Bethany", "Becky", "Sage"];
});