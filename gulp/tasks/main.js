module.exports = ()=>
  $.gulp.task('js', ()=>
     $.gulp.src($.path.src.js)
       .pipe($.glp.sourcemaps.init())
       .pipe($.glp.include())
       .pipe($.glp.babel({
           presets:['@babel/preset-env']
       }))
       .pipe($.glp.rename('common.min.css'))
       .pipe($.glp.sourcemaps.write())
       .pipe($.gulp.dest($.path.build.js)).on('end', $.bs.reload)
  )  

  