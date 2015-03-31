studentsManagement.directive("greeting", function () {
    return {
        restrict: "A",
        template: "<button ng-click='sayHello()' hindi spanish>Say Hello</button>",
        replace: true,
        controller: function ($scope) {
            $scope.greetings = ["hello"];
            $scope.sayHello = function () {
                alert($scope.greetings.join());
            };
        }
    }
}).directive("hindi", function () {
    return {
        restrict: "A",
        priority: 2,
        require: "^greeting",
        link: function (scope, element, attr) {
            scope.greetings.push("नमस्कार");
        }
    }
}).directive("spanish", function () {
    return {
        restrict: "A",
        priority: 1,
        require: "^greeting",
        link: function (scope, element, attr) {
            scope.greetings.push("hola");
        }
    }
});