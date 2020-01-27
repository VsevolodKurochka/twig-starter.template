import gulp from 'gulp';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import csscomb 	from 'gulp-csscomb';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS	from 'gulp-clean-css';
import rename from 'gulp-rename';
import {assetsSrc, assetsBuild} from './folders';
import {reload} from './browserSync';

const sassWatch = `${assetsSrc}/sass/**/*.+(sass|scss)`;
const cssWatch = `${assetsSrc}/sass/**/*.css`;

gulp.task('sass', () => gulp.src(sassWatch)
	.pipe(sassGlob())
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(csscomb())
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(gulp.dest(`${assetsBuild}/css`))
);
gulp.task('sass:watch', () => gulp.watch(sassWatch, gulp.series('sass', reload)));

gulp.task('css', () => gulp.src(cssWatch).pipe(gulp.dest(`${assetsBuild}/css`)));
gulp.task('css:watch', () => gulp.watch(cssWatch, gulp.series('css', reload)));