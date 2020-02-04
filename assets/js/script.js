
console.log("jsconected")
var animalarray = ["frog", "cow", "chicken", "pig", "dog", "horse"];
var animalclassarray = [];
function makeallthebuttons (){
    $("#animalbuttondiv").empty();
for (var i = 0; i < animalarray.length; i++){
    console.log(animalarray[i]);
    var animalButton = $("<button>").text(animalarray[i]);
   $(animalButton).addClass("animalbut"+[i]);
    $("#animalbuttondiv").append(animalButton);
    animalclassarray.push(".animalbut"+i);
};
};

makeallthebuttons();

$("#submitbutton").on("click", function(){
    
    event.preventDefault();
    var newbuttonname = $("#textinfo").val().trim();
    animalarray.push(newbuttonname);
    $("#textinfo").val("");
    makeallthebuttons();
});

$("#animalbuttondiv").on("click", function(){
var target = event.target;
var buttonValue = target.innerHTML;
console.log(buttonValue);
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
buttonValue + "&api_key=2j8s4o2iK9wJORDeL51OwDqL4po4QZ15&limit=3";
$("#gifyimages").empty();
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var results = response.data;
     
    for (var i = 0; i < results.length; i++){
       var picture = $("<img>");
       picture.addClass("freefall"+i);
       picture.attr("src", results[i].images.fixed_height_still.url);
       $("#gifyimages").append(picture);
    }
    var timesclicked = 0
    $("#gifyimages").on("click", function(){
       timesclicked++;
       if (timesclicked>1){
        var target3 = event.target;
        console.log(target3);
        var classnamevar = "."+target3.className;
        console.log(classnamevar);
        var classnumbergrab = classnamevar.substring(classnamevar.length - 1, classnamevar.length);
        console.log(classnumbergrab);
        $(classnamevar).attr("src", results[classnumbergrab].images.fixed_height_still.url);
        timesclicked--;
        timesclicked--;
       }
       else{
           var target2 = event.target;
           console.log(target2);
           var classnamevar = "."+target2.className;
           console.log(classnamevar);
           var classnumbergrab = classnamevar.substring(classnamevar.length - 1, classnamevar.length);
           console.log(classnumbergrab);
           $(classnamevar).attr("src", results[classnumbergrab].images.fixed_height.url);

       }

    
    


      
    
    });


  });



});
    // // Storing our giphy API URL for a random cat image
    // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

    // // Perfoming an AJAX GET request to our queryURL
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // })

    //   // After the data from the AJAX request comes back
    //   .then(function(response) {

    //     // Saving the image_original_url property
    //     var imageUrl = response.data.image_original_url;

    //     // Creating and storing an image tag
    //     var catImage = $("<img>");

    //     // Setting the catImage src attribute to imageUrl
    //     catImage.attr("src", imageUrl);
    //     catImage.attr("alt", "cat image");

    //     // Prepending the catImage to the images div
    //     $("#images").prepend(catImage);
    //   });
