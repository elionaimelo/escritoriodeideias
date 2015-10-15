<?php
$sendto   = "escritoriodeideias@reitoria.ufrn.br ";
$nome = $_POST['nome'];
$matricula = $_POST['matricula'];
$setor = $_POST['setor'];
$usermail = $_POST['email'];
$telefone = $_POST['telefone'];

$titulo = $_POST['titulo'];
$content  = nl2br($_POST['descricao']);
$resultados  = nl2br($_POST['resultados']);

$subject  = "Novo cadastro no escritório de ideias";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Nova proposta</h2>\r\n";
$msg .= "<p><strong>Nome:</strong> ".$nome."</p>\r\n";
$msg .= "<p><strong>Matrícula:</strong> ".$matricula."</p>\r\n";
$msg .= "<p><strong>Setor:</strong> ".$setor."</p>\r\n";
$msg .= "<p><strong>Email:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Telefone:</strong> ".$telefone."</p>\r\n";
$msg .= "<p><strong>Titulo:</strong> ".$titulo."</p>\r\n";
$msg .= "<p><strong>Area(s):</strong> ".implode(" ", $_POST['area'])."</p>\r\n";
$msg .= "<p><strong>Descricao:</strong> ".$content."</p>\r\n";
$msg .= "<p><strong>Resultados:</strong> ".$resultados."</p>\r\n";
$msg .= "</body></html>";


if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>