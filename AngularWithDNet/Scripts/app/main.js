﻿"use strict";

var studentsManagement = angular.module("studentsManagement", ["ngResource", "ngCookies", "ngRoute"]).run(function($rootScope) {
        $rootScope.title = "Home";
    })
    .config([
        "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $routeProvider.when("/", {
                templateUrl: "/templates/Students.html",
                controller: "stsController",
                resolve: {
                    students: function($q, stDataService) {
                        var deferred = $q.defer();
                        stDataService.query(function(data) {
                            deferred.resolve(data);
                        });

                        return deferred.promise;
                    }
                }
            }).when("/Student/:studentName", {
                templateUrl: "/templates/StudentInfo.html",
                controller: "stController",
                resolve: {
                    student: function($q, stDataService, $route) {
                        var deferred = $q.defer();
                        var stName = $route.current.params.studentName;
                        stDataService.get({ stName: stName }, function(data) {
                            deferred.resolve(data);
                        });

                        return deferred.promise;
                    }
                }
            }).when("/Create", {
                templateUrl: "/templates/CreateStudent.html",
                controller: "stCreateController"
            });
        }
    ]);
