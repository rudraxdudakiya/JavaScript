let data = [];

let tableCreated = false;

function getCity() {
    let state = document.getElementById("state").value;
    let city = `<option value="-1">-- Select City --</option>`;
    if(state=="Maharashtra")
    {
        city += `<option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Nagpur">Nagpur</option>`;
    }
    if(state=="Gujarat")
    {
        city += `<option value="Ahmedabad">Ahmedabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Vadodara">Vadodara</option>`;
    }
    if(state=="Rajasthan")
    {
        city += `<option value="Jaipur">Jaipur</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="Ajmer">Ajmer</option>`;
    }
    document.getElementById("city").innerHTML = city;

}
function tableHead() {
    tb=document.getElementById("data");

    let head=`
    <table id="table" border="1" style="border-collapse: collapse;">
    <th>SPID</th>
    <th>Rono</th>
    <th>Name</th>
    <th>Semester</th>
    <th>Division</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Mobile Number</th>
    <th>Linkedin</th>
    <th>Username</th>
    <th>Password</th>
    <th>Programming Languages</th>
    <th>State</th>
    <th>City</th>    
    </table>
    `;
    tb.innerHTML = head;
    tableCreated=true;
}

function tableRow()
{
    let gen=document.getElementsByName("gender");
    let genVal="";

    if(gen[0].checked==true)
        genVal=gen[0].value;
    else if(gen[1].checked==true)
        genVal=gen[1].value;

    let pl=document.getElementsByName("plang");
    let plan=[];
    for(i=0;i<pl.length;i++)
    {
        if(pl[i].checked==true)
        {
            plan.push(pl[i].value);
        }
    }

    let stud = {
        SPID : document.getElementById("spid").value,
        Rono : document.getElementById("rno").value,
        Name : document.getElementById("name1").value,
        Semester : document.getElementById("sem").value,
        Division : document.getElementById("div").value,
        Age : document.getElementById("age").value,
        Gender : genVal,
        Email : document.getElementById("email").value,
        MobileNumber : document.getElementById("phone").value,
        Linkedin : document.getElementById("link").value,
        Username : document.getElementById("uname").value,
        Password : document.getElementById("pass").value,
        ProgrammingLanguages : plan,
        State : document.getElementById("state").value,
        City : document.getElementById("city").value
    };
    
    data.push(stud);
    console.log(stud);

    let key = stud.Rono + "_Stud";
    let value = JSON.stringify(data);

    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    document.cookie = key + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    let row=`<tr>
                <td>${stud.SPID}</td>
                <td>${stud.Rono}</td>
                <td>${stud.Name}</td>
                <td>${stud.Semester}</td>
                <td>${stud.Division}</td>
                <td>${stud.Age}</td>
                <td>${stud.Gender}</td>
                <td>${stud.Email}</td>
                <td>${stud.MobileNumber}</td>
                <td>${stud.Linkedin}</td>
                <td>${stud.Username}</td>
                <td>${stud.Password}</td>
                <td>${stud.ProgrammingLanguages.join(", ")}</td>
                <td>${stud.State}</td>
                <td>${stud.City}</td>    
            </tr>`;
    document.getElementById("table").innerHTML += row;

}

function showData() {
    if(validateForm() == false)
    {
        document.getElementById("err").innerHTML = "Please fill all the fields correctly";
        return false;
    }
    document.getElementById("err").innerHTML = "Form Submitted Successfully";
    document.getElementById("err").style.color = "green";
    if(!tableCreated)
    {
        tableHead();
    }
    tableRow();
    document.getElementById("form").reset();
}

// Validation -----------------------------------------------------------
function validId(id,msg){
    let value = id.value;
    let pattern = /^2023[0-9]{4}$/;
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * SPID cannot be empty";
        id.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * SPID should be 2023XXXX";
        id.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Spid";
        return true;
    }
}

function validRno(rno,msg){
    let pattern=/^[1-9]{1}(|[0-9]{1})$/;
    let value = rno.value;
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * Roll Number cannot be empty";
        rno.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * Roll Number should be 1 or 2 digit number";
        rno.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Roll no";
        return true;
    }
}

function validName(name,msg){
    let pattern=/^[A-Za-z]{3,}$/;
    let value = name.value;
    if(value==" "){
        msg.style.color = "red";
        msg.innerHTML = " * Name cannot be empty";
        name.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * Name should contain only alphabets and minimum 3 characters";
        name.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Name";
        return true;
    }
}

function validSem(sem,msg){
    let pattern=/^[1-6]$/;
    let value = sem.value;
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * Semester cannot be empty";
        sem.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * Semester should be 1 to 8";
        sem.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Semester";
        return true;
    }
}

