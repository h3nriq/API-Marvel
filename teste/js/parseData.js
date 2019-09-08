function getImages(dados){

    console.log(dados["data"]["results"]);
    let coisasPersonagens = dados["data"]["results"];

    for (let cont = 0; cont < coisasPersonagens.length; cont++) {    
        
        let primeiro = coisasPersonagens[cont];
        quadrado = document.querySelector("#c"+cont+"");
        quadrado.querySelector("#i"+cont+"").src = primeiro["thumbnail"]["path"] +"."+ primeiro["thumbnail"]["extension"];
        quadrado.querySelector("#n"+cont+"").textContent = "Nome: "+primeiro["name"];
        quadrado.querySelector("#cod"+cont+"").textContent = "Descrição: "+primeiro["description"];
    }

}

function getHistorys(dados){

    //<a href="#" class="list-group-item list-group-item-action">Cras justo odio</a>
    content = document.querySelector("#historys");
    if(dados["data"]["count"] === 0){
        //diz que n tem nenhuma historia
        return alert("Não Há histórias registradas na API");
    }
    console.log(dados["data"])
    console.log(dados["data"]["results"]);

    dados["data"]["results"].forEach(element => {
        
        title = document.createElement("a");
        title.classList.add("list-group-item");
        title.classList.add("list-group-item-action");
        title.textContent = element["title"];
        content.appendChild(title);
    });
    
}

$("#exampleModal").on("hidden.bs.modal", function () {
    content = document.querySelector("#historys");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
});