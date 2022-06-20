module.exports = ()=>
  $.gulp.task('css', ()=>
    $.gulp.src($.path.src.css)
      .pipe($.glp.sourcemaps.init())
      .pipe($.sass({outputStyle: 'expanded'}))
      .pipe($.glp.autoprefixer())
      .pipe($.glp.groupCssMediaQueries())
      .pipe($.sass({outputStyle: 'compressed'}))
      .pipe($.glp.rename('main.min.css'))
      .pipe($.glp.sourcemaps.write())
      .pipe($.gulp.dest($.path.build.css)).on('end', $.bs.reload)
  )