function validDiv(div,msg){
    let pattern=/^[A-D]$/;
    let value = div.value;
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * Division cannot be empty";
        div.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * Division should be A to D (Capital letter)";
        div.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Division";
        return true;
    }
}

function validAge(age,msg){
    let pattern=/^1[6-9]|[2-9][0-9]$/;
    let value = age.value;
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * Age cannot be empty";
        age.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * Age should be 16 to 99";
        age.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Age";
        return true;
    }
}

function validEmail(email,msg){
    let pattern=/^[a-z0-9_]{3,}@[a-z]{2,}((\.[a-z]{2,})|(\.[a-z]{2,})+)$/;
    let value = email.value;
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * Email cannot be empty";
        email.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * Invalid Email format";
        email.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Email";
        return true;
    }
}

function validPhone(phone,msg){
    let pattern=/^(6|7|8|9)[0-9]{9}$/;
    let value = phone.value;
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * Phone Number cannot be empty";
        phone.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * Phone Number should be 10 digit number";
        phone.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Phone Number";
        return true;
    }
}
function validLink(link,msg){

    let pattern=/^https?:\/\/www\.[a-z0-9]{4,}(\.[a-z]{2,})+$/;
    let value = link.value;
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * Linkedin cannot be empty";
        link.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * Invalid Linkedin format";
        link.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Linkedin";
        return true;
    }
}

function validUname(uname,msg){
    let pattern=/^[a-z]{3,}[0-9_]{2,}$/;
    let value = uname.value;
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * Username cannot be empty";
        uname.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * Invalid Username format";
        uname.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Username";
        return true;
    }
}

function validPass(pass,msg){
    let pattern=/^(?=.*[A-Z])[a-zA-Z0-9@#$%^&+=]{8,}$/;
    let value = pass.value;
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * Password cannot be empty";
        pass.focus();
        return false;
    }
    else if(!pattern.test(value)){
        msg.style.color = "red";
        msg.innerHTML = " * Invalid Password format";
        pass.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Password";
        return true;
    }
}

function validCpass(cpass,msg){
    let value = cpass.value;
    let pass = document.getElementById("pass");
    if(value==""){
        msg.style.color = "red";
        msg.innerHTML = " * Confirm Password cannot be empty";
        cpass.focus();
        return false;
    }
    else if(value!=pass.value){
        msg.style.color = "red";
        msg.innerHTML = " * Passwords do not match";
        cpass.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid Confirm Password";
        return true;
    }
}

function validState(){
    let value = document.getElementById("state").value;
    let msg = document.getElementById("errstate");
    if(value=="-1"){
        msg.style.color = "red";
        msg.innerHTML = " * State cannot be empty";
        state.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "State Selected and City Updated";
        return true;
    }
}

function validCity(){
    let value = document.getElementById("city").value;
    let msg = document.getElementById("errcity");
    if(value=="-1"){
        msg.style.color = "red";
        msg.innerHTML = " * City cannot be empty";
        city.focus();
        return false;
    }
    else{
        msg.style.color = "green";
        msg.innerHTML = "Valid City";
        return true;
    }
}

function plangSelected(){
    let plang = document.getElementsByName("plang");
    let msg = document.getElementById("errplang");
    let selected = false;
    for(let i=0;i<plang.length;i++)
    {
        if(plang[i].checked==true)
        {
            selected=true;
            break;
        }
    }
    if(selected == false)
    {
        msg.style.color = "red";
        msg.innerHTML = " * At least one Programming Language should be selected";
        return false;
    }
    else
    {
        msg.innerHTML = "";
        return true;
    }
}

function genderSelected(){
    let gen = document.getElementsByName("gender");
    let msg = document.getElementById("errgen");
    let selected = false;
    for(let i=0;i<gen.length;i++)
    {
        if(gen[i].checked==true)
        {
            selected=true;
            break;
        }
    }
    if(!selected)
    {
        msg.style.color = "red";
        msg.innerHTML=" * Select Gender";
        return false;
    }
    else
    {
        msg.innerHTML="";
        return true;
    }
}

    function validateForm() {
        return validId(spid, errspid) &&
               validRno(rno, errrno) &&
               validName(name1, errname) &&
               validSem(sem, errsem) &&
               validDiv(div, errdiv) &&
               validAge(age, errage) &&
               validEmail(email, erremail) &&
               validPhone(phone, errphone) &&
               validLink(link, errlink) &&
               validUname(uname, erruname) &&
               validPass(pass, errpass) &&
               validCpass(cpass, errcpass) &&
               validState() &&
               validCity() &&
               plangSelected() &&
               genderSelected();
    }
    
