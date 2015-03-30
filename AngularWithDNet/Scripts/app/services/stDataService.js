studentsManagement.factory("stDataService", [
    "$resource",
    function($resource) {
        return $resource("api/StudentsApi", {}, {
            query: { method: "GET", isArray: true },
            create: { method: "POST" },
            get: { method: "GET", url: "/api/StudentsApi?id=:id" },
            remove: { method: "DELETE", url: "/api/StudentsApi?id=:id" },
            update: { method: "PUT", url: "/api/StudentsApi?id=:id" }
        });
    }
]);