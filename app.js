var translateButton = document.querySelector("#btn-translate");
var textAreaInput = document.querySelector("textarea");
var translatedOutput = document.querySelector(".translate-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function WriteToURL(input) {
    var link = serverURL + "?" + "text=" + input
    var encoded = encodeURI(link); //convert URL to encoded URI(Uniform resource identifier by name and then finds it's location)
    return encoded
}

function errorHandler(error) {
    console.log("Oops: " + error);
    console.log("Looks like something went wrong!");
    alert("something went wrong");
}

function clickEventHandler(event) {
    var inputText = textAreaInput.value;
    fetch(WriteToURL(inputText))
        .then(response => response.json())
        .then(jsonResult => {
            translatedOutput.innerText = jsonResult.contents.translated;
        })
        .catch(errorHandler);
}

translateButton.addEventListener("click", clickEventHandler);
