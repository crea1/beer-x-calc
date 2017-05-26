var gulp = require('gulp');

var dist = './dist'

gulp.task('html', function(){
  return gulp.src('./*.html')
    .pipe(gulp.dest(dist))
});

gulp.task('css', function() {
  return gulp.src('./css/*.css')
    .pipe(gulp.dest(dist + '/css'))
});

gulp.task('js', function() {
  return gulp.src('./js/*.js')
    .pipe(gulp.dest(dist + '/js'))
});

gulp.task('img', function() {
  return gulp.src('./img/*')
    .pipe(gulp.dest(dist + '/img'))
});

gulp.task('vendor', function() {
  return gulp.src('./vendor/*')
    .pipe(gulp.dest(dist + '/vendor'))
})


gulp.task('default', ['html', 'css', 'js', 'img', 'vendor']);
