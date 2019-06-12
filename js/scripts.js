$(document).ready(function() {
    $("#factorial-form").submit(function(event) {
        event.preventDefault();
        var userNumber = parseInt($("input#userNumber").val());
        var userNumberFactored = 1;


        // Online information on how to do this problem without a for loop.
        // function factorialize(num) {
        //     if (num === 0 || num === 1)
        //       return 1;
        //     for (var i = num - 1; i >= 1; i--) {
        //       num *= i;
        //     }
        //     return num;
        //   };
        
        //   factorialize(userNumber);
        //   var result = factorialize(userNumber);

        for (let str = userNumber; str > 1; str--) {
            userNumberFactored *= str;
        };

        $("#resultant").append("<h1>" + "Here is the result of your factorial!" + " </h1>" + "<br>" + "<h4>" + "The result is " + userNumberFactored + "</h4>");
    });
});

