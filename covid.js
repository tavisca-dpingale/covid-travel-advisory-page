
function airlineCovid() {

    var airlinesList = document.getElementById("airlinesList");
    //airlinesList.selectedIndex
    if (airlinesList.selectedIndex > 0) {
        window.open(airlinesList.value); 
    } else {
        alert("Please select appropriate airline from dropdown menu");
    }
    return false;
}