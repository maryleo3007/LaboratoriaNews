'use strict'; //obliga a escribir es6

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>'); // dentro este div vaos a devolver todos los demas elements como lo hace react

  wrapper.append(Header());
  wrapper.append(NewBody());
  wrapper.append(ContentBody());
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
