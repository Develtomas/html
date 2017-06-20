const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  return gulp.src('./less/*.less')
  	.pipe(less())
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch('./less/*.less', ['default'])
})