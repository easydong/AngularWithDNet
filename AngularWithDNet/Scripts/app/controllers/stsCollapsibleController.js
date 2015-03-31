studentsManagement.controller("stsCollapsibleController", [
    "$scope", "$route", function($scope, $route) {
        $scope.students = $route.current.locals.students;
    }
]);