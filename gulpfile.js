var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      }
    });

    gulp.watch('cnapp/*.html').on('change', browserSync.reload);
});

gulp.task('server', function() {
  
  nodemon({
	script: './nodejs-jwt-authentication-sample/server.js',

	ext: 'js'
	}).on('restart', () => {
	gulp.src('server.js')
	 .pipe(notify('Running the start tasks and stuff'));
	});
});
