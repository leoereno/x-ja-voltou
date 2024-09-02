const url = "https://x.com/";

window.addEventListener("load", async () => {
    const result = document.getElementById("result");
    const contador = document.getElementById("contador-dias");
    isSiteOnline(url,function(found){
        if(found) {
            result.innerHTML = "Sim 😃👍";
            contador.innerHTML = 0;
        }
        else {
            result.innerHTML = "Não 😪👎";
            contador.innerHTML = Math.floor((new Date().getTime() - new Date(2024, 7, 31).getTime())/86400000);
        }
    })
});

const reload = () =>{
    result.innerHTML = "...";
    window.location.reload();
}

function isSiteOnline(url,callback) {
    var timer = setTimeout(function(){
        callback(false);
    },5000)

    var img = document.createElement("img");
    img.onload = function() {
        clearTimeout(timer);
        callback(true);
    }

    img.onerror = function() {
        clearTimeout(timer);
        callback(false);
    }

    img.src = url+"/favicon.ico";
}