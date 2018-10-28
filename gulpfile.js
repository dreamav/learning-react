var gulp = require('gulp'),
	babel = require('gulp-babel');

gulp.task("transpile", function(){
	return gulp.src('./ES6-intro/Clock/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./ES6-intro/Clock/js/'))
})