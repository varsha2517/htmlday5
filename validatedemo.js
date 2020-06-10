fuction Validate(){
    var user=document.getElementById("txtuser").value;
    var mob=document.getElementById("txtMobile").value;
    var email=document.getElementById("txtemailid").value;
    var rollnumber=document.getElementById("txtrollnumber").value;
    var m=/^[6-9][0-9]{9}$|^[0][6-9][0-9]{9}$|^[+][9][1][6-9][0-9]{9}$/;
    var e=/^[a-zA-Z0-9._-]{6,12}@[a-z]{3,15}[.][a-z]{2,6}$/;
    var r=/^[2][2][1][7][1][0][3][0-9]{2}[0-9]{3}$/;
    if(mob== '' || user=='' || email=='' || roll ==''){
        return false;
    }
    else{
        if(m.test(mob)&&e.test(email)&&r.test(roll)){
            window.alert("valid");
        }
        else{
            window.alert("invalid");
        }
    }