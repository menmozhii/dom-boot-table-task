var table=document.createElement("table");
table.setAttribute("class","table");

var thead=document.createElement("thead");
var trhead=document.createElement("tr");

var th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="First";

var th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="Second";

var th3=document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML="Handle";


trhead.append(th1,th2,th3);
thead.append(trhead);

var tbody=document.createElement("tbody");
var trbody=document.createElement("tr");

var td1=createtrtd("td","Mark");
var td2=createtrtd("td","otto");
var td3=createtrtd("td","@mdo");
trbody.append(td1,td2,td3);
tbody.append(trbody);

table.append(thead,tbody);
document.body.append(table);

var tr1body=document.createElement("tr");
var td4=createtrtd("td","Jacob");
var td5=createtrtd("td","Thornton");
var td6=createtrtd("td","@fat");
tr1body.append(td4,td5,td6);
tbody.append(tr1body);


var tr2body=document.createElement("tr");
var td7=createtrtd("td","	Larry");
var td8=createtrtd("td","	the Bird");
var td9=createtrtd("td","@twitter");
tr2body.append(td7,td8,td9);
tbody.append(tr2body);






function createtrtd(tagname,content){
let ele=document.createElement(tagname);
ele.innerHTML=content;
return ele;
}
