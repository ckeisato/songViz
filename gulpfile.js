var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');

gulp.task('clean', () => gulp.src('./dist/**/**/*', {read: false})
	.pipe(clean())
);

gulp.task('html', () => gulp.src('src/*.html')
	.pipe(htmlmin({
		collapseWhitespace: true
	}))
	.pipe(gulp.dest('./dist'))
);

gulp.task('css', () => gulp.src('src/style.css')
	// .pipe(cssmin())
	.pipe(gulp.dest('./dist'))
);

gulp.task('js', () => gulp.src('src/*.js').pipe(gulp.dest('./dist')));

gulp.task('serve', () => {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	});

	gulp.watch('src/*.html', gulp.series('html'));
	gulp.watch('src/*.js', gulp.series('js'));
	gulp.watch('src/*.css',gulp.series('css'));
	gulp.watch('src/*').on('change', browserSync.reload);
});

gulp.task('build', gulp.series(['html', 'js', 'css']));

gulp.task('default', gulp.series(['build', 'serve']));

