studentsManagement.factory("stDataService", [
    "$http","$q","$resource",
    function ($http, $q, $resource) {
        return {
            students: function () {
                var deferred = $q.defer();
                $resource("/api/StudentsApi").query(function(data) {
                    deferred.resolve(data);
                },function(error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            },
            getStudent:function(studentName) {
                var deferred = $q.defer();
                $resource("/api/StudentsApi?name=:studentName").get({ studentName: studentName }, function(data) {
                    deferred.resolve(data);
                }, function(error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            }
        }
    }
]);