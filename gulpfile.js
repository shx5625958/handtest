var gulp = require('gulp'),
webpack = require('webpack');
var exeSync = require('gulp-exec');

gulp.task('webpack',(done)=>{
    exeSync('npm run dist'),
    done();
})