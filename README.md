# DesafioTecnicoKingHost
<p>Programa desenvolvido para a vaga de estágio em desenvolvimento na KingHost. </p>

<h1> O desafio é: </h1>

<p> Busque no site da Marvel os seus 3 heróis favoritos e a partir deles liste 5 histórias aos quais cada um conste.
A aplicação deve gerar um html simples bem formatado para exibição.
A linguagem é de sua preferência e o projeto deve possuir um README com as instruções para ser instalado e utilizado. </p>

<strong> Dica: você pode utilizar a API Marvel para ajudar na tarefa </strong>

<a href="https://developer.marvel.com/docs#"> DOCUMENTAÇÃO API - MARVEL </a>

<br><br>

<h1> Aplicação: </h1>
<br>
<strong>Linguagem: </strong>
<ul>
  <li>JavaScript</li>
</ul>

<strong>Endpoint: </strong>
<ul>
  <li>GET /v1/public/characters/{characterId}/stories</li>
</ul>

<strong>Personagens: </strong>
<ul>
  <li>Thor </li>
  <li>Spider-Man </li>
  <li>Doctor Strange </li>
</ul>

<h2>Construção: </h2>
<p>Nessa aplicação eu optei por usar o endpoint que me retornasse as histórias dos herois e limitei na própria url para que me retornasse somente 5 por solicitação.</p>
<p>Como a API obriga a chamada da hash ser um MD5 utilizei um compilador diretamente no código, que é chamado para o arquivo configHero.js e lá converte os parametros que a API solicita.</p>
<br><br>

<h1>Teste a aplicação online: </h1>
<a href="http://marvel.rohamann.kinghost.net">TESTE AQUI</a>
