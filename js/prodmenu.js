function display(strMenu, flgDisplay){
	hideall();
	document.getElementById(strMenu).style.display = "block";
	if(flgDisplay == 'Y')
		//document.getElementById('dropdown-content').style.display = "none";
		document.getElementsByClassName('dropdown-content').style.display = "none";

	
}

function hideall(){
	try{
		var nodeName = "";
		for(var i = 0; i < document.getElementById('modal-body').childNodes.length; i++){
			if(isOdd(i)){
				nodeName = 	document.getElementById('modal-body').childNodes[i].id;
				document.getElementById(nodeName).style.display = "none";
			}
		}
	}catch(e){
		
	}
}

function isOdd(num) {
	if (num === 0) return false;

	return (num & -num) === 1;
	}
function chbg(){
	//alert('Im here');
	//document.getElementById('b').style.backgroundColor = color;
}	
function openTab(){
	alert('Rahul Validating');
}
