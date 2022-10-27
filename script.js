function dataEnviar() {
   document.body.style.background = '#2A9D8F';

   //pega os valores inseridos pelo usuario
   let user = document.getElementById('user').value;
   let senha = document.getElementById('senha').value;
   let container = document.getElementById('container');

   //limpa o conteudo da pagina
   container.innerHTML = '';

   //cria um elemento div com id = painel
   let painel = document.createElement('div')
   painel.setAttribute('id', 'painel');

   painel.innerHTML = `
      <h1>Bem Vindo, ${user}</h1><br/>
      <p>Esperamos que sua senha: <strong>${senha}</strong> seja complexa o suficiente para a segurança do seu login!</p>`;
   console.log(painel);
   
   container.appendChild(painel);


}

function dataCancelar() {
   console.log(user + ' + ' + senha);

   user = '';
   senha = '';
}
