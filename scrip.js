
function btnMenu(){
    if(menuNav.style.display=="block"|| cadastroNew.style.display=="block"){
        menuNav.style.display="none"
    }else{
        menuNav.style.display="block"
    }
   
}
function cadastroBtn(){
    if(cadastroNew.style.display=="block"){
        cadastroNew.style.display="none"
    }else{
        cadastroNew.style.display="block"
    }
}

var clicarMenu =document.querySelector('#menuBtn');
var clicarCadastro = document.querySelector('#btnCadastrar');

clicarMenu.addEventListener('click',btnMenu)
clicarCadastro.addEventListener('click',cadastroBtn)