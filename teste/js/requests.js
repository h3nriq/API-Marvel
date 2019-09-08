const privateKey = "f57a44dc68fbd1f52091ac10b6c9eb9923dee57f";
const publicKey = "d643f6908cbdc84018b1b7658cf697d9";
const maxCharacters = 100;
const timeStamp = Date.now().toString();



//Criptografia MD5
function createHash(timeStamp) {

    const toBeHashed = timeStamp + privateKey + publicKey;
    const hashedMessage = md5(toBeHashed);
    return hashedMessage;

}

function getCharacterList() {

    //Randomiza os herois 
    const offset = Math.floor((Math.random() * maxCharacters) + 1);
    //Chama a função de criptografia
    const hash = createHash(timeStamp);

    //URL com o end-point passando os parametros únicas 
    const urlAPI = "http://gateway.marvel.com/v1/public/characters?limit=5&offset="+offset+"&ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;

    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //Verifica se não voltou erro validando o status
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getImages(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();
}


function showHistorys(elemento, timeStamp) {

    //Verifica o elemento h5 na index
    const codigo = elemento.parentNode.getElementsByTagName("h5")[1].textContent.substring(4, 11);//codigo do personagem

    const hash = createHash(timeStamp);//hash para validar a requisição

    const urlAPI = "https://gateway.marvel.com:443/v1/public/characters/"+codigo+"/stories?&limit=5&ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;
    
    // sla mas funcionou
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getHistorys(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();

}
