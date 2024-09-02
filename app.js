const url = "https://x.com/";

window.addEventListener("load", async () => {
    const result = document.getElementById("result");

    isSiteOnline(url,function(found){
        if(found) {
            result.innerHTML = "Sim 😃👍";
        }
        else {
            result.innerHTML = "Não 😪👎";
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