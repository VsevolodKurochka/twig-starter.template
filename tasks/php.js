/**
 * PHP
 * -----------------------------------------------------------------------------
 */
import gulp 						from 'gulp';
import folders					from './folders';
import procss 					from 'gulp-progressive-css';

import {reload} from './browserSync';

gulp.task('php', () =>
	gulp.src('app/*.php')
		.pipe(procss({ base: 'app/assets/build/css' }))
		.pipe(gulp.dest('app'))
);

gulp.task('php:watch', () => {
	gulp.watch(`${folders.app}/*.php`, gulp.series('php', reload));
});