/*var form_ok = window.prompt('Digite se é verdadeiro(true) ou falso(false)'); 
if(form_ok== 'true') form_ok = true; else form_ok = false; if(form_ok) alert('Dados enviado com sucesso');
else alert('Preenchimento incorreto')*/ 


form_ok = window.prompt('Digite sua idade');
if(form_ok < 16)alert('Menor de idade, NÃO PODE VOTAR!');

else if(form_ok <18 && 16)( alert('Votação optativa'));
else alert('Maior de idade, VOTO OBRIGATÓRIO!');