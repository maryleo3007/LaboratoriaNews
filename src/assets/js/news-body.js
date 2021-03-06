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

  const col2 = $('<div class="col-md-12 col-xs-12 posRelative"></div>');
  row.append(col2);
  const img = $('<img src="assets/img/'+state.news[0].img+'" class="img-responsive imgContent0" alt="">');
  col2.append(img);
  const div = $('<div class="col-md-12 col-xs-12  posRelative pAbs"></div>');
  const h3 = $('<h3 class="">'+state.news[0].title+'</h3>');
  const p = $('<p class="hidden-xs">'+state.news[0].brief+'</p>');
  col2.append(div);
  div.append(h3,p);



  const row2 = $('<div class="row rowUltimo"></div>');
  container.append(row2);
  const col3 = $('<div class="col-md-6 col-xs-12 posRelative"></div>');
  const hoy = $('<div class="hoy">HOY</div>');
  col3.append(hoy);
  const col4 = $('<div class="col-md-3 col-xs-12 col-content-ultimo"></div>');
  const col5 = $('<div class="col-md-3 col-xs-12 col-content-ultimo"></div>');
  row2.append(col3,col4,col5);

  const img3 = $('<img src="assets/img/'+state.news[1].img+'" class="img-responsive imgNews1" alt="">');
  col3.append(img3);
  const div3 = $('<div class="col-md-12 col-xs-6 contentUltimo1"></div>');
  const p3 = $('<p class="">'+state.news[1].title+'</p>');
  col3.append(div3);
  div3.append(p3);

  const img4 = $('<img src="assets/img/'+state.news[2].img+'" class="img-responsive imgNews2" alt="">');
  col4.append(img4);
  const div4 = $('<div class="col-md-12 col-xs-6 contentUltimo2"></div>');
  const p4 = $('<p class="">'+state.news[2].title+'</p>');
  col4.append(div4);
  div4.append(p4);

  const img5 = $('<img src="assets/img/'+state.news[3].img+'" class="img-responsive imgNews2" alt="">');
  col5.append(img5);
  const div5 = $('<div class="col-md-12 col-xs-6 contentUltimo2"></div>');
  const p5 = $('<p class="">'+state.news[3].title+'</p>');
  col5.append(div5);
  div5.append(p5);

  return container;
}
