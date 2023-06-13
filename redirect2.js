function getData() {
    // alert()
    $.ajax({
        type: "GET",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee",
        success: function(data) {
            console.log(data);
            for (i = 0; i < data.length; i++) {
                const text = "<tr>" +
                    "<td>" + data[i].Empname + "</td>" +
                    "<td>" + data[i].Empemail + "</td>" +
                    "<td>" + data[i].Emppassword + "</td>" +
                    "<td>" + data[i].Empcpassword + "</td>" +
                    "<td>" + data[i].Empmobileno + "</td>" +
                    "<td>" + data[i].Empqualifiction + "</td>" +
                    "<td>" + data[i].Empdob + "</td>" +
                    "<td>" + data[i].Empgender + "</td>" +
                    "<td>" + "<button type='button' class='btn btn-warning btn-sm' onclick='editRow(" + data[i].id + ")'>Edit </button>" + "</td>" +
                    "<td>" + "<button type='button' class='btn btn-danger btn-sm' onclick='deleteRow(" + data[i].id + ")'>Delete</button>" + "</td>" +
                    "</tr>";
                $("#tableBody").append(text);

               
            }
         
        }
    });
}
