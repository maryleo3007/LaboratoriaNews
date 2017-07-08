var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var concat = require("gulp-concat");
var merge = require('merge-stream');
var uglify = require("gulp-uglify");
var pump = require("pump"); // solucionar error de uglify
var util = require("gulp-util");
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

var config = {
  source: './src/',
  dist: './public/',
  static: '/node_modules/'
};
var paths = {
  assets: 'assets/',
  html: '**/*.html',
  sass: 'scss/**/*.scss',
  mainSass: 'scss/*.scss',
  mainJs: 'js/',
  img: 'img/*.*',
  font: 'font/*.*'
};
var sources = {
  assets:config.source + paths.assets,
  html:config.source + paths.html,
  sass:paths.assets + paths.sass,
  rootSass:config.source + paths.assets + paths.mainSass,
  rootJs: config.source + paths.assets + paths.mainJs,
  rootImg: config.source + paths.assets + paths.img,
  rootFont: config.source + paths.assets + paths.font
};
gulp.task('html',()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task("sass",function () {
    gulp.src(sources.rootSass)
      .pipe(sass({
        outputStyle:"compressed",
        includePaths: "node_modules/bootstrap-sass/assets/main"
      }).on("error",sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest(config.dist + paths.assets +"css"))

});

gulp.task("js",function () {
  var js = gulp.src([sources.rootJs+'get-news.js',
                    sources.rootJs+'nav-header.js',
                    sources.rootJs+'news-date.js',
                    sources.rootJs+'news-body.js',
                    sources.rootJs+'news-mundo.js',
                    sources.rootJs+'news-detail.js',
                    sources.rootJs+'app.js'])
      .pipe(browserify())
      .pipe(concat("bundle.js"))
      //.on('error', function (err) { util.log(util.colors.red('[Error]'), err.toString()); })
      .pipe(gulp.dest(config.dist + paths.assets +"js"))
      //.pipe(notify('gulp js terminada'));
  var bootstrap = gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
                        .pipe(gulp.dest(config.dist + paths.assets + 'vendor'));
      return merge(js, bootstrap);
});

gulp.task("img", function(){
  gulp.src(sources.rootImg).pipe(gulp.dest(config.dist + paths.assets + 'img'));
});

gulp.task("font", function(){
  gulp.src(sources.rootFont).pipe(gulp.dest(config.dist + paths.assets + 'font'));
});

gulp.task("sass-watch",["sass"],function(done){
  browserSync.reload();
  done();
});

gulp.task("js-watch",["js"],function(done){
  browserSync.reload();
  done();
});

gulp.task("html-watch",["html"],function(done){
  browserSync.reload();
  done();
});

gulp.task("serve", function () {
  browserSync.init({
    server:{
      baseDir:config.dist
    }
  });
  gulp.watch(sources.html,['html-watch']);
  gulp.watch("./src/assets/scss/*.scss",['sass-watch']);
  gulp.watch("./src/assets/js/*.js",['js-watch']);
});
