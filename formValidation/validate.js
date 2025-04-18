function validateName(name,error_name)
{
    var vname = /[a-zA-Z]+/;

    if(name.value == "")
    {
        error_name.innerText = "Enter the Name";
        name.focus();
        return false;
    }
    else if(!vname.test(name.value))
    {
        error_name.innerText = "This Field Only Contain Alphabetics";
        name.focus();
        return false;   
    }
    else
    {
        error_name.innerText = "";
        return true;
    }
}

function validateEmail(email,error_email)
{
    var vemail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;

    if(email.value == "")
    {
        error_email.innerText = "Enter the Email";
        email.focus();
        return false;
    }
    else if(!vemail.test(email.value))
    {
        error_email.innerText = "Enter the Valid Email Formate";
        email.focus();
        return false;
    }
    else
    {
        error_email.innerText = "";
        return true;
    }
}

function validateGender(gender,error_gender)
{
    if(gender[0].checked == false && gender[1].checked == false)
    {
        error_gender.innerText = "Select the Gender";
        return false;
    }
    else
    {
        error_gender.innerText = "";
        return true;
    }
}

function validatePhone(phone,error_phone)
{
    var vphone = /^[789]{3}[0-9]{7}$/;

    if(phone.value == "")
    {
        error_phone.innerText = "Enter the Phone Number";
        phone.focus();
        return false;
    }
    else if(!vphone.test(phone.value))
    {
        error_phone.innerText = "Enter Valid Phone Format";
        phone.focus();
        return false;
    }
    else
    {
        error_phone.innerText = "";
        return true
    }
}

function validateSub(sub,error_sub)
{
    if(sub.value == "" || sub.value == 0)
    {
        error_sub.innerText = "Select the subscription Type";
        return false;
    }
    else
    {
        error_sub.innerText = "";
        return true;
    }
}

function validateTopic(topic,error_topic)
{
    if(!topic[0].checked && !topic[1].checked && !topic[2].checked && !topic[3].checked)
    {
        error_topic.innerText = "Select the Topic";
        return false;
    }
    else
    {
        error_topic.innerText = "";
        return true;
    }
}