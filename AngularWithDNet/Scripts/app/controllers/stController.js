studentsManagement.controller("stController", [
    "$scope", "$route","$rootScope", function ($scope, $route,$rootScope) {
        
        $scope.student = $route.current.locals.student;
        $rootScope.title = "Student Info -" + $scope.student.Name;
    }
]);