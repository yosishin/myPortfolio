
console.log("working");

var namereg = /^[a-zA-Zא-ת ]+$/;
var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var phonereg = /^[0-9-+]+$/;

function submitForm() {
    document.getElementById("uFirstName").style.border = "2px solid gray";
    document.getElementById("uLastName").style.border = "2px solid gray";
    document.getElementById("uAdress").style.border = "2px solid gray";
    document.getElementById("uPhone").style.border = "2px solid gray";
    document.getElementById("uCity").style.border = "2px solid gray";
    document.getElementById("uZip").style.border = "2px solid gray";
    document.getElementById("uEmail").style.border = "2px solid gray";
    document.getElementById("uPhone").innerHTML = "";

    document.getElementById("uFirstName").innerHTML = "";
    document.getElementById("uLastName").innerHTML = "";
    document.getElementById("uAdress").innerHTML = "";
    document.getElementById("uPhone").innerHTML = "";
    document.getElementById("uCity").innerHTML = "";
    document.getElementById("uZip").innerHTML = "";
    document.getElementById("uEmail").innerHTML = "";

    document.getElementById("WuFirstName").innerHTML = " ";
    document.getElementById("WuLastName").innerHTML = " ";
    document.getElementById("WuAdress").innerHTML = " ";
    document.getElementById("WuCity").innerHTML = " ";
    document.getElementById("WuZip").innerHTML = " ";
    document.getElementById("WuEmail").innerHTML = " ";
    document.getElementById("WuPhone").innerHTML = " ";

    /*collect inf*/
    var valuFirstName = document.getElementById("uFirstName").value;
    var valuLastName = document.getElementById("uLastName").value;
    var valuAdress = document.getElementById("uAdress").value;
    var valuCity = document.getElementById("uCity").value;
    var valuZip = document.getElementById("uZip").value;
    var valuEmail = document.getElementById("uEmail").value;
    var valuPhone = document.getElementById("uPhone").value;

    console.log(valuFirstName, valuLastName, valuAdress, valuCity, valuZip, valuEmail);

    if (valuFirstName.length < 2 || valuFirstName.length > 30) {
        document.getElementById("uFirstName").style.border = "2px solid red";
        document.getElementById("WuFirstName").innerHTML = "Please enter correct first name";
    } else {
        if (valuLastName.length < 2 || valuLastName.length > 30) {
            document.getElementById("uLastName").style.border = "2px solid red";
            document.getElementById("WuLastName").innerHTML = "Please enter correct Last name";
        } else {
            if (valuAdress == "") {
                var valuAdress = document.getElementById("uAdress").value;
                document.getElementById("uAdress").style.border = "2px solid red";
                document.getElementById("WuAdress").innerHTML = "Please enter Adress";
            } else {
                if (valuCity == "") {
                    document.getElementById("uCity").style.border = "2px solid red";
                    document.getElementById("WuCity").innerHTML = "Please enter City";
                } else {
                    if (valuZip == "") {
                        document.getElementById("uZip").style.border = "2px solid red";
                        document.getElementById("WuZip").innerHTML = "Please enter Zip code";
                    } else {
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valuEmail)) {
                            if (valuPhone.length < 10) {
                                document.getElementById("uPhone").style.border = "2px solid red";
                                document.getElementById("WuPhone").innerHTML = "Please enter valid Phone number";
                            } else {
                                document.getElementById("uFirstName").innerHTML = "";
                                document.getElementById("uLastName").innerHTML = "";
                                document.getElementById("uAdress").innerHTML = "";
                                document.getElementById("uCity").innerHTML = "";
                                document.getElementById("uZip").innerHTML = "";
                                document.getElementById("uEmail").innerHTML = "";
                                document.getElementById("uPhone").innerHTML = "";
                                document.getElementById("WuFirstName").innerHTML = "";
                                document.getElementById("WuLastName").innerHTML = "";
                                document.getElementById("WuAdress").innerHTML = "";
                                document.getElementById("WuCity").innerHTML = "";
                                document.getElementById("WuZip").innerHTML = "";
                                document.getElementById("WuEmail").innerHTML = "";
                                document.getElementById("WuPhone").innerHTML = "";
                                alert("Dear "+valuFirstName+" "+valuLastName+", Many thanks for your registration");
                            };

                        } else {
                            document.getElementById("uEmail").style.border = "2px solid red";
                            document.getElementById("WuEmail").innerHTML = "Please enter correct Mail adress";

                        };
                    };
                };
            };
        };
    };
}
