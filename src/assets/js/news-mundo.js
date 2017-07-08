'use strict';

const NewsMundo = () => {
console.log(state.news[0].img);
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const h2 = $('<h2 class="">MUNDO</h2>');
  const hrLittle = $('<hr class="hrLittle">');
  container.append(row);
  row.append(h2);
  row.append(hrLittle);

  const col = $('<div class="col-md-3 col-xs-12"></div>');
  const colContent = $('<div class="col-md-6 col-xs-12"></div>');
  row.append(col);
  row.append(colContent);
  const img = $('<img src="assets/img/'+state.news[4].img+'" class="img-responsive imgMundoBig" alt="">');
  col.append(img);
  const div = $('<div class="col-md-12 col-xs-12 contentMundo1"></div>');
  const p = $('<p class="">'+state.news[4].title+'</p>');
  col.append(div);
  div.append(p);


  //

  const row2 = $('<div class="row"></div>');
  colContent.append(row2);
  const col1 = $('<div class="col-md-6 col-xs-12 "></div>');
  row2.append(col1);
  const img1 = $('<img src="assets/img/'+state.news[5].img+'" class="img-responsive" alt="">');
  col1.append(img1);
  const div1 = $('<div class="col-md-12 col-xs-12 contentUltimo1"></div>');
  const p1 = $('<p class="">'+state.news[5].title+'</p>');
  col1.append(div1);
  div1.append(p1);

  const col21 = $('<div class="col-md-6 col-xs-12 "></div>');
  row2.append(col21);
  const img21 = $('<img src="assets/img/'+state.news[6].img+'" class="img-responsive" alt="">');
  col21.append(img21);
  const div21 = $('<div class="col-md-12 col-xs-12 contentUltimo1"></div>');
  const p21 = $('<p class="">'+state.news[6].title+'</p>');
  col21.append(div21);
  div21.append(p21);


  const row3 = $('<div class="row rowUltimo"></div>');
  colContent.append(row3);
  const col31 = $('<div class="col-md-6 col-xs-12 "></div>');
  row3.append(col31);
  const img31 = $('<img src="assets/img/'+state.news[7].img+'" class="img-responsive" alt="">');
  col31.append(img31);
  const div31 = $('<div class="col-md-12 col-xs-12 contentUltimo1"></div>');
  const p31 = $('<p class="">'+state.news[7].title+'</p>');
  col31.append(div31);
  div31.append(p31);

  const row4 = $('<div class="row rowUltimo"></div>');
  colContent.append(row4);
  const col41 = $('<div class="col-md-6 col-xs-12 "></div>');
  row4.append(col41);
  const img41 = $('<img src="assets/img/'+state.news[8].img+'" class="img-responsive" alt="">');
  col41.append(img41);
  const div41 = $('<div class="col-md-12 col-xs-12 contentUltimo1"></div>');
  const p41 = $('<p class="">'+state.news[8].title+'</p>');
  col41.append(div41);
  div41.append(p41);

  //
  const col2 = $('<div class="col-md-3 col-xs-12 "></div>');
  row.append(col2);
  const img2 = $('<img src="assets/img/'+state.news[6].img+'" class="img-responsive imgMundoBig" alt="">');
  col2.append(img2);
  const div2 = $('<div class="col-md-12 col-xs-12 contentMundo1"></div>');
  const p2 = $('<p class="">'+state.news[6].title+'</p>');
  col2.append(div2);
  div2.append(p2);

//
  const row5 = $('<div class="row rowUltimo"></div>');
  container.append(row5);

  let num = 51;
  const columna = "col";
  const imagen = "img";
  const contenedor = "div";

  for (var i = 9; i < 13; i++) {
    (columna+num) = $('<div class="col-md-3 col-xs-12 "></div>');
    row5.append(columna+num);
    (imagen+num) = $('<img src="assets/img/'+state.news[i].img+'" class="img-responsive" alt="">');
    (columna+num).append(imagen+num);
    (contenedor+num) = $('<div class="col-md-3 col-xs-12 contentUltimo1"></div>');
    (p+num) = $('<p class="">'+state.news[i].title+'</p>');
    (columna+num).append(contenedor+num);
    (contenedor+num).append(p+num);
    num++;
  }

  // const col51 = $('<div class="col-md-3 col-xs-12 "></div>');
  // row5.append(col51);
  // const img51 = $('<img src="assets/img/'+state.news[9].img+'" class="img-responsive" alt="">');
  // col51.append(img51);
  // const div51 = $('<div class="col-md-3 col-xs-12 contentUltimo1"></div>');
  // const p51 = $('<p class="">'+state.news[9].title+'</p>');
  // col51.append(div51);
  // div51.append(p51);
  //
  // const col61 = $('<div class="col-md-3 col-xs-12 "></div>');
  // row5.append(col61);
  // const img61 = $('<img src="assets/img/'+state.news[10].img+'" class="img-responsive" alt="">');
  // col61.append(img61);
  // const div61 = $('<div class="col-md-3 col-xs-12 contentUltimo1"></div>');
  // const p61 = $('<p class="">'+state.news[10].title+'</p>');
  // col61.append(div61);
  // div61.append(p61);
  //
  // const col71 = $('<div class="col-md-3 col-xs-12 "></div>');
  // row5.append(col71);
  // const img71 = $('<img src="assets/img/'+state.news[11].img+'" class="img-responsive" alt="">');
  // col71.append(img71);
  // const div71 = $('<div class="col-md-3 col-xs-12 contentUltimo1"></div>');
  // const p71 = $('<p class="">'+state.news[11].title+'</p>');
  // col71.append(div71);
  // div71.append(p71);
  //
  // const col81 = $('<div class="col-md-3 col-xs-12 "></div>');
  // row5.append(col81);
  // const img81 = $('<img src="assets/img/'+state.news[12].img+'" class="img-responsive" alt="">');
  // col81.append(img81);
  // const div81 = $('<div class="col-md-3 col-xs-12 contentUltimo1"></div>');
  // const p81 = $('<p class="">'+state.news[12].title+'</p>');
  // col81.append(div81);
  // div81.append(p81);

return container;
}
