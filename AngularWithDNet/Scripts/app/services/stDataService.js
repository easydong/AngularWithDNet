studentsManagement.factory("stDataService", [
    "$resource",
    function($resource) {
        return $resource("api/StudentsApi", {}, {
            query: { method: "GET", isArray: true },
            update: { method: "PUT" },
            get: { method: "GET", url: "/api/StudentsApi?name=:stName" }
        });
    }
]);