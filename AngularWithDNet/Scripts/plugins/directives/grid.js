datagrid.directive("grid", function() {
    return {
        template:"<table class='table'>" +
            "       <thead>" +
            "           <tr>" +
            "               <th>Welcome</th>" +
            "           </tr>" +
            "       </thead>" +
            "       <tbody>" +
            "           <tr>" +
            "               <td>Hello this is sample grid</td>" +
            "           </tr>" +
            "       </tbody>" +
            "     </table>",
        restrict: "E",
        replace:true
    }
});