"use strict";

var studentsManagement = angular.module("studentsManagement", ["ngResource", "ngCookies", "ngRoute"])
    .config([
        "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $routeProvider.when("/Students", {
                templateUrl: "/templates/StudentInfo.html",
                controller: "stController",
                resolve: {
                    students: function($q, stDataService) {
                        var deferred = $q.defer();
                        stDataService.students().then(function(student) {
                            deferred.resolve(student);
                        });

                        return deferred.promise;
                    }
                }
            });
        }
    ]);
