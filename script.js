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
    
   
    
  
  fetch(`https://date-api-sikn.onrender.com/diferencadatas?datai=15/10/2023&h1=18:10&dataf=${formattedDate}&h2=${formattedTime}&format=YMdhm`) // Substitua "/endpoint" pelo seu endpoint específico
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
setInterval(calc,1000)

document.addEventListener("DOMContentLoaded",function(){
    calc()
})
