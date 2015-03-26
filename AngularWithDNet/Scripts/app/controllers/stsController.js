studentsManagement.controller("stsController", [
    "$scope", "$route","$rootScope", function ($scope, $route,$rootScope) {
        $rootScope.title = "Students";
        $scope.students = $route.current.locals.students;
    }
]);