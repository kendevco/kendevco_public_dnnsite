var
  gulp  = require('gulp'),
  watch = require('./semantic/tasks/watch'),
  build = require('./semantic/tasks/build'),
  
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps')
;

var dest = './dist';


var jsFiles = [
  './semantic/dist/semantic.min.js',
  './node_modules/flexslider/2.6.1/jquery.flexslider.js',
  './node_modules/sidr/dist/jquery.sidr.js',
  './js/*.js',
];

var cssFiles = [
  './node_modules/flexslider/flexslider.css',
  './node_modules/sidr/dist/stylesheets/jquery.sidr.bare.css',
];


// import task with a custom task name
gulp.task('build_ui', build);
gulp.task('watch', watch);

gulp.task('minify_js', function () {
  return gulp.src(jsFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(dest))
    .pipe(rename(`scripts.min.js`))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest));
});

gulp.task('minify_css', function () {
  return gulp.src(cssFiles)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(dest));
});

gulp.task('watch_js', ['minify_js'], function () {
  gulp.watch('./js/*.js', ['minify_js']);
});



gulp.task('build', ['build_ui', 'minify_css', 'minify_js']);

gulp.task('default', ['minify_css', 'watch_js', 'watch']);
