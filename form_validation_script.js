function validateSpid()
{
    let spid = document.getElementById("spid").value;
    let pat = /^2023040[0-9]{3}$/;
    if(pat.test(spid))
    {
        document.getElementById("spid_err").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("spid_err").innerHTML = "Enter spid like (2023040[123]) without any space.";
        document.getElementById("spid_err").style.color = "red";
        document.getElementById("spid").focus();
        return false;
    }
}

function validateRollNo()
{
    let rno = document.getElementById("rno").value;
    let pat = /^[0-9]+$/g;
    if(pat.test(rno))
    {
        document.getElementById("rno_err").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("rno_err").innerHTML = "Enter roll no between 1 to 200.";
        document.getElementById("rno_err").style.color = "red";
        document.getElementById("rno").focus();
        return false;
    }
}

function validateName()
{
    let name = document.getElementById("name").value;
    let pat = /^[a-zA-Z]{5,}$/g;
    if(pat.test(name))
    {
        document.getElementById("name_err").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("name_err").innerHTML = "Enter name only in characters.";
        document.getElementById("name_err").style.color = "red";
        document.getElementById("name").focus();
        return false;
    }
}

function validateSem()
{
    let sem = document.getElementById("sem").value;
    if(sem == 0 || sem == null)
    {
        document.getElementById("sem_err").innerHTML = "Please, select any one semester.";
        document.getElementById("sem_err").style.color = "red";
        document.getElementById("sem").focus();
        return false;
    }
    else
    {
        document.getElementById("sem_err").innerHTML = "";
        return true;
    }
}

function validateDiv()
{
    let div = document.getElementById("div").value;
    if(div == 0 || div == null)
    {
        document.getElementById("div_err").innerHTML = "Please, select any one division.";
        document.getElementById("div_err").style.color = "red";
        document.getElementById("div").focus();
        return false;
    }
    else
    {
        document.getElementById("div_err").innerHTML = "";
        return true;
    }
}

function validateAge()
{
    let age = document.getElementById("age").value;
    if(age <= 16 || age > 25 || age == "")
    {
        document.getElementById("age_err").innerHTML = "Enter age between 17 to 25.";
        document.getElementById("age_err").style.color = "red";
        document.getElementById("age").focus();
        return false;
    }
    else
    {
        document.getElementById("age_err").innerHTML = "";
        return true;
    }
}

function validateGender()
{
    let gender = document.getElementsByName("gender");
    if(gender[0].checked == false && gender[1].checked == false)
    {
        document.getElementById("gender_err").innerHTML = "Please select gender properly.";
        document.getElementById("gender_err").style.color = "red";
        return false;
    }
    else
    {
        document.getElementById("gender_err").innerHTML = "";
        return true;
    }
}

function validateEmail()
{
    let email = document.getElementById("email").value;
    let pat = /^[a-z0-9]{8,16}@gmail.com$/g;
    if(pat.test(email))
    {
        document.getElementById("email_err").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("email_err").innerHTML = "Enter proper email id[for ex : shreya2005@gmail.com].";
        document.getElementById("email_err").style.color = "red";
        document.getElementById("email").focus();
        return false;
    }
}

function validateMobileNo()
{
    let mno = document.getElementById("mno").value;
    let pat = /^[0-9]{10}$/g;
    if(pat.test(mno))
    {
        document.getElementById("mno_err").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("mno_err").innerHTML = "Enter mobile number with 10 digits.";
        document.getElementById("mno_err").style.color = "red";
        document.getElementById("mno").focus();
        return false;
    }
}

function validateUrl()
{
    let url = document.getElementById("url").value;
    let pat = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)$/g;
    if(pat.test(url))
    {
        document.getElementById("url_err").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("url_err").innerHTML = "Enter proper url[for ex : http(s)://vishva.linkedin.com/pub|in|profile].";
        document.getElementById("url_err").style.color = "red";
        document.getElementById("url").focus();
        return false;
    }
}

function validateUserName()
{
    let user = document.getElementById("username").value;
    let pat = /^[a-zA-z0-9]{10,}$/g;
    if(pat.test(user))
    {
        document.getElementById("username_err").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("username_err").innerHTML = "Enter proper username.";
        document.getElementById("username_err").style.color = "red";
        document.getElementById("username").focus();
        return false;
    }
}

