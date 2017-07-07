'use strict';

const NewBody = () => {

  const dias_semana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
  const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre");
  const fecha_actual = new Date();

  const fecha = dias_semana[fecha_actual.getDay()] + " dia " + fecha_actual.getDate() + " de " + meses[fecha_actual.getMonth()] + " de " + fecha_actual.getFullYear();

  const container = $('<div class="container containerLogo"></div>');
  const row = $('<div class="row rowImg center"></div>');
  const img = $('<img src="assets/img/logoicon.png" style="height:80px;" class="hidden-xs logoImg" alt=""><br>');

  const p = $('<br><p class="hidden-xs text-center">'+fecha+' | 22°</p>');

  container.append(row)
  row.append(img);
  row.append(p);

  return container;
}
