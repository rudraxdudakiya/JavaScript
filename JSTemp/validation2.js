function validate_name(name1,name_div)
{
    if(name1.value=="")
    {
        name_div.innerHTML="Enter name"; 
        name1.focus();
        return false;
    }
    else if(name1.value.length<2)
    {
        name_div.innerHTML="Enter name length >=2";
        name1.focus();
        return false;
    }
    else if(!/^[A-Za-z]{2,}$/.test(name1.value)) 
    {
        name_div.innerHTML="Enter only characters in name "; 
        name1.focus(); 
        return false;
    }
    else 
    {
        name_div.innerHTML="";
        return true;
    } 
    //return false;
}
function validate_email(email,div_email)
{
    if(email.value=="")
    {
        div_email.innerHTML="Enter email";
        email.focus();
        return false;
    }
    else if(email.value.length<2)
    {
        div_email.innerHTML="Enter email length >=5";
        email.focus();
        return false;
    }
    else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value))
    {
        div_email.innerHTML="Enter valid email ";
        email.focus();
        return false;
    }
    else 
    {
        div_email.innerHTML="";
        return true;
    }

}
function validate_mobile(mobile,div_mobile)
{
    if(mobile.value=="")
    {
        div_mobile.innerHTML="Enter mobile";
        mobile.focus();
        return false;
    }
    
    else if(!/^[789]{3}[0-9]{7}$/.test(mobile.value))
    {
        div_mobile.innerHTML="Enter valid mobile ";
        mobile.focus();
        return false;
    }
    else 
    {
        div_mobile.innerHTML="";
        return true;
    }

}