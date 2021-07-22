function Phone(pname,ph_num){
    this.pname=pname;
    this.ph_num=ph_num;
}
Phone.prototype.Phonecall=function(receiver_num)
{
    alert("Calling to "+receiver_num);
}
Phone.prototype.Message=function(receiver_num)
{
    alert("Your sending message to "+receiver_num);
}
function Basic(pname,ph_num){
    Phone.call(this,pname,ph_num);
    
}
Basic.prototype=Object.create(Phone.prototype);
Basic.prototype.constructor=Basic;

function SingleSim(pname,ph_num){
    Basic.call(this,pname,ph_num);
    
}
SingleSim.prototype=Object.create(Basic.prototype);
SingleSim.prototype.constructor=SingleSim;

function DualSim(pname,ph_num,phnum2){
    Basic.call(this,pname,ph_num);
    this.phnum2=phnum2;
}
DualSim.prototype=Object.create(Basic.prototype);
DualSim.prototype.constructor=DualSim;

DualSim.prototype.Phonecall=function(receiver_num,simop)
{
    alert("Calling to "+receiver_num+" via sim"+simop);
}   
DualSim.prototype.Message=function(receiver_num,simop)
{
    alert("Sending message to "+receiver_num+" via sim"+simop);
} 

function SmartPhone(pname,ph_num,smid){
    Phone.call(this,pname,ph_num);
    this.id=smid;
}
SmartPhone.prototype=Object.create(Phone.prototype);
SmartPhone.prototype.constructor=SmartPhone;

SmartPhone.prototype.Mail=function(receiver_mail)
{
    alert("Sending mail to "+receiver_mail);
}   
SmartPhone.prototype.Videocall=function(vc_id)
{
    alert("Videocalling to "+vc_id);
} 

function Windows(pname,ph_num,smid){
    SmartPhone.call(this,pname,ph_num,smid);

}
Windows.prototype=Object.create(SmartPhone.prototype);
Windows.prototype.constructor=Windows;

function Andriod(pname,ph_num,smid){
    SmartPhone.call(this,pname,ph_num,smid);
    
}
Andriod.prototype=Object.create(SmartPhone.prototype);
Andriod.prototype.constructor=Andriod;

function Ios(pname,ph_num,smid){
    SmartPhone.call(this,pname,ph_num,smid);  
}
Ios.prototype=Object.create(SmartPhone.prototype);
Ios.prototype.constructor=Ios;