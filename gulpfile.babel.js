/**
 * Created by bhavesh_bhatkar on 11/10/16.
 */

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    console.log(' In Gulp Default Task ...');
    return gulp.src('src/*.js')
                .pipe(babel())
                .pipe(gulp.dest('dist'));
});
