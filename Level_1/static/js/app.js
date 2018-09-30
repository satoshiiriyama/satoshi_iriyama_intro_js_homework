// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});


var filterButton = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

filterButton.on("click", function() {
    d3.event.preventDefault();

    tbody.html("")

    var inputDate = inputField.property("value");
    console.log(inputDate);

    tableData.forEach(function(ufoData) {
        if (ufoData.datetime === inputDate) {
            console.log(ufoData);
            var row = tbody.append("tr");
            Object.entries(ufoData).forEach(function([key, value]) {
                console.log(key, value);
                var cell = tbody.append("td");
                cell.text(value);
            });
        }
    })
});
  
