function myhours(){
    var agora =  new Date() 
    var horas =  agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();
    var horarios = horas + ":" + minutos +":"+segundos;
    document.getElementById('horas').innerHTML = horarios;
  }
   setInterval(myhours, 1000);