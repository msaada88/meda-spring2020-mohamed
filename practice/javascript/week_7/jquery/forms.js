$(document).ready(function () {
    
    $("#submit-button").click(function (event) {
        event.preventDefault();

        console.log("Clicked!");

        var username = $("#username").val();
        //console.log("Username: " + username);

        var password = $("#password").val();
        //console.log("Password: " + password);


        if (username == "admin") {

            $("#messages").html("<p>Welcome Administrator</p>");
            //console.log("Welcome Administrator");
            
            if (password == "123456") {

                $("#messages").html("<p>Administrator successfully logged in!</p>");
                //console.log("Administrator successfully logged in!");
            } else {

                $("#messages").html("<p>Login failed! Wrong password!</p>");
                //console.log("Login failed! Wrong password!");
            }

        } else {

            $("#messages").html("<p>Welcome " + username + "!</p>");
            //console.log("Welcome " + username + "!");

        }


    });

});