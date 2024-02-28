function calc()
{
    var horario = document.getElementById("horario")
    var agora = new Date();


    var dataAlvo = new Date(2023, 10, 15, 18, 0, 0);
    
    
    var diferenca = agora - dataAlvo;
    
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    var exibr = dias + " dias, "+ horas + ":"+ minutos+":"+ segundos + " horas, sem o João fazer o pix"
    console.log(exibr)
    horario.innerHTML = exibr

}
setInterval(calc,1000)

document.addEventListener("DOMContentLoaded",function(){
    calc()
})
