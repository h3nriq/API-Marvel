const privateKey = "f57a44dc68fbd1f52091ac10b6c9eb9923dee57f";
const publicKey = "d643f6908cbdc84018b1b7658cf697d9";
const timeStamp = Date.now().toString();

//Criptografia MD5 - Obrigatório!! 
function createHash(timeStamp) {

    const toBeHashed = timeStamp + privateKey + publicKey;
    const hashedMessage = md5(toBeHashed);
    return hashedMessage;

}

function showHistoryThor() {

    //ID Thor 
    const codigo = 1009664;

    //Chama a hash para a função
    const hash = createHash(timeStamp);

    //Monta a url com as chaves que a API pede, especificando o heroi e limitando 5 histórias por chamada.
    const urlAPI = "https://gateway.marvel.com:443/v1/public/characters/"+codigo+"/stories?&limit=5&ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;
    
    console.log(urlAPI);
    // Verifica se o status está ok e chama a função história de getDados.js
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getHistoryThor(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();

}

//Chama API via url específica para o Spider Man, verifica se está correta e chama a história
function showHistorySpider() {

    //ID Spider-Man 
    const codigo = 1009610;

    //Chama a hash para a função
    const hash = createHash(timeStamp);

    //Monta a url com as chaves que a API pede, especificando o heroi e limitando 5 histórias por chamada.
    const urlAPI = "https://gateway.marvel.com:443/v1/public/characters/"+codigo+"/stories?&limit=5&ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;
    
    console.log(urlAPI);
    // Verifica se o status está ok e chama a função história de getDados.js
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getHistorySpider(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();

}

//Chama API via url específica para o Doctor Strange, verifica se está correta e chama a história
function showHistoryDoctor() {

    //ID Doctor 
    const codigo = 1009282;

    //Chama a hash para a função
    const hash = createHash(timeStamp);

    //Monta a url com as chaves que a API pede, especificando o heroi e limitando 5 histórias por chamada.
    const urlAPI = "https://gateway.marvel.com:443/v1/public/characters/"+codigo+"/stories?&limit=5&ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;
    
    console.log(urlAPI);
    // Verifica se o status está ok e chama a função história de getDados.js
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getHistoryDoctor(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();

}