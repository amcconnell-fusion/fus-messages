var gulp = require('gulp');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');

var src = ['./src/**/*.module.js', './src/**/*.js'];

var bowerFiles = [
  './bower_components/angular/angular.js',
  './bower_components/angular-messages/angular-messages.js',
  './bower_components/angular-mocks/angular-mocks.js'];

var testFiles = [].concat(bowerFiles, src);

gulp.task('jshint', function () {
  return gulp.src(src)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish', {verbose: true}));

});

gulp.task('test', function () {

  return gulp.src(testFiles)
      .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
      }))
      .on('error', function (err) {
        throw err;
      });
});

gulp.task('default', function () {
  gulp.src(testFiles)
      .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'watch'
      }));
});
