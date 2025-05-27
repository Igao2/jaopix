function calc()
{
  
    var agora = new Date();
    var dataAlvo = new Date(2023, 9, 15, 18, 0, 0);  // ATENÇÃO: mês começa do 0 (janeiro = 0). Outubro = 9

    var diferenca = agora - dataAlvo;

    var totalSegundos = Math.floor(diferenca / 1000);
    var totalMinutos = Math.floor(totalSegundos / 60);
    var totalHoras = Math.floor(totalMinutos / 60);
    var totalDias = Math.floor(totalHoras / 24);

    var anos = Math.floor(totalDias / 365);
    var diasRestantes = totalDias % 365;

    var meses = Math.floor(diasRestantes / 30);
    var dias = diasRestantes % 30;

    var horas = totalHoras % 24;
    var minutos = totalMinutos % 60;
    var segundos = totalSegundos % 60;

    var exibr = `${anos} anos, ${meses} meses, ${dias} dias, ${horas}:${minutos}:${segundos} horas, sem o João fazer o pix`;

    const horario = document.getElementById("horario")
    console.log(exibr);
    horario.innerHTML = exibr;

}
setInterval(calc, 1000);


document.addEventListener("DOMContentLoaded", function(){
    calc();
});


   