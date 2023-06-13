// Get reference to the table body
var tableBody = document.getElementById("tableBody");

// Add event listener to the table body
tableBody.addEventListener("click", function(event) {
    var target = event.target;
    
    // Check if the clicked element is an "Edit" button
    if (target.tagName.toLowerCase() === "button" && target.classList.contains("edit-btn")) {
        // Get the row that contains the clicked button
        var row = target.closest("tr");
        
        // Get the ID of the row
        var rowId = row.getAttribute("data-row-id");
        
        // Redirect to the form page with the ID as a query parameter
        window.location.href = "redirect.html?id=" + rowId;
    }
});
