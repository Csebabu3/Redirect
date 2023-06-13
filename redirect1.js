let validationSuccess;
let EmpData = {};


function employee(event) {
    event.preventDefault();
    //retriving
    const id =$("#id").val();
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
        validationSuccess = false;
        $("#empnameerr").text("Please enter the first name");
       
    } else {
        $("#empnameerr").text("");
    }
    
    if (empemail === "") {
        validationSuccess = false;
        $("#empemailerr").text("Please enter the email id");
       
    } else if (!regex.test(empemail)) {
        validationSuccess = false;
        $("#empemailerr").text("Please enter a valid email address");
    } else {
        $("#empemailerr").text("");
    }
    
    if (emppassword === "") {
        validationSuccess = false;
        $("#emppassworderr").text("Please enter the password");
       
    } else {
        $("#emppassworderr").text("");
    }
    
    if (empcpassword === "") {
        validationSuccess = false;
        $("#empcpassworderr").text("Please enter the confirm password");
       
    } else if (emppassword !== empcpassword) {
        validationSuccess = false;
        $("#empcpassworderr").text("Passwords do not match");
       
    } else {
        $("#empcpassworderr").text("");
    }
    
    if (empmobileno === "") {
        validationSuccess = false;
        $("#empmobilenoerr").text("Please enter the mobile no");
       
    } else if (empmobileno.length !== 10) {
        validationSuccess = false;
        $("#empmobilenoerr").text("Please enter a valid 10-digit mobile no");
       
    } else {
        $("#empmobilenoerr").text("");
    }
    
    if (empqualifiction === "") {
        validationSuccess = false;
        $("#empqualifictionerr").text("Please enter the qualification");
       
    } else {
        $("#empqualifictionerr").text("");
    }
    
    if (empdob === "") {
        validationSuccess = false;
        $("#empdoberr").text("Please enter the date of birth");
       
    } else {
        $("#empdoberr").text("");
    }
    
    if (empgender === "") {
        validationSuccess = false;
        $("#empgendererr").text("Please enter a gender");
       
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
}
