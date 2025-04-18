function validName(name, errMessage)
{
    if(name.value === "") {
        errMessage.innerHTML="Please fill your name";
        name.focus();
        return false;
    }
    else if(name.value.length < 3) {
        errMessage.innerHTML="Length of name should be more than 2";
        name.focus();
        return false;
    }
    else if(!/^[A-Za-z]{3,}$/.test(name.value)) {
        errMessage.innerHTML="Only Charcter is allowed";
        name.focus();
        return false;
    }
    else {
        errMessage.innerHTML=" ";
        return true;
    }
}

function validDiv(div,errMessage)
{
    if(div.value == "") 
    {
        errMessage.innerHTML="Provide Div";
        return false;
    }
    else if(div.value.length>1)
    {
        errMessage.innerHTML="only one char can be";
        return false;
    }
    else if(!/^[A-Da-d]$/.test(div.value))
    {
        errMessage.innerHTML="you can be in A B C D";
        return false;
    }
    else
    {
        errMessage.innerHTML=" ";
        return true;

    }
}

function validAge(age, errMessage)
{
    if(age.value == "" || age.value<18 || age.value >36)
    {
        errMessage.innerHTML="age should be 18 to 36";
        return false;
    }
    else
    {
        errMessage.innerHTML="";
        return true;
    }
}

function validMono(mono,errMessage)
{
    if(mono.value == "")
    {
        errMessage.innerHTML = "Provide Mono";
        return false;
    }
    else if(!/^[60-99]{2}[0-9]{8}$/.test(mono.value))
    {
        errMessage.innerHTML="Incorrect number";
        return false;
    }
    else{
        errMessage.innerHTML=" ";
        return true;
    }
}

function validgGender(errMessage)
{
    let gender = document.getElementsByName('gender');
    if(gender[0].checked == false && gender[1].checked == false)
    {
        errMessage.innerHTML="select Gender";
        return false;
    }
    else{
        errMessage.innerHTML="";
        return true;
    }
}

function validPass(pass, errMessage) {
    if (pass.value === "") {
        errMessage.innerHTML = "Enter Password";
        return false;
    } 
    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pass.value)) {
        errMessage.innerHTML = "Password must contain at least 1 uppercase, 1 lowercase, 1 digit, 1 special character, and be 8-15 characters long.";
        return false;
    } 
    else {
        errMessage.innerHTML = "";
        return true;
    }
}

function validEmail(email,errMessage)
{
    let pat = /^[a-z0-9]{8,16}@gmail.com$/;
    if(pat.test(email.value))
    {
        errMessage.innerHTML = "";
        return true;
    }
    else
    {
        errMessage.innerHTML = "Enter proper email id[for ex : hello20@gmail.com].";
        errMessage.style.color = "red";
        return false;
    }
}

function validState()
{
    let state = document.getElementById("state").value;
    if(state == 0 || state == null)
    {
        document.getElementById("state_err").innerHTML = "Please, select any one state.";
        document.getElementById("state_err").style.color = "red";
        document.getElementById("state").focus();
        return false;
    }
    else
    {
        document.getElementById("state_err").innerHTML = "";
        return true;
    }
}

var city_array = new Array();
city_array[0] = "";
city_array[1] = "Surat|Vadodara|Navasari|Rajkot|Ahmedabad";
city_array[2] = "Jaipur|Udaipur|Jodhpur";
city_array[3] = "Pune|Mumbai|Kolahpur|Goa";
function fillCity()
{
    var cities = city_array[state.selectedIndex].split("|")
    city.length = 0;
    city.options[0] = new Option("-Select City-", "0");
    city.selectedIndex = 0;
    for (i = 0; i < cities.length; i++) 
    {
        city.options[i + 1] = new Option(cities[i], cities[i])
    }
}

function validCity()
{
    let city = document.getElementById("city").value;
    if(city == 0 || city == null)
    {
        document.getElementById("city_err").innerHTML = "Please, select any one city.";
        document.getElementById("city_err").style.color = "red";
        document.getElementById("city").focus();
        return false;
    }
    else
    {
        document.getElementById("city_err").innerHTML = "";
        return true;
    }
}

let istablecreated = false;

function createTable() {
    if (!istablecreated) {
        let table = 
        `<table id="tb1" border="1">
            <tr>     
                <th>Name</th>
                <th>Div</th>
                <th>Age</th>
                <th>Mobile No</th>
                <th>Email</th>
                <th>Gender</th>
                <th>State</th>
                <th>City</th>
            </tr>
        </table>`;
        document.getElementById("tableShow").innerHTML = table;
        istablecreated = true;
    }

    let tb = document.getElementById("tb1");
    let r = tb.insertRow();
    let name = r.insertCell();
    let Div = r.insertCell();
    let age = r.insertCell();
    let mo = r.insertCell();
    let email = r.insertCell();
    let gender = r.insertCell();
    let state = r.insertCell();
    let city = r.insertCell();

    let gen;
    if (document.getElementById('male').checked) {
        gen = "Male";
    } else if (document.getElementById('female').checked) {
        gen = "Female";
    }
    name.innerHTML = document.getElementById('name').value;
    Div.innerHTML = document.getElementById('divison').value;
    age.innerHTML = document.getElementById('age').value;
    mo.innerHTML = document.getElementById('mono').value;
    email.innerHTML = document.getElementById('email').value;
    gender.innerHTML = gen;
    state.innerHTML = document.getElementById('state').value;
    city.innerHTML = document.getElementById('city').value;
}
