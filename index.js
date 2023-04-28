const displayinfo = document.querySelector("#display-info");
const btn = document.querySelector("#weather-info");

function displayInfo() {
    if (displayinfo.className == "show-weather heightened") {
        // Hide weather details
        displayinfo.className = "no-heightened";
        displayinfo.textContent = "";
        btn.innerHTML = "Show Weather";
    } else {
        //Show weather details
        displayinfo.className = "show-weather heightened";
        displayinfo.textContent = "Bleh, This is where the weather would show.";
        btn.innerHTML = "Hide Weather";
    }
}
