
function showInputEntered() {
	var ent=document.getElementById("txtInput").value;
	if (ent.trim().length>0) {
		alert(ent);
	} else {
		alert("nothin entered");
	}
}
function getWizzdle() {
	var xhr=new XMLHttpRequest();
	xhr.onload=function() {
		if (xhr.status===200) {
			document.getElementById("largeOutput").innerHTML="hello?";
			var resp=xhr.responseXML;
			procXMLResp(resp);
		}
	}
	xhr.open("GET", "service/stuDeetsWIZZ.wsdl");
	xhr.send(null);
}
function procXMLResp( resp) {
	var evts=resp.getElementsByTagName("wsdl:message");
	var i=0;
	for (i=0; i<evts.length; i++) {
		alert(evts[i].innerHTML);
		
	}
}
var soapy1="<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"\n"+
"xmlns:sch=\"http://digiwack.com/school\">\n"+
   "<soapenv:Header/>\n"+
   "<soapenv:Body>\n"+
      "<sch:StudentDetailsRequest>\n"+
         "<sch:name>"
var soapy2="</sch:name>\n"+
      "</sch:StudentDetailsRequest>\n"+
   "</soapenv:Body>\n"+
"</soapenv:Envelope>";
function getStudentDatar() {
	var stuName=document.getElementById("txtInput").value;
	stuName=soapy1+stuName+soapy2;
	var xhr=new XMLHttpRequest();
	xhr.onload=function() {
		if (xhr.status===200) {
			var resp1=xhr.responseXML.getElementsByTagName("ns2:name")[0];
			var resp2=xhr.responseXML.getElementsByTagName("ns2:standard")[0];
			var resp3=xhr.responseXML.getElementsByTagName("ns2:address")[0];
			alert(resp1.innerHTML+"\n"+resp2.innerHTML+"\n"+resp3.innerHTML);
		}
	}
	xhr.open("POST", "service/stuDeetsWIZZ.wsdl");
	xhr.setRequestHeader("Content-type", "text/xml");
	xhr.send(stuName);
}