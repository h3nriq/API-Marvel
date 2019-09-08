//Função para o Doctor
function getHistoryThor(dados){
    
    //Seta nome do heroi
    const heroi = 'Thor';
    
    /* Id historys(nome do heroi) da index para apresentar as histórias,
     * se quiser alterar onde a históŕia é mostrada alterar o lugar da id na index  */
    content = document.querySelector("#history"+heroi+"");
    
    /*  Para testar se a chamada está funcionando
    *   console.log(dados["data"])
    *   console.log(dados["data"]["results"]);  */

    dados["data"]["results"].forEach(element => {
        
        title = document.createElement("a");
        title.classList.add("list-group-item");
        title.classList.add("list-group-item-action");
        title.textContent = element["title"];
        content.appendChild(title);
    });
}

//Função para o Spider Man
function getHistorySpider(dados){
    
    //Seta nome do heroi
    const heroi = 'Spider';
    
    /* Id historys(nome do heroi) da index para apresentar as histórias,
     * se quiser alterar onde a históŕia é mostrada alterar o lugar da id na index  */
    content = document.querySelector("#history"+heroi+"");
    
    /*  Para testar se a chamada está funcionando
    *   console.log(dados["data"])
    *   console.log(dados["data"]["results"]);  */

    dados["data"]["results"].forEach(element => {
        
        title = document.createElement("a");
        title.classList.add("list-group-item");
        title.classList.add("list-group-item-action");
        title.textContent = element["title"];
        content.appendChild(title);
    });
}

//Função para o Doctor Strange
function getHistoryDoctor(dados){
    
    //Seta nome do heroi
    const heroi = 'Doctor';
    
    /* Id historys(nome do heroi) da index para apresentar as histórias,
     * se quiser alterar onde a históŕia é mostrada alterar o lugar da id na index  */
    content = document.querySelector("#history"+heroi+"");
    
    /*  Para testar se a chamada está funcionando
    *   console.log(dados["data"])
    *   console.log(dados["data"]["results"]);  */

    dados["data"]["results"].forEach(element => {
        
        title = document.createElement("a");
        title.classList.add("list-group-item");
        title.classList.add("list-group-item-action");
        title.textContent = element["title"];
        content.appendChild(title);
    });
}