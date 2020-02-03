
console.log("jsconected")
var animalarray = ["frog", "cow", "chicken", "pig", "dog", "horse"];

for (var i = 0; i < animalarray.length; i++){
    console.log(animalarray[i]);
    var animalButton = $("<button>").text(animalarray[i]);
    $("#animalbuttondiv").append(animalButton);
}

