import gulp from 'gulp';
import {assetsSrc, assetsBuild} from './folders';
import {reload} from './browserSync';

const watch = `${assetsSrc}/js/**/*`;

gulp.task('concat', () => gulp.src(watch).pipe(gulp.dest(`${assetsBuild}/js`)));
gulp.task('concat:watch', () => gulp.watch(watch, gulp.series('concat', reload)));