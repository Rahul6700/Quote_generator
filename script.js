let quotes = [];
let index = 0;
document.getElementById("q").addEventListener("click",()=>{
    console.log("clicked");
})

fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        quotes = data;
    });

    document.getElementById("q").addEventListener("click", change);

function change() {
    if (quotes.length > 0) {
        if (index < quotes.length) {
            document.getElementById("q").innerHTML = quotes[index].text;
            index++;
        } else {
            document.getElementById("q").innerHTML = "That's enough motivation for now..";
        }
    } else {
        document.getElementById("q").innerHTML = "If you are seeing this, there is an error in the API fetching data, Sorry for the inconvinience";
    }
}
