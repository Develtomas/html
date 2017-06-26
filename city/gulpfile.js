const gulp = require('gulp');
const server = require('gulp-server-livereload');
const autoprefixer = require('gulp-autoprefixer');
const less = require('gulp-less');

gulp.task('less', function() {
  return gulp.src('./src/less/*.less')
    .pipe(less())
	  .pipe(autoprefixer({
	  	browsers: ['last 2 versions'],
          cascade: false
      }))
	  .pipe(gulp.dest('./distr/css'));
});

gulp.task('js', function () {
  return gulp.src('./src/js/*.js')
      .pipe(gulp.dest('./distr/js'))
});

gulp.task('watch', function() {
	gulp.watch('./src/less/*.less', ['less']);
  gulp.watch('./src/js/*.js', ['js']);
})

gulp.task('default', ['watch'], function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
	    defaultFile: 'index.html',
      directoryListing: false,
      open: false
    }));
});