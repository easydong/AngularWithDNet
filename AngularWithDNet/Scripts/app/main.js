"use strict";

var studentsManagement = angular.module("studentsManagement", ["ngResource", "ngCookies", "ngRoute"])
    .config([
        "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        $routeProvider.when("/Student/:studentId", {
            templateUrl: "/templates/StudentInfo.html",
            controller: "stController"
        });
    }
    ]);
