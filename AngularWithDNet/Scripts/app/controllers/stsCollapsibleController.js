studentsManagement.controller("stsCollapsibleController", [
    "$scope", "$route", function($scope, $route) {
        $scope.students = $route.current.locals.students;
        $scope.gridOptions = {
            data: $scope.students,
            columns: [{ headerText: "Name", rowText: "Name" }, { headerText: "Age", rowText: "Age" }],
            options: { hasMultiselect: true }
        };
    }
]);