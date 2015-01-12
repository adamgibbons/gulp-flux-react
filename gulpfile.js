var gulp = require('gulp');
var clean = require('gulp-clean');
var webpack = require('gulp-webpack');

var DEST = 'dist/';

gulp.task('clean', function() {
  return gulp.src(DEST).pipe(clean());
});

gulp.task('pack-scripts', function() {
  var webpackOptions = require('./webpack.config.js');

  return gulp.src('./public/index.js')
    .pipe(webpack(webpackOptions))
    .pipe(gulp.dest(DEST));
});

gulp.task('copy', function() {
  var targetFiles = ['public/index.html'];
  return gulp.src(targetFiles)
    .pipe(gulp.dest(DEST));
});

gulp.task('build', ['pack-scripts', 'copy']);

gulp.task('default', ['build']); 