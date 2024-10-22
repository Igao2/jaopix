function calc()
{
    var horario = document.getElementById("horario")
    var agora = new Date();


    var dataAlvo = new Date(2023, 10, 15, 18, 0, 0);
    
    
    var diferenca = agora - dataAlvo;
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    var dia = agora.getDate();
    var mes = agora.getMonth();
    var ano = agora.getFullYear();
    var hora = agora.getHours();
    var minuto = agora.getMinutes();
    
     const formattedDate = `${dia}/${mes}/${ano}`;
     const formattedTime = `${hora}:${minuto}`;
    
   
    
  
  fetch(`https://date-api-sikn.onrender.com/diferencadatas?datai=15/10/2023&h1=18:00&dataf=${formattedDate}&h2=${formattedTime}&format=YMdhm`) // Substitua "/endpoint" pelo seu endpoint específico
  .then(response => response.json())
  .then(data =>{
    const result = data.result;
    const hours = result.hours;
    const days =result.days;
    const years = result.years;
    const months = result.months;
    const minutes = result.minutes;
    var exibr =years+" anos, "+months+" meses, "+days+ " dias, "+ hours + ":"+ minutes+ ":"+segundos+" horas, sem o João fazer o pix"
    horario.innerHTML = exibr;
    
})
  .catch(error => console.error('Erro:', error));
   

}

function calcz()
{
  var horario = document.getElementById("horario")
    var agora = new Date();


    var dataAlvo = new Date(2023, 10, 15, 18, 0, 0);
  const diffMs = Math.abs(agora - dataAlvo);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays/30);
    const diffYears = Math.floor(diffDays/365);
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diffMs % (1000 * 60)) / 1000);
    var exibr =diffYears+" anos, "+diffMonths+" meses, "+diffDays+ " dias, "+ diffHours + ":"+ diffMinutes+ ":"+segundos+" horas, sem o João fazer o pix"
    horario.innerHTML = exibr;
}

document.addEventListener("DOMContentLoaded",function(){

  setInterval(calcz(),1000)

    setTimeout(setInterval(calc,1000),2000);
})
