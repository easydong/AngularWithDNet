studentsManagement.controller("stCreateController", [
    "$scope", "stDataService", "$rootScope","$location", function($scope, stDataService, $rootScope,$location) {
        $rootScope.title = "Create student";
        $scope.saveStudent = function(student) {
            stDataService.create(student).$promise.then(function () {
                $location.url("/");
                $("#stsNav").toggleClass("active");
                $("#stCreate").removeClass("active");
                alertify.log(student.Name + " added successfully.");
            });
        };
    }
]);