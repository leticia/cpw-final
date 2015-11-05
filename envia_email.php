<?php
/**
 * Código para envio de e-mail utilizando a classe PHPMailer
 *
 * @author Leo Baiano <leobaiano@leobaiano.com>
 * @version 1.0
*/
 
// Chama a classe PHPMailer (pode baixar ela aqui: http://phpmailer.sourceforge.net)
require("libs/class.phpmailer.php");
require ("libs/class.smtp.php");

// Instancia o objeto $mail a partir da Classe PHPMailer
$mail = new PHPMailer();
$mail->SetLanguage("br", "libs/"); // Linguagem

// Recupera os dados do formulário
$nome       = $_POST['nome'];
$telefone   = $_POST['telefone'];
$email      = $_POST['email'];
$assunto	= $_POST['assunto'];
$mensagem	= $_POST['mensagem'];
//$arquivo    = $_FILES['arquivo']; <-- Não está sendo usado, somente para envio de arquivo.
 
// Recupera o nome do arquivo
//$arquivo_nome = $arquivo['name']; <-- Não está sendo usado, somente para envio de arquivo.
 
// Recupera o caminho temporario do arquivo no servidor
//$arquivo_caminho = $arquivo['tmp_name']; <-- Não está sendo usado, somente para envio de arquivo.
 
// Monta a mensagem que será enviada
$corpo = "
			<font face='Arial, Helvetica, sans-serif' size='2'>
			<strong>Nome:</strong> $nome<br />
			<strong>E-mail:</strong> $email<br />				
	   		<strong>Telefone:</strong> $telefone<br />
			<strong>Mensagem enviada:</strong><br /> $mensagem
			</font>
	";
$corpoSimples = "
            Nome: $nome\n
			E-mail: $email\n				
	   		Telefone: $telefone\n
			Mensagem enviada: \n $mensagem
	    
	";
 
// Informo o Host, From, subject e para quem o e-mail será enviado
//$mail->IsSMTP(); // telling the class to use SMTP
//$mail->SMTPAuth = true; 
$mail->CharSet = 'UTF-8';
$mail->IsMail(true);
$mail->Host = 'localhost';
$mail->From = 'site@winget.com.br';
$mail->FromName = 'Site Winget Creative Solutions';
$mail->Subject = $assunto;
$mail->AddAddress('winget@winget.com.br','Contato do Site');
$mail->AddCC('fabio.cs3mx@gmail.com','Fábio CS');
// Informa que a mensagem deve ser enviada em HTML
$mail->IsHTML(true);
 
// Informa o corpo da mensagem
$mail->Body = $corpo;
 
// Se o e-mail destino não suportar HTML ele envia o texto simples
$mail->AltBody = $corpoSimples;
 
// Anexa o arquivo
//$mail->AddAttachment($arquivo_caminho, $arquivo_nome); <-- Não está sendo usado, somente para envio de arquivo.
 
// Tenta enviar o e-mail e analisa o resultado

// Nas versões do PHP anteriores a 4.1.0, deve ser usado $HTTP_POST_FILES
// ao invés de $_FILES.

/*$uploaddir = '/homez.467/proenfan/www/anexo/'; <-- Não está sendo usado, somente para envio de arquivo.
$uploadfile = $uploaddir . $_FILES['arquivo']['name'];
print "<pre>";
if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $uploaddir . $_FILES['arquivo']['name'])) {
    print "O arquivo &eacute; v&aacute;lido e foi carregado com sucesso. Informação:\n";
    print_r($_FILES);
} else {
    print "Possivel ataque de upload! Aqui esta alguma informação:\n";
    print_r($_FILES);
}
print "</pre>";*/

if(!$mail->Send()) {
                echo "Erro: " . utf8_decode($mail->ErrorInfo);
        } else {
                header("Location: contato.html?envio=ok");
        }

?>
