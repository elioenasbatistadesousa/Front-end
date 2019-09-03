function alertaMensagem() {
	// body...
	// pega o o elemento do documento do tipo email e pega o valor dele e armazena 
	var email = document.getElementById("email").value;
	var senha  = document.getElementById("senha").value;

	if (!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(email)) 
{

alert("Digite um email valido");
}

if(email == ""  || senha == ""){

alert("Campos obrigatorios vazios");
return false;
}
}