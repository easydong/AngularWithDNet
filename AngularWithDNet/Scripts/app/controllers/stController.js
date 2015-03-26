studentsManagement.controller("stController", [
    "$scope","$route", function($scope,$route) {
        $scope.student = $route.current.locals.student;
    }
]);