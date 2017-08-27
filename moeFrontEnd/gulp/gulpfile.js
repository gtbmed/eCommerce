var gulp           = require('gulp'), // Gulp
    sass           = require('gulp-sass'), // SASS,
    autoprefixer   = require('gulp-autoprefixer'); // Add the desired vendor prefixes and remove unnecessary in SASS-files


//
// SASS
//

// Unify Main
gulp.task('sass', function() {
  return gulp.src('./html/assets/include/scss/**/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(gulp.dest('./html/assets/css/'))
});

// E-commerce
gulp.task('sass-shop', function() {
  return gulp.src('./html/e-commerce/assets/scss/**/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(gulp.dest('./html/e-commerce/assets/css/'))
});

// Blog & Magazine
gulp.task('sass-blog', function() {
  return gulp.src('./html/blog-magazine/classic/assets/scss/**/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(gulp.dest('./html/blog-magazine/classic/assets/css/'))
});

// One Page
gulp.task('sass-op', function() {
  return gulp.src('./html/one-pages/accounting/assets/scss/**/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(gulp.dest('./html/one-pages/accounting/assets/css/'))
});

// Dark Theme
gulp.task('sass-dt', function() {
  return gulp.src('./html/examples/dark-theme/assets/scss/**/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(gulp.dest('./html/examples/dark-theme/assets/css/'))
});


//
// Watch
//

gulp.task('watch', function() {
  gulp.watch('./html/assets/include/scss/**/*.scss', ['sass']);
});


//
// Default
//

gulp.task('default', ['watch']);