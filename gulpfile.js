var gulp = require('gulp'),
    livereload = require('gulp-livereload');
gulp.task('default', function () {
  console.log('gulp is start');
});
gulp.task('write', function () {
  gulp.src('mongo.js')
    .pipe(gulp.dest('database'));
});
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['public/**/*.*', '!public/less/*.less'], function (e) {
    livereload.reload();
  });
  gulp.watch(['views/**/*.*'], function (e) {
    livereload.reload();
  });
  gulp.watch(['routes/**/*.*'], function (e) {
    livereload.reload();
  });
});