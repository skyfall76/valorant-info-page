// var speed= 170;
// function pageRedirect() {
//     window.location.replace("/Users/tarun/Desktop/HTML Project/index.html");
//   }
//   setTimeout("pageRedirect()", 6000);

const text = document.querySelector("#fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++)
{
    text.innerHTML += "<span>" + splitText[i] + "</span>";

}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick()
{
    console.log("Sup")
    const span = text.querySelectorAll('span')[char];
    span.classList.add('faded1');
    console.log(span.textContent)
    char++
    if(char === splitText.length)
    {
        complete();
        return;
    }
}

function complete()
{
    clearInterval(timer);
    timer = null;
}






