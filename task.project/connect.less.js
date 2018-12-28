//���빤�߰� require('node_modules���Ӧģ��')
var gulp = require('gulp'), //���ذ�װgulp���õ��ĵط�
    less = require('gulp-less'),
    connect = require('gulp-connect');//livereload �Զ�ˢ��


//����һ��testLess�����Զ����������ƣ�
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //��������Ե��ļ�
        .pipe(less()) //��������õ�ģ��
        .pipe(gulp.dest('src/css'))//������src/css������index.css
        .pipe(connect.reload());
});

//����html����
gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(connect.reload());
});

//���忴������
gulp.task('watch', function () {
    gulp.watch('src/*.html', ['html']);
});

//����livereload����
gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});
gulp.task('default', ['testLess', 'watch', 'connect']);

gulp.run("default");
