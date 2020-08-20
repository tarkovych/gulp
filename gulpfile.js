var gulp = require("gulp");
var rename = require("gulp-rename");
var less = require("gulp-less");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var cssmin = require("gulp-cssmin");
var autoprefixer = require("gulp-autoprefixer");
// function css(done){
//   gulp.src("./less/*.less")
//   .pipe(less({
//     errLogToConsole:true,
//     outputStyle:'compressed'
//   }))
//   .on('error',console.error.bind(console))
//   .pipe(autoprefixer({overrideBrowserslist: ['last 2 versions'],cascade: false}))
//   .pipe(gulp.dest('./css/'))
//   .pipe(cssmin().on('error', function(err) {console.log('error-css-min',err)}))
//   .pipe(rename({suffix:'.min'}))
//   .pipe(gulp.dest('./css-min/'))

//   gulp.src("./scss/*.scss")
//   .pipe(sass({
//     errLogToConsole:true,
//     outputStyle:'compressed'
//   }))
//   .on('error',console.error.bind(console))
//   .pipe(cssmin().on('error', function(err) {console.log('error-css-min',err)}))
//   .pipe(gulp.dest('./css/'))
//   .pipe(cssmin().on('error', function(err) {console.log('error-css-min',err)}))
//   .pipe(rename({suffix:'.min'}))
//   .pipe(gulp.dest('./css-min/'))
//     done();
// }

// function aqua (){
//   gulp.watch("./less/*.less",css);
// };

// function wcss (){
//   gulp.watch("./less/*.less",css);
// };

// gulp.task(css) ;
// gulp.task(wcss);

class Gulp {
  constructor(path_less, path_css) {
    this.path_less = path_less;
    this.path_css = path_css;
  }
  less(done) {
    console.log(this.path_less);
    gulp
      .src(this.path_less)
      .pipe(
        less({
          errLogToConsole: true,
          outputStyle: "compressed",
        })
      )
      .on("error", console.error.bind(console))
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 2 versions"],
          cascade: false,
        })
      )
      .pipe(gulp.dest(this.path_css));
      done();
  }
  watch(task) {
    gulp.watch(this.path_less,task);
  }
}



//////////////////////////////
let new_modal = new Gulp(
  "/Users/mac/Desktop/gulp/aqua/modal.less",
  "/Users/mac/www/aqua/skin/frontend/ultimo/default/css/infortis/cloud-zoom/"
);
modal = (done) => new_modal.less(done);
wmodal = () => new_modal.watch(modal);

gulp.task(modal);
gulp.task(wmodal);
///////////////////////////////
let new_home = new Gulp(
  "/Users/mac/Desktop/gulp/aqua/home_page.less",
  "/Users/mac/www/aqua/skin/frontend/ultimo/default/css/module/"
);
home = (done) => new_home.less(done);
whome = () => new_home.watch(home);

gulp.task(home);
gulp.task(whome);

//////////////////////////////
let new_cart = new Gulp(
  "/Users/mac/Desktop/gulp/aqua/override-modules.less",
  "/Users/mac/www/aqua/skin/frontend/ultimo/default/css/"
);
cart = (done) => new_cart.less(done);
wcart = () => new_cart.watch(cart);

 gulp.task(cart);
 gulp.task(wcart);



