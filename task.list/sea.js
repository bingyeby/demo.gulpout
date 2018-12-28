/*
 * sea js �ϲ�����  F:\HTML2\�½��ļ���\blog\seajs
 * */
var fs = require("fs");
var gulp = require("gulp");
var replace = require('gulp-replace-task');//���ļ��е��ַ��������滻   https://www.npmjs.com/package/gulp-replace-task
var transport = require("gulp-seajs-transport");//��seajs��ģ�����Ԥ�������ģ���ʶ
var concat = require("gulp-seajs-concat");//seajsģ��ϲ�
var uglify = require('gulp-uglify');//jsѹ������
var merge = require('merge-stream');//�ϲ������

var src = 'seajs';
var dist = 'dist';
//seajs�ϲ�ģʽ
gulp.task("seajs", function () {
    return merge(
        gulp.src(src + '/js/!(lib)/**/*.js', {base: src + '/js'})
            .pipe(transport())
            .pipe(concat({
                base: src + '/js'
            }))

            .pipe(gulp.dest(dist + '/js')),

        gulp.src([src + '/js/lib/**/*.js', src + '/js/common.js'], {base: src + '/js'})
            .pipe(uglify({
                //mangle: true,//���ͣ�Boolean Ĭ�ϣ�true �Ƿ��޸ı�����
                mangle: {reserved: ['require', 'exports', 'module', '$']}//�ų������ؼ���
            }))
            .pipe(gulp.dest(dist + '/js'))
    );
});

//gulp.run("seajs");

