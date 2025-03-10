const gulp = require('gulp'); //importando o gulp
const sass = require('gulp-sass')(require('sass')); //importando o compilador sass
const imagemin = require('gulp-imagemin'); //importando o pluggin que instalamos na versão @7.1.0
const uglify = require('gulp-uglify');

            // *** Lembrando que para minificar as imagens com o imagemin, é preciso instalar o gulp na versão: 4.2.0 (npm install --save-dev gulp@4.2.0) ***

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}



exports.default = gulp.parallel(styles, images, scripts); //pedindo para função principal execultar o styles e images

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}