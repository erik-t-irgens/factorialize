$(document).ready(function() {
    $("#factorial-form").submit(function(event) {
        event.preventDefault();
        var userNumber = parseInt($("input#userNumber").val());

        // Here, I was going to use one if function to fill an array with each number beneath a given number. 
        // var userNumberFactArray = [];
        // if (userNumber > 0) {

        // }
        // Here, i'd take that array and do a forEach fuction to try and multiply it all by itself. 
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
            
        // }
        // Instead, I went with this which I found online. Let's try to work through the top option and see if it would work. 

        function factorialize(num) {
            if (num === 0 || num === 1)
              return 1;
            for (var i = num - 1; i >= 1; i--) {
              num *= i;
            }
            return num;
          };
        
          factorialize(userNumber);
          var result = factorialize(userNumber);

        $("#resultant").append("<h1>" + "Here is the result of your factorial!" + " </h1>" + "<br>" + "<h4>" + "The result is " + result + "</h4>");
    });
});