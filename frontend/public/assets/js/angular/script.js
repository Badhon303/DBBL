/// <reference path="angular.js" />
/// <reference path="angular-route.js" />

var app = angular
    .module("Demo", [])
    .controller("studentUndergradListListController", function($scope, $http) {
        var successCallBack = function(response) {
            $scope.studensUList = response.data;
            //console.log(response.data);
        }
        var errorCallBack = function(reason) {
            $scope.error = reason.data;
        }
        $scope.edit = function(studenU) {
            $scope.studenU = studenU;
        };
        $http({
            method: 'get',
            url: 'http://115.127.24.181:59311/api/StudentListUnderGrads'
        }).then(successCallBack, errorCallBack);
    })