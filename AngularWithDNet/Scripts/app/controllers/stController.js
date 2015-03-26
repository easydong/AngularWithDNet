studentsManagement.controller("stController", [
    "$scope", "$routeParams","$route", function($scope, $routeParams,$route) {
        $scope.students = $route.current.locals.students;
        $scope.student = $route.current.locals.student;
    }
]);