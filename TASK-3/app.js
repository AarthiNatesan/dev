const details=document.getElementById("details");
function check(){
    let pname=document.getElementById("pname").value;
    let phnum=document.getElementById("phnum").value;
                    
    if(pname!=="" && phnum!=="" && phnum.length==10){
        document.getElementById("modelselect").style.display="block";
    }
}
function model(){
    if(document.getElementById("Basic").checked){
        document.getElementById("simselect").style.display="block";
        }
    if(document.getElementById("Smartphone").checked){
        document.getElementById("Smartphoneselect").style.display="block";
        document.getElementById("getid").style.display="block";
    }
}
function sim(){
    if(document.getElementById("singleSim").checked){
        document.getElementById("bprocess").style.display="block";
    }    
    if(document.getElementById("dualSim").checked){
        document.getElementById("phonenum2").style.display="block";
        document.getElementById("bprocess").style.display="block";
    }
}
function smphone(){
    if(document.getElementById("android").checked){
        document.getElementById("smprocess").style.display="block";
    }    
    if(document.getElementById("windows").checked){
        document.getElementById("smprocess").style.display="block";
    }
    if(document.getElementById("ios").checked){
        document.getElementById("smprocess").style.display="block";
    } 
}
function smartphprocess(){
    if(document.getElementById("callsm").checked){
        document.getElementById("call-send").style.display="block";
    } 
    if(document.getElementById("messagesm").checked){
        document.getElementById("msg-send").style.display="block";
    } 
    if(document.getElementById("vcsm").checked){
        document.getElementById("vc-send").style.display="block";
    } 
    if(document.getElementById("mailsm").checked){
        document.getElementById("mail-send").style.display="block";
    } 
}
function basicprocess(){
    if(document.getElementById("singleSim").checked && document.getElementById("callb").checked){
        document.getElementById("call-send").style.display="block";
    } 
    if(document.getElementById("singleSim").checked && document.getElementById("messageb").checked){
        document.getElementById("msg-send").style.display="block";
    }
    var phnum2=document.getElementById("phnum2").value;
    if(document.getElementById("dualSim").checked && document.getElementById("messageb").checked && phnum2.length==10){
        document.getElementById("msg-send-dual").style.display="block";
    }  
    if(document.getElementById("dualSim").checked && document.getElementById("callb").checked && phnum2.length==10){
        document.getElementById("call-send-dual").style.display="block";
    } 
}