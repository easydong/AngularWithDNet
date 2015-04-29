"use strict";

var studentsManagement = angular.module("studentsManagement", ["ngResource", "ngCookies", "ngRoute", "datagrid"]).run(function ($rootScope) {
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
            }).when("/Student/:id", {
                templateUrl: "/templates/StudentInfo.html",
                controller: "stController",
                resolve: {
                    student: function($q, stDataService, $route) {
                        var deferred = $q.defer();
                        var id = $route.current.params.id;
                        stDataService.get({ id: id }, function(data) {
                            deferred.resolve(data);
                        });

                        return deferred.promise;
                    }
                }
            }).when("/Create", {
                templateUrl: "/templates/CreateStudent.html",
                controller: "stCreateController"
            }).when("/StudentWInfoCard", {
                templateUrl: "/templates/StudentsInfoCard.html",
                controller: "stsInfoCardController",
                resolve: {
                    students: function($q, stDataService) {
                        var deferred = $q.defer();
                        stDataService.query(function(data) {
                            deferred.resolve(data);
                        });

                        return deferred.promise;
                    }
                }
            }).when("/StudentCollapsible", {
                templateUrl: "/templates/StudentCollapsible.html",
                controller: "stsCollapsibleController",
                resolve: {
                    students: function($q, stDataService) {
                        var deferred = $q.defer();
                        stDataService.query(function(data) {
                            deferred.resolve(data);
                        });

                        return deferred.promise;
                    }
                }
            });
        }
    ]);

//Toggle bootstrap active navbar tab.

$(".navbar-nav > li > a").on("click", function () {
    var self = $(this);
    $(".navbar-nav > li > a").each(function () {
        if ($(this)[0] === $(self)[0]) {
            $(this).parent().addClass("active");
        } else {
            $(this).parent().removeClass("active");
        }
    });
});
