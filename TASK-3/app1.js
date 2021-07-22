var myPhone;
var Screceiver_num=document.getElementById("rcnum");
var Smreceiver_num=document.getElementById("rmnum");
var Dcreceiver_num=document.getElementById("drcnum");
var Dmreceiver_num=document.getElementById("drmnum");
var receiverMail_id=document.getElementById("rmid");
var vc_id=document.getElementById("rvcid");
var ph1=document.getElementById("mph1").checked;
var simopm=(ph1) ? '1' : '2';
this.simopm=simopm;
var ph2=document.getElementById("cmph1").checked;
var simopc=(ph2) ? '1' : '2';
this.simopc=simopc;

function setup(){
    var name=document.getElementById("pname").value;
    var phnum=document.getElementById("phnum").value;
    var phnum2=document.getElementById("phnum2").value;
    var smid=document.getElementById("smid").value;

    if(document.getElementById("Basic").checked && document.getElementById("singleSim").checked ){  
        myPhone=new SingleSim(name,phnum);
    }
    if(document.getElementById("Basic").checked && document.getElementById("dualSim").checked ){
        myPhone=new DualSim(name,phnum,phnum2);
    }
    if(document.getElementById("Smartphone").checked && document.getElementById("android").checked){
        myPhone=new Andriod(name,phnum,smid);
    }
    if(document.getElementById("Smartphone").checked && document.getElementById("windows").checked){
        myPhone=new Windows(name,phnum,smid);
    }
    if(document.getElementById("Smartphone").checked && document.getElementById("ios").checked){
        myPhone=new Ios(name,phnum,smid);
    }
}

function call(){
    myPhone.Phonecall(Screceiver_num.value);
}
function message(){
    myPhone.Message(Smreceiver_num.value);
}

function DualSimmessage(){
    myPhone.message(Dcreceiver_num.value,simopm.value);
}
function DualSimphonecall(){
    myPhone.phonecall(Dmreceiver_num.value,simopc.value);
}
function mail(){
    myPhone.Mail(receiverMail_id.value);
}
function videocall(){
    myPhone.Videocall(vc_id.value);
}
