var gulp = require('gulp'),
	babel = require('gulp-babel');

gulp.task("transpile", function(){
	return gulp.src('./02-javaScript-new-syntax/Clock/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./02-javaScript-new-syntax/Clock/js/'))
})