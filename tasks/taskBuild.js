import gulp from 'gulp';
import {app, build, assetsBuild} from './folders';

gulp.task('assets:build', () =>
    gulp.src(`${assetsBuild}/**/*`).pipe(gulp.dest(`${build}/assets/build`))
);

gulp.task('vendor:build', () =>
    gulp.src(`${app}/vendor/**/*`).pipe(gulp.dest(`${build}/vendor`))
);

gulp.task('views:build', () =>
    gulp.src(`${app}/views/**/*`).pipe(gulp.dest(`${build}/views`))
);

gulp.task('php:build', () =>
    gulp.src(`${app}/*.php`).pipe(gulp.dest(`${build}`))
);