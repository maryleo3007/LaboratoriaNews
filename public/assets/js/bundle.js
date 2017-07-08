(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const getNews = (callback) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',_ => {
    if (xhr.status != 200) callback(new Error("Error al obtener datos"));
    callback(null,xhr.response);
  });

  xhr.open('GET','api/news');
  xhr.responseType = 'json';
  xhr.send();
}

const getNew = (id,callback) => {
  $.get('api/news'+id,(data) => {
    if (data.status != 200) callback(new Error("Error al obtener de una noticia"));
    callback(null,data);
  })
}

 'use strict';

const Header = () => {

  const header = $('<header></header>');
  const nav = $('<nav class="navbar navbar-fixed-top"></nav>');
  const container  = $('<div class="container-fluid"></div>');
  const navHeader  = $('<div class="navbar-header"></div>');
  const btntoggle = $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"></button>');
  const a = $('<a class="navbar-brand hidden-xs" href="#"></a>');

  header.append(nav);
  nav.append(container);
  container.append(navHeader);
  navHeader.append(btntoggle);
  navHeader.append(a);

  const span1 = $('<span class="sr-only">Toggle navigation</span>');
  const span2 = $('<span class="glyphicon glyphicon-align-justify" ></span>');
  const img = $('<img src="assets/img/logoicon.png" style="height:40px;" alt="">');

  btntoggle.append(span1);
  btntoggle.append(span2);
  btntoggle.append(img);

  const abrand = $('<span class="glyphicon glyphicon-align-justify">SECTIONS</span>');
  a.append(abrand);

  const divColla = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
  const ul1 = $('<ul class="nav navbar-nav hidden-xs"></ul>');
  const li1 = $('<li class="active"></li>');
  const span3 = $('<span class="glyphicon glyphicon-search">SEARCH</span>');
  const hr  = $('<hr>');
  container.append(divColla);
  container.append(hr);
  divColla.append(ul1);
  ul1.append(li1);
  li1.append(span3);

  const ul2 = $('<ul class="nav navbar-nav navbar-right hidden-xs"></ul>');
  const li2 = $('<li></li>');
  const img1 = $('<img src="assets/img/fb.png" alt="">');
  const li3 = $('<li></li>');
  const img2 = $('<img src="assets/img/tw.png" alt="">');
  const li4 = $('<li></li>');
  const img3 = $('<img src="assets/img/in.png" alt="">');

  divColla.append(ul2);
  ul2.append(li2);
  ul2.append(li3);
  ul2.append(li4);
  li2.append(img1);
  li3.append(img2);
  li4.append(img3);
  const ul3 = $('<ul class="hidden-md hidden-lg"></ul>');
  const li5 = $('<li>Lo ultimo</li>');
  const li6 = $('<li>Opinión</li>');
  const li7 = $('<li>Cultura</li>');
  const li8 = $('<li>Peru</li>');
  const li9 = $('<li>Tecnologia</li>');
  const li10 = $('<li>Mundo</li>');
  const li11 = $('<li>Economia</li>');
  const li12 = $('<li>Lyfestyle</li>');
  const li13 = $('<li>Deporte</li>');
  divColla.append(ul3);
  ul3.append(li5,li6,li7,li8,li9,li10,li11,li12,li13);

  return header;
}

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

  // let num = 51;
  // for (var i = 9; i < 13; i++) {
  //   const col+num = $('<div class="col-md-3 col-xs-12 "></div>');
  //   row5.append(col51);
  //   const img+num = $('<img src="assets/img/'+state.news[i].img+'" class="img-responsive" alt="">');
  //   col51.append(img51);
  //   const div51 = $('<div class="col-md-3 col-xs-12 contentUltimo1"></div>');
  //   const p51 = $('<p class="">'+state.news[9].title+'</p>');
  //   col51.append(div51);
  //   div51.append(p51);
  //   num++;
  // }

  const col51 = $('<div class="col-md-3 col-xs-12 "></div>');
  row5.append(col51);
  const img51 = $('<img src="assets/img/'+state.news[9].img+'" class="img-responsive" alt="">');
  col51.append(img51);
  const div51 = $('<div class="col-md-3 col-xs-12 contentUltimo1"></div>');
  const p51 = $('<p class="">'+state.news[9].title+'</p>');
  col51.append(div51);
  div51.append(p51);

  const col61 = $('<div class="col-md-3 col-xs-12 "></div>');
  row5.append(col61);
  const img61 = $('<img src="assets/img/'+state.news[10].img+'" class="img-responsive" alt="">');
  col61.append(img61);
  const div61 = $('<div class="col-md-3 col-xs-12 contentUltimo1"></div>');
  const p61 = $('<p class="">'+state.news[10].title+'</p>');
  col61.append(div61);
  div61.append(p61);

  const col71 = $('<div class="col-md-3 col-xs-12 "></div>');
  row5.append(col71);
  const img71 = $('<img src="assets/img/'+state.news[11].img+'" class="img-responsive" alt="">');
  col71.append(img71);
  const div71 = $('<div class="col-md-3 col-xs-12 contentUltimo1"></div>');
  const p71 = $('<p class="">'+state.news[11].title+'</p>');
  col71.append(div71);
  div71.append(p71);

  const col81 = $('<div class="col-md-3 col-xs-12 "></div>');
  row5.append(col81);
  const img81 = $('<img src="assets/img/'+state.news[12].img+'" class="img-responsive" alt="">');
  col81.append(img81);
  const div81 = $('<div class="col-md-3 col-xs-12 contentUltimo1"></div>');
  const p81 = $('<p class="">'+state.news[12].title+'</p>');
  col81.append(div81);
  div81.append(p81);

return container;
}


 'use strict'; //obliga a escribir es6

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>'); // dentro este div vaos a devolver todos los demas elements como lo hace react

  wrapper.append(Header());
  wrapper.append(NewBody());
  wrapper.append(ContentBody());
  wrapper.append(NewsMundo());
  // if (state.selectMovie == null) {
  //   wrapper.append(NewBody(_ => {
  //       render(root);
  //   }));
  //
  // }
  // else {
  //   wrapper.append(MovieDetails(_ => {
  //     render(root);
  //   }));
  // }
  root.append(wrapper);
};
//AQUI CREAMOS LOS DIFERENTES ELEMENTOS
const state = {
  news:null,
  selectNew: null
}
$( _ => {
  getNews((err,data) => {
    if (err) console.log(err);
    console.log(data);
    state.news = data;
    const root = $("#root");
    render(root,data);
  });
});

},{}]},{},[1])
