var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('scripts', function() {
    return gulp.src(['app/**/*.js', 
                     '!app/bower_components/**/*.js',
                     '!app/**/*test.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});