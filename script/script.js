	function insertNum(num){
		if(document.inputForm.inputView.value=="")
			if(num==".")
				document.inputForm.inputView.value=document.inputForm.inputView.value+"0";
		if(num=="."&& document.inputForm.inputView.value.includes("."))
			num="";
		document.inputForm.inputView.value=document.inputForm.inputView.value+num;
	}
	function operation(operator){
		if(document.inputForm.inputView.value)
			document.calcForm.calcView.value+=document.inputForm.inputView.value+operator;
		document.inputForm.inputView.value="";
	}
	function clean(){
		document.inputForm.inputView.value="";
		document.calcForm.calcView.value="";
	}
	function backspace(){
		var exp=document.inputForm.inputView.value;
		document.inputForm.inputView.value=exp.substring(0,exp.length-1);
	}
	function sign(){
		var exp=document.inputForm.inputView.value;
		if(exp){
			exp=exp+"*-1";
			document.inputForm.inputView.value = eval(exp);
		}
	}
	function eql(){
		var exp=document.calcForm.calcView.value+document.inputForm.inputView.value;
		if(exp){
			exp=exp.replace("--","+");
			document.inputForm.inputView.value = Math.round(eval(exp)*1000000000)/1000000000;
		}
		document.calcForm.calcView.value="";
	}
