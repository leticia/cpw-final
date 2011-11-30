//funcao para abrir a caixa das opcoes das linguagens
var openL = false;
function openLang() {
    div = document.getElementById("langopt");
    if (!openL) {
        div.style.display = "block";
        openL = true;
    } 
    else {
        div.style.display = "none";
        openL = false;
    }
}

//funcao para tirar os espaços em branco da string
function retirarEspacos(string) {
	var i = 0;
	var final = "";
	while (i < string.length) {
		if (string.charAt(i) == " ") {
			final += string.substr(0, i);
			string = string.substr(i+1, string.length - (i+1));
			i = 0;
		} else {
			i++;
		}
	}
	return final + string;
}

//funcao para limpar os camos de um form quando clicar nele
function limparCampo(obj) {
	if (obj.value.length > 0) {
		if (obj.value == "E-mail") {
			obj.value = "";
		}
		if (obj.value == "Senha") {
			obj.value = "";
		}
	}
}

//funcao para completar o campo se for e-mail ou senha (do topo do site)
function completarCampo(obj) {
	obj.value = retirarEspacos(obj.value);
	if (obj.value.length == 0) {
		if (obj.name == "nome") {
			obj.value = "E-mail";
		}
		if (obj.name == "senha") {
			obj.value = "Senha";
		}
	}
}

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function leech(v){
    v=v.replace(/o/gi,"0")
    v=v.replace(/i/gi,"1")
    v=v.replace(/z/gi,"2")
    v=v.replace(/e/gi,"3")
    v=v.replace(/a/gi,"4")
    v=v.replace(/s/gi,"5")
    v=v.replace(/t/gi,"7")
    return v
}

function soNumeros(v){
    return v.replace(/\D/g,"")
}

function data(v) {
    if(v.length>=10)
        return v;
    v=v.replace(/\D/g,"")
    v=v.replace(/^(\d{2})(\d+)/,"$1/$2")
    v=v.replace(/^(\d{2})\/(\d{2})(\d+)/,"$1/$2/$3")
    //    v=v.replace(/^(\d{9})(\d+)/,"$1/$2")
    return v;
}

function moeda(v){
    var negativo=false
    if(v.match("^([-])(.*)$"))
        negativo=true
    v=v.replace(/\D/g,"")                    //Remove tudo o que n?o ? d?gito
    //if((v.length-2)<1)
    //  v=v.replace(v, ','+v)
    //else{
    v=v.replace(/(\d+)(\d{5})/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto d?gitos
    v=v.replace(/(\d+)(\d{3})(.)(\d{5})/,"$1.$2$3$4")       //Coloca um ponto entre o terceiro e o quarto d?gitos
    v=v.replace(/(\d+)(\d{3})(.)(\d{3})(.)(\d{5})/,"$1.$2$3$4$5$6")       //Coloca um ponto entre o terceiro e o quarto d?gitos
    v=v.replace(/(\d+)(\d{2})($)/,"$1,$2")       //Coloca um ponto entre o terceiro e o quarto d?gitos*/
    //}

    if(negativo)
        v="-"+v
    
    //v=v.replace(/(\d{*})(\d{2})/,"$1,$2")       //Coloca um ponto entre o terceiro e o quarto d?gitos*/
    return v
}

function telefone(v){
    v=v.replace(/\D/g,"")                 //Remove tudo o que n?o ? d?gito
    v=v.replace(/^(\d\d)(\d)/g,"($1) $2") //Coloca par?nteses em volta dos dois primeiros d?gitos
    v=v.replace(/(\d{4})(\d)/,"$1-$2")    //Coloca h?fen entre o quarto e o quinto d?gitos
    return v
}

function cpf(v){
    v=v.replace(/\D/g,"")                    //Remove tudo o que n?o ? d?gito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto d?gitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto d?gitos
    //de novo (para o segundo bloco de n?meros)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um h?fen entre o terceiro e o quarto d?gitos
    return v
}

function cepbr(v){
    v=v.replace(/\D/g,"")                //Remove tudo o que n?o ? d?gito
    v=v.replace(/^(\d{5})(\d)/,"$1-$2") //Esse ? t?o f?cil que n?o merece explica??es
    return v
}

function cnpj(v){
    v=v.replace(/\D/g,"")                           //Remove tudo o que n?o ? d?gito
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro d?gitos
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto d?gitos
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono d?gitos
    v=v.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um h?fen depois do bloco de quatro d?gitos
    return v
}

function romanos(v){
    v=v.toUpperCase()             //Mai?sculas
    v=v.replace(/[^IVXLCDM]/g,"") //Remove tudo o que n?o for I, V, X, L, C, D ou M
    //Essa ? complicada! Copiei daqui: http://www.diveintopython.org/refactoring/refactoring.html
    while(v.replace(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,"")!="")
        v=v.replace(/.$/,"")
    return v
}

function site(v){
    //Esse sem comentarios para que voc? entenda sozinho ;-)
    v=v.replace(/^http:\/\/?/,"")
    dominio=v
    caminho=""
    if(v.indexOf("/")>-1)
        dominio=v.split("/")[0]
    caminho=v.replace(/[^\/]*/,"")
    dominio=dominio.replace(/[^\w\.\+-:@]/g,"")
    caminho=caminho.replace(/[^\w\d\+-@:\?&=%\(\)\.]/g,"")
    caminho=caminho.replace(/([\?&])=/,"$1")
    if(caminho!="")dominio=dominio.replace(/\.+$/,"")
    v="http://"+dominio+caminho
    return v
}