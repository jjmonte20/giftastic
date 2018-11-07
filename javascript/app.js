// Need variable for api key
var superheroes = ["Black Panther", "Captain America", "Doctor Strange"];

var apiKey = "v5aVceo4WjHoGLoPp1V4edftSHyhJnhI";
var gurl = "http://api.giphy.com/v1/gifs/search?q="
// query url and search term
function renderButtons() {

    // Need to make sure there are no repeat buttons
    $(".extendedUniverse").empty();

    // For loop to array through the superheroes
    for (var i = 0; i < superheroes.length; i++) {

        // Generate buttons for each hero in the array
        var a = $("<button>");
        // add a class
        a.addClass("superhero");
        // add an attribute with a value from the loop
        a.attr("data-name", superheroes[i]);
        // need to populate the buttons with text
        a.text(superheroes[i]);
        // add the button to the html
        $(".extendedUniverse").append(a);
    }
}
$(".extendedUniverse").on("click", '.superhero', function(){
    var name = $(this).attr("data-name");
    name = name.replace(/\s/g,"+")
    console.log(name);
        var queryURL = gurl + ($(this).attr("data-name")) + "&apikey=" + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            $(".gifRating").html(response.data[0].rating);
            console.log(response);
        })
})

$("#findHero").on("click", function(event){
    // can't have superhero clones
    event.preventDefault();

    // defining what a hero is
    var hero = $("#superheroInput").val().trim();
    // adding to the superhero directory
    superheroes.push(hero);

    // call the renderbutton function to display the list of heros
    renderButtons();
});

    // need to populate the initial list of heroes
    renderButtons();
