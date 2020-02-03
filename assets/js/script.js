
console.log("jsconected")
var animalarray = ["frog", "cow", "chicken", "pig", "dog", "horse"];
var animalclassarray = [];
for (var i = 0; i < animalarray.length; i++){
    console.log(animalarray[i]);
    var animalButton = $("<button>").text(animalarray[i]);
   $(animalButton).addClass("animalbut"+[i]);
    $("#animalbuttondiv").append(animalButton);
    animalclassarray.push(".animalbut"+i);
    // var t = animalclassarray[i]
    // $(t).on("click", function() {
    //     console.log(animalarray);
    //     });

}
$("#animalbuttondiv").on("click", function(){
var target = event.target;
var buttonValue = target.innerHTML;
console.log(buttonValue);
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
buttonValue + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=3";
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var results = response.data;
     
    for (var i = 0; i < results.length; i++){
       var picture = $("<img>");
       
       picture.attr("src", results[i].images.fixed_height.url);
       $("#gifyimages").append(picture);
    }

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
