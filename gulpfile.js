var gulp = require('gulp') ; 
var rename = require('gulp-rename') ; 
var less = require('gulp-less');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
function css(done){
  gulp.src("./less/*.less")
  .pipe(less({ 
    errLogToConsole:true,
    outputStyle:'compressed'
  }))
  .on('error',console.error.bind(console))
  .pipe(autoprefixer({overrideBrowserslist: ['last 2 versions'],cascade: false}))
  .pipe(gulp.dest('./css/'))
  .pipe(cssmin().on('error', function(err) {console.log('error-css-min',err)}))
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./css-min/'))

  gulp.src("./scss/*.scss")
  .pipe(sass({
    errLogToConsole:true,
    outputStyle:'compressed'
  }))
  .on('error',console.error.bind(console))
  .pipe(cssmin().on('error', function(err) {console.log('error-css-min',err)}))
  .pipe(gulp.dest('./css/'))
  .pipe(cssmin().on('error', function(err) {console.log('error-css-min',err)}))
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./css-min/'))
    done();
}

function wcss (){
  gulp.watch("./less/*.less",css);	
}; 
gulp.task(css) ; 
gulp.task(wcss) ; 

