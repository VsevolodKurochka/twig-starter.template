import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import {assetsSrc} from './folders';
import {reload} from './browserSync';

const watch = `${assetsSrc}/js/babel/*.babel.js`;

gulp.task('babel', () =>
	gulp.src(watch)
		.pipe(babel())
		.on('error', notify.onError({
			title: 'Babel Error',
			message: '<%= error.message %>'
		}))
		.pipe(uglify())
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(gulp.dest(`${assetsSrc}/js/libs`))
);

gulp.task('babel:watch', () =>
	gulp.watch(watch, gulp.series('babel', reload))
);