<?php
 	//REMETENTE --> ESTE EMAIL TEM QUE SER VALIDO DO DOMINIO
 	//====================================================
	$email_remetente = "elionai.melo@gmail.com"; // deve ser um email do dominio
	//====================================================
 
 
	//Configurações do email, ajustar conforme necessidade
	//====================================================
	$email_destinatario = "elionai.melo@gmail.com"; // qualquer email pode receber os dados
	$email_reply = "$email";
	$email_assunto = "Site Doc Espaço : Fale Conosco";
	//====================================================
 
 
	//Variaveis de POST, Alterar somente se necessário
	//====================================================
	$nome = $_POST['nome'];
	$matricula = $_POST['matricula'];
	$setor = $_POST['setor'];
	$email = $_POST['email'];
	$telefone = $_POST['telefone'];
	$administracao= $_POST['administracao'];
	$orcamento= $_POST['orcamento'];
	$comunicacao = $_POST['comunicacao'];
	$infraestrutura = $_POST['infraestrutura'];	
	$meio = $_POST['meio'];
	$desenvolvimento = $_POST['desenvolvimento'];
	$qualidade = $_POST['qualidade'];
	$descricao = $_POST['descricao'];
	$resultados = $_POST['resultados'];		
	//====================================================
 
	//Monta o Corpo da Mensagem
	//====================================================
	$email_conteudo = "<b>Mensagem Recebida pelo Site Doc Espaço : Fale Conosco</b>\n<br/>"; 
	$email_conteudo .= "<b>Nome : </b>$nome \n<br/>"; 	
	$email_conteudo .= "<b>Email : </b>$email \n<br/>"; 
	$email_conteudo .= "<b>Telefone : </b>$telefone \n<br/>";
	$email_conteudo .= "<b>Cidade : </b>$cidade \n<br/>";
	$email_conteudo .= "<b>Estado : </b>$estado \n<br/>";	
	$email_conteudo .= "<b>Assunto : </b>$assunto \n<br/>";
	$email_conteudo .= "<b>Mensagem : </b>$mensagem \n<br/>";
 	//====================================================
 
	//Seta os Headers (Alerar somente caso necessario)
	//====================================================

	//$email_headers = implode ( "\n",array ( "From: $email_remetente", "Reply-To: $email_reply", "Subject: $email_assunto","Return-Path:  $email_remetente","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );
	
	
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-3\r\n";
$headers .= "From: \"$nome\" <$email>\r\n";	
	//====================================================
 
	//Enviando o email
	//====================================================
	mail ($email_destinatario, $email_assunto, nl2br($email_conteudo), $headers);
echo "<SCRIPT LANGUAGE=\"JavaScript\"> 
{ alert ('Entraremos em contato em breve.')}
</script>";
	  echo'<script language= "JavaScript">location.href="index.html"</script>';
?>