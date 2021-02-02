var hamburguer=window.document.querySelector(".hamburguer")

hamburguer.addEventListener("click", ()=>
    document.querySelector(".container").classList.toggle("show-menu")
)

let time=4000,
    imagemAtual=0,
    imagens=document.querySelectorAll("#img-wrapper img")
    maxImagens=imagens.length;

function proxImagem(){
    imagens[imagemAtual]
    .classList.remove("selecionado")

    imagemAtual++

    if(imagemAtual>=maxImagens){
        imagemAtual=0
    }

    imagens[imagemAtual]
    .classList.add("selecionado")
}      

function start(){
    setInterval(()=>{
        proxImagem()
    }, time)
}

window.addEventListener("load", start)