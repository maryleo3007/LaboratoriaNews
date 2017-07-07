'use strict';

const ContentBody = () => {
console.log(state.news[0].img);
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  container.append(row);
  const col1 = $('<div class="col-md-12"></div>');
  const ul3 = $('<ul class="hidden-xs hidden-sm ul-contain bg-lab"></ul>');
  const li5 = $('<li>Lo ultimo</li>');
  const li6 = $('<li>Opinión</li>');
  const li7 = $('<li>Cultura</li>');
  const li8 = $('<li>Peru</li>');
  const li9 = $('<li>Tecnologia</li>');
  const li10 = $('<li>Mundo</li>');
  const li11 = $('<li>Economia</li>');
  const li12 = $('<li>Lyfestyle</li>');
  const li13 = $('<li>Deporte</li>');
  row.append(col1);
  col1.append(ul3);
  ul3.append(li5,li6,li7,li8,li9,li10,li11,li12,li13);

  const col2 = $('<div class="col-md-12 col-xs-12 colContentImg"></div>');
  row.append(col2);
  const img = $('<img src="assets/img/'+state.news[0].img+'" class="img-responsive imgContent0" alt="">');
  col2.append(img);
  const div = $('<div class="col-md-12 col-xs-12  colContentImg pAbs"></div>');
  const h3 = $('<h3 class="">'+state.news[0].title+'</h3>');
  const p = $('<p class="hidden-xs">'+state.news[0].brief+'</p>');
  col2.append(div);
  div.append(h3);
  div.append(p);

  const col3 = $('<div class="col-md-6 col-xs-12 colContentImg"></div>');
  row.append(col2);
  const img = $('<img src="assets/img/'+state.news[0].img+'" class="img-responsive imgContent0" alt="">');
  col2.append(img);
  const div = $('<div class="col-md-12 col-xs-12  colContentImg pAbs"></div>');
  const h3 = $('<h3 class="">'+state.news[0].title+'</h3>');
  const p = $('<p class="hidden-xs">'+state.news[0].brief+'</p>');
  col2.append(div);
  div.append(h3);
  div.append(p);

  return container;
}
