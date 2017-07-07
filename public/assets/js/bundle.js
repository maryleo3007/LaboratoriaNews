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

// },{}]},{},[1])
// (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  container.append(divColla);
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

// },{}]},{},[1])
// (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//
// },{}]},{},[1])
// (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//
// },{}]},{},[1])
// (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'; //obliga a escribir es6

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>'); // dentro este div vaos a devolver todos los demas elements como lo hace react

  wrapper.append(Header());
  // if (state.selectMovie == null) {
  //   wrapper.append(MovieGrid(_ => {
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
    data = state.news;
    const root = $("#root");
    render(root,data);
  });
});

},{}]},{},[1])
