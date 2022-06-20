module.exports = ()=>
  $.gulp.task('watch', ()=>{
    for (const key in $.path.watch){
      const watchPath = $.path.watch[key]
      $.gulp.watch(watchPath, $.gulp.series(key))
    }
  })