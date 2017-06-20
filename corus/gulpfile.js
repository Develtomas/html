const gulp = require('gulp');
const server = require('gulp-server-livereload');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  return gulp.src('./src/*.css')
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch('./src/*.css', ['default'])
})

gulp.task('serv', ['watch'], function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
	  defaultFile: 'index.html',
      directoryListing: false,
      open: false
    }));
});