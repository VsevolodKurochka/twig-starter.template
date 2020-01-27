import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import {assetsSrc, assetsBuild} from './folders';

const watch = `${assetsSrc}/img/**/*`;
const options = {
    interlaced: true,
    progressive: true,
    optimizationLevel: 5,
    svgoPlugins: [{removeViewBox: true}]
};

gulp.task('image', () => gulp.src(watch).pipe(imagemin(options)).pipe(gulp.dest(`${assetsBuild}/img`)));
gulp.task('image:watch', () => gulp.watch(watch, gulp.series('image')));