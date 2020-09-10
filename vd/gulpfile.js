var gulp = require("gulp");
var rename = require("gulp-rename");
var less = require("gulp-less");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var cssmin = require("gulp-cssmin");
var autoprefixer = require("gulp-autoprefixer");
var live = require('gulp-livereload');
var connect = require('gulp-connect');

function vd(done) {
    console.log('test');
    gulp
    .src('./vd/less/*')
    .pipe(
        autoprefixer({
            overrideBrowserslist: ["last 2 versions"],
            cascade: false,
        })
    ).on("error", console.error.bind(console))
    .pipe(gulp.dest("./css/less"));
    console.log('done LESS');
    gulp
        .src('./less/*')
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
        .pipe(gulp.dest("./css/"));
    console.log('done VD');
    done();
}

function con() {
    connect.server({
        livereload: true
    });
}

function wvd() {
    con();
    gulp.watch("./less/*", vd).on('change', live.changed);
}


gulp.task(vd);
gulp.task(wvd);
gulp.task(con);









