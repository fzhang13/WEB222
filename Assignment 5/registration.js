// return all checks
function checkData(){
    clearErrors();
    var res=password()
    var res1=username();
    var res2=streetname();
    var res3=city();
    return res&&res1&&res2&&res3; 
}

function err(text){  
    document.querySelector("#errorcheck").innerHTML+=text; 
}

function clearErrors(){
    document.querySelector("#errorcheck").innerHTML="";
}



// check password error
function password(){
    
   var error=true;
    var pass=document.signup.password.value.trim();
    var retypePass=document.signup.retype.value.trim();
    var pass_length=pass.length;
    var alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var digit="1234567890";
    var characters="!@#$%^&*()+-=_{}[]:;<>?.,/`~";
   

    var lengthError="Password must be 8 characters long";
    var matchError="Passwords does not match";
    var startError="Password must start with a character: !@#$%^&*()+-=_{}[]:;<>?.,/`~";
    var upperError="Password must contain at least one Upper case letter";
    var digitError="Password must contain at least one numeric digit";
    

    if(pass_length!=8){
        err("<p>"+lengthError+"</p>"+'<img src="error.gif" alt="Error" >');
        error=false;
      }


      if(pass!=retypePass){
        err("<p>"+matchError+"</p>"+'<img src="error.gif" alt="Error" >');
        error=false;
      }

      

      var  charChk=0;
      if(characters.indexOf(pass.substr(0,1))>=0){
        charChk=1;
       }

       if(charChk!=1){
           err("<p>"+startError+"</p>"+'<img src="error.gif" alt="Error" >');
           error=false;
       }


    var abchk=0;

     for(var i=0;i<pass_length;i++){
        if(alphabetString.indexOf(pass.substr(i,1))>=0){
            abchk=1;      
            break;
        }   
     }
     if(abchk!=1){
         err("<p>"+upperError+"</p>"+'<img src="error.gif" alt="Error" >');
         return false;
     }
    
     var numchk=0;
     for(var i=0;i<pass_length;i++){
        if(digit.indexOf(pass.substr(i,1))>=0){
            numchk=1;
            break;
        }
     }

     if(numchk!=1){
         err("<p>"+digitError+"</p>"+'<img src="error.gif" alt="Error" >');
         error=false;
     }

   if(!error)
        return false;
   else
        return true;
}


// check username error
function username()
{

   var error=true;
   var username=document.signup.username.value.trim();
   var username_length=username.length;
   var allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+-=_{}[]:;<>?.,/`~";
   var lettersOnly="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

   
   var lenError="Username must have at least 6 characters";
   var charError="Username must start with a letter";

   var count=0;
   for(var i=0;i<username_length;i++){
        if(allChars.indexOf(username.substr(i,1))>=0)
        count++;
    }

    if(count<6){
      err("<p>"+lenError+"</p>"+'<img src="error.gif" alt="Error" >');
      error=false;
    }

     var letterchk=0;
    if(lettersOnly.indexOf(username.substr(0,1))>=0){ 
        letterchk=1;
        
    }

    if(letterchk!=1){
        err("<p>"+charError+"</p>"+'<img src="error.gif" alt="Error" >');
        error=false;
    }

 if(!error)
    return false;
 else
    return true;
}

// check street error
function streetname()
{
  var error=true;
  var street=document.signup.streetname.value.trim();
  var numbers="1234567890";
  var streetError="Street name cannot contain numbers";
  

  var digchk=0;
  for(var i=0;i<street.length;i++){
    if(numbers.indexOf(street.substr(i,1))>=0){
        digchk=1;
        error=false;
        break;
    }
  }
  
  if(digchk==1){
    err("<p>"+streetError+"</p>"+'<img src="error.gif" alt="Error" >');
    error=false;
  }
    if(!error)
        return false;
    else
        return true;
}

// check city error
function city(){
   var error=true;
   var city=document.signup.city.value.trim();
   var alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var cityError="City must contain letters only";
   
   var citychk=0;
   for(var i=0;i<city.length;i++){
       if(alphabet.indexOf(city.substr(i,1))>=0){
         citychk=1;
       }
       else{
         citychk=0;
         break;
       }
   }

   if(citychk==0){
       error=false;
       err("<p>"+cityError+"</p>"+'<img src="error.gif" alt="Error" >');
   }

   if(!error)
        return false;
   else
        return true;
}

