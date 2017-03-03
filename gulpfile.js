(function () {

  const gulp = require('gulp');
  const del = require('del');
  const uglify = require('gulp-uglify');
  const rename = require('gulp-rename');

  gulp.task('clean', function () {
    return del('dist');
  });

  gulp.task('build', function () {
    return gulp.src('src/*.js')
      .pipe(gulp.dest('dist'));
  });

  gulp.task('default', ['clean', 'build']);

}());
