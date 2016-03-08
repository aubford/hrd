var gulp = require('gulp')
var less = require('gulp-less')


gulp.task('compile-less', function(){
  gulp.src('./css/main.less')
    .pipe(less())
    .pipe(gulp.dest('./css/'))
})

gulp.task('watch-less', function(){
  gulp.watch('./css/*.less', ['compile-less'])
})

gulp.task('default', ['compile-less', 'watch-less'])
