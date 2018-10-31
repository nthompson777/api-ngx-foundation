var gulp = require('gulp'),

// Include Our Plugins
    // debug = require('gulp-debug'),  // uncomment plugin when debugging
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('autoprefixer'),
    stylelint = require('stylelint'),
    syntax_scss = require('postcss-scss'),
    reporter = require('postcss-reporter'),
    postcss = require('gulp-postcss'),
    flatten = require('gulp-flatten'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();

// Sass, HTML, Js Files - the folder, files to look for, and destination
var paths = {
  styles: {
    src: './scss',
    files: './node_modules/ngx-foundation/dist/scss/ngx-foundation.scss',
    minify: './node_modules/ngx-foundation/dist/css/ngx-foundation.css',
    // BrowserSync
    syncFiles: '.',  
    // directories to exclude (from compiling, etc.)
    exclude: ['!./Content/global/scss_converted/**/*', '!./Components/**/*'],
    dest: './node_modules/ngx-foundation/dist/css'
  }, 
};

// Watch for changes to Sass files on all Pages and produce Sourcemap
gulp.task('scss', function () {
  gulp.watch(paths.styles.files)
  .on('change', function () {
    // Gets all files ending with .scss in ngx-foundation and compiles
    return gulp.src(paths.styles.files) 
      .pipe(sourcemaps.init())
        // Keep the outputStyle as 'nested' otherwise line #'s get thrown off in sourcemaps debugging
        .pipe(sass({ outputStyle: 'nested', precision: 6 }).on('error', sass.logError))  // add '.' for ext
        .pipe(sourcemaps.write())  
        .pipe(gulp.dest(paths.styles.dest))
    // Output to same destination as src
    /* .pipe(gulp.dest(function (file) {
      return file.base;
    })) */
    .pipe(browserSync.stream());
  });
});

// Run PostCSS, strip out the sourcemap, then minify 
gulp.task('minify', function () {
  gulp.watch(paths.styles.minify)
  .on('change', function (file) {
    var destPath = file.path.replace('ngx-foundation.css', '.'),
        // PostCSS Plugins for Production CSS (PostCSS tasks must be AFTER the Sass task)
        processorsProd = [
          autoprefixer({ browsers: ['last 2 versions', 'not ie < 11'] }),
        ];

    gulp.src(file.path)
      .pipe(postcss(processorsProd))
      .pipe(rename({ suffix: '.min' }))
      .pipe(cleanCSS({ debug: true, rebase: false }, function (details) {
        console.log('---- Minify CSS for Prod ----');
        console.log(file.path + ': ');
        console.log(details.stats.originalSize + ' original size' + ' --- '
        + details.stats.minifiedSize + ' minified size.');  //details.name + ': ' +
      }))
    .pipe(gulp.dest(destPath));
  });
});

// Main Task for compiling, minifying - simply run 'gulp' OR 'yarn start' via CLI
gulp.task('default', ['scss', 'minify']);
  

// Stylelint Task for analyzing Sass files by running through Stylelint & produces report
gulp.task('analyze-scss', function () {
  return gulp.src(paths.styles.files)
    .pipe(postcss([
      stylelint(),
      reporter()],
      {syntax: syntax_scss}
    ));
});


// SAVE the Commented Out Task Directly Below!!!! Autoprefixer Check -
// Uncomment & run gulp via CLI to see the browser list, rules, selectors, & properties covered
// var info = autoprefixer({ browsers: ['last 3 versions', 'not ie < 11'] }).info();
// console.log(info);


// ---------------------------------------------------------------------------
// Compile and Minify a One-off Sass file (i.e.- Font-Icons-Fallback, etc.) - Run task seperately/independently!!!
gulp.task('compile-file', function (file) {
  var fileWatch = './Content/Css/font-icons-fallback.scss';  // change file name here
  gulp.watch(fileWatch);
    return gulp.src(fileWatch) // Gets all files ending with .scss in app/scss
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(rename({ suffix: '.min' }))
      .pipe(cleanCSS({ debug: true, rebase: false }, function (details) {
        console.log('---- Compile & Minify CSS for Prod ----');
        console.log(file.path + ': ');
        console.log(details.stats.originalSize + ' original size' + ' --- '
        + details.stats.minifiedSize + ' minified size.');
      }))
    .pipe(gulp.dest('./Content/Css/'));
});