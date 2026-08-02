function getFormvalue() {
    let f=document.getElementById("form1");
	let data=new FormData(f);
	let message=f.get("fname")+" "+f.get("lname");
	alert(message);

}
