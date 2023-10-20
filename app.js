function add(){
    var inputfield=document.getElementById("input-text");
    // console.log(inputfield.value);
    var unordered=document.getElementById("unorderedlist")
    var element=document.createElement("li");
    var text=document.createTextNode(inputfield.value);
    element.appendChild(text);
    unordered.appendChild(element);
    inputfield.value="";

    var delbtn=document.createElement("button");
var textbutton=document.createTextNode("Delete");
delbtn.appendChild(textbutton);
element.appendChild(delbtn);
delbtn.setAttribute("onclick","deleach(this)");
var editbtn=document.createElement("button");
var textbutton1=document.createTextNode("Edit");
editbtn.appendChild(textbutton1);
element.appendChild(editbtn);
editbtn.setAttribute("onclick","editeach(this)");
delbtn.setAttribute("class","deletestyling");
editbtn.setAttribute("class","editstyling");
}
function deleteall(){
    var unordered=document.getElementById("unorderedlist");
    while (unordered.firstChild) {
        unordered.removeChild(unordered.firstChild);
    }
}

z
function deleach(e){
console.log(e.parentNode.remove());
}
function editeach(a){
    var input2=prompt("enter updated value");
    var current=a.parentNode.firstChild.nodeValue;
a.parentNode.firstChild.nodeValue=input2;
}