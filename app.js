var translateButton = document.querySelector("#btn-translate");
var textAreaInput = document.querySelector("textarea");
var translatedOuput = document.querySelector(".translate-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function WriteToURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("Oops: " + error);
    console.log("Looks like something went wrong!");
}

function clickEventHandler(event) {
    var inputText = textAreaInput.value;
    fetch(WriteToURL(inputText))
        .then(response => response.json())
        .then(jsonResult => {
            translatedOuput.innerText = jsonResult.contents.translated;
        })
        .catch(errorHandler);
}

translateButton.addEventListener("click", clickEventHandler);
