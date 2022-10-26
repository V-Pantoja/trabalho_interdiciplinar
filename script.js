var user = document.getElementById('user').value;
var senha = document.getElementById('senha').value;
var container = document.getElementById('container');

function dataEnviar() {

   //limpa o conteudo da pagina
   container.innerHTML = '';

   //cria um elemento div com id = painel
   document.createElement('div').setAttribute('id', 'painel');
   let painel = document.getElementById('painel');

   painel.innerHTML = `
      <h1>Bem Vindo, ${user}</h1>
      <p>Esperamos que sua senha: <strong>${senha}</strong> seja complexa o suficiente para a segurança do seu login</p>`
   ;
   container.appendChild(painel);

}

function dataCancelar() {
   user.textContent = '';
   senha.textContent = '';
}
