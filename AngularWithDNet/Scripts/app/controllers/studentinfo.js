studentsManagement.controller("studentsinfo", [
    "$scope", "stDataService", "$compile","myCache", function ($scope, stDataService, $compile,myCache) {
        $scope.appendGreeting = function () {
            $compile("<input ng-model='username' /><span>Welcome {{username}} ! to angular js practices.</span>")($scope).appendTo(angular.element("#greetingDiv"));
        };

        $scope.addCache = function(key,value) {
            myCache.put(key, value);
        };

        $scope.getCache = function(key) {
            return myCache.get(key);
        };

        $scope.cachestats = function() {
            return myCache.info();
        };

        stDataService.students().then(function (data) {
            $scope.students = data;
            console.log(data);
        });
    }
]);

studentsManagement.controller("localeSample", [
    "$scope", "$locale", function($scope,$locale) {
        $scope.myDate = Date.now();
        console.log($locale);
        $scope.myFormat = $locale.DATETIME_FORMATS.longDate;
    }
]);

studentsManagement.controller("exceptionSample", [
    function() {
        throw{ message: "Hello this is exception sample check." };
    }
]);

studentsManagement.controller("cookieSample", [
    "$scope", "$cookieStore", function ($scope, $cookieStore) {
        var student = { name: "Sudheer", age: 25 };
        $cookieStore.put("student", student);
        $scope.cookie = function () {
            return $cookieStore.get("student");
        };
    }
]);