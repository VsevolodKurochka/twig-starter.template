/**
 * Concat
 * -----------------------------------------------------------------------------
 */

import gulp 						from 'gulp';
import concat 					from 'gulp-concat';
import uglify 					from 'gulp-uglify';
import folders					from './folders';
import {reload} 				from './browserSync';

const concatSrc = [
	`${folders.src}/js/libs/jquery.min.js`,
	`${folders.src}/js/libs/smooth-scroll.min.js`,
	`${folders.src}/js/libs/jquery.main.babel.min.js`,
	`${folders.src}/js/libs/vanilla.main.babel.min.js`
];

// Task `scripts`
gulp.task('concat', () =>
	gulp.src(concatSrc)
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(`${folders.build}/js`))
);