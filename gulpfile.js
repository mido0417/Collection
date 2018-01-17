// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('scss/*.scss')
        .pipe(sass())
        // .pipe(gulp.dest(function (f) {
        //     return f.base;
        // }))
        .pipe(gulp.dest('css')); // sass 編譯完成後的匯出資料夾
});

gulp.task('default', ['sass'], function () {
    gulp.watch('scss/*.scss', ['sass']);
})