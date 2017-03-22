(function () {

  const gulp = require('gulp');
  const del = require('del');
  const uglify = require('gulp-uglify');
  const rename = require('gulp-rename');
  const size = require('gulp-size');

  gulp.task('clean', function () {
    return del('dist');
  });

  gulp.task('build', ['clean'], function () {
    return gulp.src('src/*.js')
      .pipe(gulp.dest('dist'))
      .pipe(size({title: '[ default size ]:'}))
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(gulp.dest('dist'))
      .pipe(size({title: '[ minimize size ]:'}));
  });

  gulp.task('default', ['build']);

}());
