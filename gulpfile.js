// 只要在終端機使用gulp 函數名稱，就可以執行該函數

const gulp = require('gulp'); //引入gulp套件
const sass = require('gulp-sass'); //引入sass轉譯套件
const cleanCSS = require('gulp-clean-css'); //引入gulp-clean-css套件
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const clean = require('gulp-clean');


//Copy 所有js img到dist
gulp.task('copyjs', function() {
    return gulp.src(['./js/*.js', './js/**/*.js']).pipe(gulp.dest('./dist/js'));
})
gulp.task('copyimg', function() {
    return gulp.src('./img/**/*').pipe(gulp.dest('./dist/img'));
})

// 將main.scss導入dist的css資料夾
gulp.task('sass', function() {
    return gulp.src('./sass/*.scss', './backstage/sass/*.scss') //來源
        .pipe(sass().on('error', sass.logError)) //Sass轉譯 -> 一個pipe是一個流程
        .pipe(cleanCSS({
            compatibility: 'ie8' //轉譯成相容ie8的CSS
        }))
        .pipe(gulp.dest('./dist/css')); //目的地
})


//將html搬進dist
gulp.task('fileinclude', function() {
    return gulp.src('*.html') //來源
        .pipe(fileinclude({
            prefix: '@@', //前綴符號（帶入時使用）
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist')); //目的地
});

//後台搬進dist

gulp.task('bghtml', function() {
    return gulp.src('./backstage/html/*.html') //來源
        .pipe(fileinclude({
            prefix: '@@', //前綴符號（帶入時使用）
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist/backstage')); //目的地
});


gulp.task('bgimg', function() {
    return gulp.src(['./backstage/img/**/*', './backstage/icons/*']).pipe(gulp.dest('./dist/backstage/img'));
})

gulp.task('bgsass', function() {
        return gulp.src('./backstage/sass/*.scss') //來源
            .pipe(sass().on('error', sass.logError)) //Sass轉譯 -> 一個pipe是一個流程
            .pipe(cleanCSS({
                compatibility: 'ie8' //轉譯成相容ie8的CSS
            }))
            .pipe(gulp.dest('./dist/backstage/css')); //目的地
    })
    // 同步執行兩個以上的指令：
gulp.task('all', ['copyjs', 'sass', 'copyimg', 'fileinclude', 'bgimg', 'bgsass', 'bghtml']); //在終端機執行 gulp all即可同時執行兩個task


// Browser應用 => 即時監看fileinclude出來的檔案
// npm install -g browser-sync
// npm install browser-sync --save-dev
// 全域及專案皆要安裝browser才可以使用，不能只安裝全域

gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "./index.html"
        }
    });

    gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass']).on('change', reload);
    gulp.watch(['./*.html', '**/*.html', ], ['fileinclude']).on('change', reload);
    gulp.watch('./js/*.js', ['copyjs']).on('change', reload);

    // backstageWatch
    gulp.watch(['./backstage/html/*.html', './backstage/html/**/*.html'], ['bghtml']).on('change', reload);
    gulp.watch(['./backstage/sass/*.scss', './backstage/sass/**/*.scss'], ['bgsass']).on('change', reload);
});

//壓縮圖檔
// npm install --save-dev gulp-imagemin

gulp.task('img', function() {
    gulp.src('./img/**.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})

//壓縮css

gulp.task('css', function() {
    return gulp.src('css/main.css').pipe(cleanCSS({
            compatibility: 'ie8' //轉譯成相容ie8的CSS
        })).pipe(gulp.dest('dist/css')) //來源
});

//讓CSS追溯原SASS的來源
// npm i gulp-sourcemaps  --save-dev

var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function() {
    return gulp.src('sass/*.scss') //來源
        .pipe(sourcemaps.init()) //加入sourcemap之後檢查中就能看見SCSS檔來源
        .pipe(sass().on('error', sass.logError)) //轉譯sass
        .pipe(cleanCSS({
            compatibility: 'ie8'
        })) // 壓縮css
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css')); //目的地
});

//es6 -> es5 (常用到)
//npm install --save-dev gulp-babel @babel/core @babel/preset-env
//npm install --save-dev gulp-babel@7 babel-core babel-preset-env

gulp.task('babels', () =>
    gulp.src(['./js/*.js', './js/**/*.js'])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'))
);

//清除檔案
//npm install --save-dev gulp-clean

//可以直接把dist刪掉後，再將原檔案的sass html js重新另存新黨，就又會重新打包乾淨的code

gulp.task('clear', function() {
    return gulp.src('dist', { read: false, allowEmpty: true })
        .pipe(clean());
});