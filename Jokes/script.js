const fetchDataBtn = document.querySelector("#fetchdata");
const result = document.querySelector("#result");



//convert special characters to html with no &quot
/*let specialChars = ['\u0022','\u0027', '\u003C', '\u003E'];

let showChar = function() {
    for (let i = 0; i<specialChars.length; i++) {
        document.write(specialChars[i] + "<br>");
    }
}*/



// gets data from API and sets the content of #result div
async function getData() {
  result.innerText = "Loading....";
  try {
    const res = await fetch("http://api.icndb.com/jokes/random");
    const jsonResult = await res.json();
    result.innerText = jsonResult.value.joke;
    /*result.replace(/"/g, "&quot;");*/
  } catch (error) {
    console.log(error);
  }
}

// add event listener for #fetchdata button
fetchDataBtn.addEventListener("click", getData);










