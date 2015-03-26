"use strict";

var studentsManagement = angular.module("studentsManagement", ["ngResource", "ngCookies", "ngRoute"])
    .config([
        "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $routeProvider.when("/Students", {
                templateUrl: "/templates/Students.html",
                controller: "stsController",
                resolve: {
                    students: function($q, stDataService) {
                        var deferred = $q.defer();
                        stDataService.students().then(function(student) {
                            deferred.resolve(student);
                        });

                        return deferred.promise;
                    }
                }
            }).when("/Student/:studentName", {
                templateUrl: "/templates/StudentInfo.html",
                controller: "stController",
                resolve: {
                    student: function ($q, stDataService,$route) {
                        var deferred = $q.defer();
                        var stName = $route.current.params.studentName;
                        stDataService.getStudent(stName).then(function(data) {
                            deferred.resolve(data);
                        });

                        return deferred.promise;
                    }
                }
            });
        }
    ]);
