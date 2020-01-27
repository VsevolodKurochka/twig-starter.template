import gulp from 'gulp';
import {assetsSrc, assetsBuild} from './folders';
import {reload} from './browserSync';

const watch = `${assetsSrc}/fonts/**/*`;

gulp.task('fonts', () => gulp.src(watch).pipe(gulp.dest(`${assetsBuild}/fonts`)));
gulp.task('fonts:watch', () => gulp.watch(watch, gulp.series('fonts', reload)));