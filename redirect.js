let validationSuccess;
let EmpData = {};


function employee(event) {
    event.preventDefault();
    //retriving
    const id = $("#id").val();
    const empname = $("#empname").val();
    const empemail = $("#empemail").val();
    const emppassword = $("#emppassword").val();
    const empcpassword = $("#empcpassword").val();
    const empmobileno = $("#empmobileno").val();
    const empqualifiction = $("#empqualifiction").val();
    const empdob = $("#empdob").val();
    const empgender = $("#empgender").val();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    validationSuccess = true;

    if (empname === "") {
        $("#empnameerr").text("Please enter the first name");
        validationSuccess = false;
    } else {
        $("#empnameerr").text("");
    }
    if (empemail === "") {
        $("#empemailerr").text("Please enter the email id");
        validationSuccess = false;
    } else if (!regex.test(empemail)) {
        $("#empemailerr").text("Please enter a valid email address");
        validationSuccess = false;
    } else {
        $("#empemailerr").text("");
    }
    if (emppassword === "") {
        $("#emppassworderr").text("Please enter the password");
        validationSuccess = false;
    } else {
        $("#emppassworderr").text("");
    }
    if (empcpassword === "") {

        $("#empcpassworderr").text("Please enter the confirm password");
        validationSuccess = false;
    } else if (emppassword !== empcpassword) {

        $("#empcpassworderr").text("Passwords do not match");
        validationSuccess = false;
    } else {
        $("#empcpassworderr").text("");
    }
    if (empmobileno === "") {
        $("#empmobilenoerr").text("Please enter the mobile no");
        validationSuccess = false;
    } else if (empmobileno.length != 10) {
        $("#empmobilenoerr").text("Please enter a valid 10-digit mobile no");
        validationSuccess = false;
    } else {
        $("#empmobilenoerr").text("");
    }
    if (empqualifiction === "") {
        $("#empqualifictionerr").text("Please enter the qualification");
        validationSuccess = false;
    } else {
        $("#empqualifictionerr").text("");
    }
    if (empdob === "") {
        $("#empdoberr").text("Please enter the date of birth");
        validationSuccess = false;
    } else {
        $("#empdoberr").text("");
    }
    if (empgender === "") {
        $("#empgendererr").text("Please enter a gender");
        validationSuccess = false;
    } else {
        $("#empgendererr").text("");
    }

    let Employee = {
        "Empname": empname,
        "Empemail": empemail,
        "Emppassword": emppassword,
        "Empcpassword": empcpassword,
        "Empmobileno": empmobileno,
        "Empqualifiction": empqualifiction,
        "Empdob": empdob,
        "Empgender": empgender
    };

    console.log(Employee);
    if (validationSuccess === true) {
        debugger
        if (id =="") {
            $.ajax({
                type: "POST",
                url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee",
                dataType: "JSON",
                data: Employee,
                success: function(){
                    location.reload();
                },
            });
            
        } else {
            $.ajax({
                type: "PUT",
                url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee/" + EmpData.id,
                dataType: "JSON",
                data: Employee,
                success: function (data) {
                    console.log(data);
                    location.reload();
                }
            });
        }
    }
}

function getData() {
    $.ajax({
        type: "GET",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee",
        success: function (data) {
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

function editRow(id) {
    $.ajax({
        type: "GET",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee/" + id,
        success: function (response) {
            $('#id').val(response.id)
            $("#empname").val(response.Empname);
            $("#empemail").val(response.Empemail);
            $("#emppassword").val(response.Emppassword);
            $("#empcpassword").val(response.Empcpassword);
            $("#empmobileno").val(response.Empmobileno);
            $("#empqualifiction").val(response.Empqualifiction);
            $("#empdob").val(response.Empdob);
            $("#empgender").val(response.Empgender);
            EmpData = response;
            alert("edit row");


        }
    });
}

function deleteRow(id) {
    $.ajax({
        type: "DELETE",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee/" + id,
        success: function () {
            alert('This row is deleted.');
            location.reload();
        }
    });
}

