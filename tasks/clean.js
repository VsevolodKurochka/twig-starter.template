import gulp from 'gulp';
import {assetsBuild} from './folders';
import del from 'del';

const options = {force: true};

gulp.task('clean', () => {
    del([`${assetsBuild}/css`], options);
    del([`${assetsBuild}/fonts`], options);
    del([`${assetsBuild}/img`], options);
    del([`${assetsBuild}/js`], options);
});