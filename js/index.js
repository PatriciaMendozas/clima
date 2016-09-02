//unction ciudad(){
  //var ciudadp = document.getElementById("ciudad").value;
//}

function ciudad() {
    var ciudadp = document.getElementById("ciudades").value;
    var temperaturap = document.getElementById("temperatura").value;
    $.simpleWeather({
    location: ciudadp,
    woeid: '',
    unit: temperaturap,
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
};
function Reloj() {
var tiempo = new Date();
var hora = tiempo.getHours();
var minuto = tiempo.getMinutes();
var segundo = tiempo.getSeconds();
document.getElementById('hora').innerHTML = hora;
document.getElementById('minuto').innerHTML = minuto;
document.getElementById('segundo').innerHTML = segundo;
setTimeout('Reloj()', 1000);
str_hora = new String(hora);
if (str_hora.length == 1) {
document.getElementById('hora').innerHTML = '0' + hora;
}
str_minuto = new String(minuto);
if (str_minuto.length == 1) {
document.getElementById('minuto').innerHTML = '0' + minuto;
}
str_segundo = new String(segundo);
if (str_segundo.length == 1) {
document.getElementById('segundo').innerHTML = '0' + segundo;
}
}
