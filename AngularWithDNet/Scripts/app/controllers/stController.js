studentsManagement.controller("stController", [
    "$scope", "$route","$rootScope","stDataService","$location", function ($scope, $route,$rootScope,stDataService,$location) {
        $scope.student = $route.current.locals.student;
        $rootScope.title = "Student Info -" + $scope.student.Name;
        $scope.updateInfo = function(student) {
            stDataService.update({ id: student.Id }, student).$promise.then(function() {
                $location.url("/");
                alertify.log("Updated Info");
            });
        };
    }
]);