studentsManagement.controller("stsController", [
    "$scope", "$route", function($scope, $route) {
        $scope.students = $route.current.locals.students;
    }
]);