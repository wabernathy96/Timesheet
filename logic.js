$(document).ready(function() {

    // Global Var
    var database = firebase.database();

    // Event listener for form
    $("#trainsubmit").on("click", function(){

            var name = $("#train-name").val().trim();
            console.log(name);
            var dest =$("#train-dest").val().trim();
            var time = $("#train-time").val().trim();
            var freq = $("#train-freq").val().trim();
            

                
                var newData={
                    name: name,
                    dest: dest,
                    time: time,
                    freq: freq
                }
            
                database.ref().push(newData);
            
            
               

    });


});