function validatePassword()
{
    let password = document.getElementById("password").value;
    let pat = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/g;
    if(pat.test(password))
    {
        document.getElementById("password_err").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("password_err").innerHTML = "Enter proper password which should contain [A-Za-z0-9] and special character with length of 8 to 16.";
        document.getElementById("password_err").style.color = "red";
        document.getElementById("password").focus();
        return false;
    }
}

function validateRepassword()
{
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    if(password == cpassword)
    {
        document.getElementById("cpassword_err").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("cpassword_err").innerHTML = "Your password is incorrect.Enter correct password.";
        document.getElementById("cpassword_err").style.color = "red";
        document.getElementById("cpassword").focus();
        return false;
    }
}

function validateLang()
{
    let lang = document.getElementsByName("lang[]");
    if(lang[0].checked == false && lang[1].checked == false && lang[2].checked == false && lang[3].checked == false && lang[4].checked == false && lang[5].checked == false)
    {
        document.getElementById("lang_err").innerHTML = "Choose languages properly.";
        document.getElementById("lang_err").style.color = "red";
        return false;
    }
    else
    {
        document.getElementById("lang_err").innerHTML = "";
        return true;
    }
}

function validateState()
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

function validateCity()
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

function validate()
{
    if (validateSpid() && validateRollNo() && validateName() && validateSem() && validateDiv() && validateAge() && validateGender() && validateEmail() && validateMobileNo() && validateUrl() && validateUserName() && validatePassword() && validateRepassword()  && validateLang() && validateState() && validateCity()) 
    {
        setTimeout(addData(),2000);
        setTimeout(removedata(),2000);
        return false;
    }
    else 
    {
        return false;
    }
}

function remove(ele)
{
    var table = document.querySelector("table");
    var rowCount = table.rows.length;
    if(rowCount <= 1)
    {
        alert("There is no row available to delete!");
        return;
    }
    if(ele)
    {
        //delete specific row
        ele.parentNode.parentNode.remove();
    }
    else
    {
        //delete last row
        table.deleteRow(rowCount-1);
    }
}

function addData() 
{
    var tbl = document.getElementById("tbl"); // Ensure tbl is defined
    tbl.style.visibility = "visible";
    
    var a = tbl.insertRow(1); // Insert a new row

    var spid = a.insertCell(0);
    var no = a.insertCell(1);
    var name = a.insertCell(2);
    var sem = a.insertCell(3);
    var dv = a.insertCell(4);
    var ag = a.insertCell(5);
    var gen = a.insertCell(6);
    var em = a.insertCell(7);
    var ph = a.insertCell(8);
    var lin = a.insertCell(9);
    var unm = a.insertCell(10);
    var plang = a.insertCell(11);
    var st = a.insertCell(12);
    var ct = a.insertCell(13);

    spid.innerHTML = document.getElementById("spid").value;
    no.innerHTML = document.getElementById("rno").value;
    name.innerHTML = document.getElementById("name").value;
    sem.innerHTML = document.getElementById("sem").value;
    dv.innerHTML = document.getElementById("div").value;
    ag.innerHTML = document.getElementById("age").value;

    // Gender handling
    var gender = document.getElementsByName("gender");
    gen.innerHTML = "";
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gen.innerHTML = gender[i].value;
            break;
        }
    }

    em.innerHTML = document.getElementById("email").value;
    ph.innerHTML = document.getElementById("mno").value;
    lin.innerHTML = document.getElementById("url").value;
    unm.innerHTML = document.getElementById("username").value;

    // Language handling
    plang.innerHTML = "";
    var lan = document.getElementsByName("lang[]");
    for (var i = 0; i < lan.length; i++) {
        if (lan[i].checked) {
            plang.innerHTML += lan[i].value + ", ";
        }
    }

    st.innerHTML = document.getElementById("state").value;
    ct.innerHTML = document.getElementById("city").value;
}


function removedata() 
{ 
    var a = document.getElementsByName("lang[]");
    spid.value="";
    rno.value="";
    name.value="";
    sem.value="";
    div.value="";
    age.value="";
    if(document.getElementsByName("gender")[0].checked==true)
    {
        gender[0].checked=false;
    }
    else
    {
        gender[1].checked=false;
    }
    email.value="";
    mno.value="";
    url.value="";
    username.value="";
    password.value="";
    cpassword.value="";
    for(var i=0; i<a.length; i++)
    {
        if(a[i].checked==true)
        {
            a[i].checked=false;
        }
    }
    state.value="-Select State-";
    city.value="-Select City-";
}