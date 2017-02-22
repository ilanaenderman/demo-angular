'use strict';

/* Controllers */
angular.module('app')
.controller('userCtrl', ["userCtrl", function($scope) {
		$scope.user = {
		    firstName: "Ilana",
            lastName: "Enderman",
            login: true,
            fullName: function() {
		        var userObject = $scope.user;
		        return userObject.firstName + " " + userObject.lastName
            }
        }
}]);