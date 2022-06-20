module.exports = ()=>
    $.gulp.task('html', ()=>
        $.gulp.src($.path.src.html)
           .pipe($.glp.pug())
           .pipe($.glp.include())    
           .pipe($.gulp.dest($.path.build.html)).on('end', $.bs.reload)
    )
