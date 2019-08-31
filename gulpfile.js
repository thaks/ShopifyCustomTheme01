const gulp = require('gulp');
const sass = require('gulp-sass');
const bsync = require('browser-sync');

function style() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(bsync.stream());
}
function watch() {
    bsync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', bsync.reload);
    gulp.watch('./js/*.js').on('change', bsync.reload);

}
exports.style = style;
exports.watch = watch;