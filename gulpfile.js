/* eslint-disable import/extensions */
import gulp from 'gulp';
import del from 'del';
import babel from 'gulp-babel';
import server from 'browser-sync';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import css from './gulp/css.js';
import path from './gulp/path.js';

const buildFolder = 'build';

const copy = () => gulp
  .src([path.src.img, path.src.fonts, path.src.pp, path.src.scss], {
    base: 'source',
  })
  .pipe(gulp.dest(buildFolder));

export const clean = () => del('build');

const copyFonts = () => gulp.src(path.src.fonts).pipe(gulp.dest(path.build.fonts));

const js = () => {
  gulp
    .src(path.src.jsVendors)
    .pipe(babel())
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(path.build.js));

  return gulp
    .src(path.src.jsModules)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.build.js));
};

const html = () => gulp
  .src(path.src.html)
  .pipe(gulp.dest(buildFolder));

const build = gulp.series(clean, gulp.parallel(js, css, copy, html));

const serverInit = () => {
  server.init({
    server: {
      baseDir: 'build/',
      online: true,
      tunnel: true,
    },
  });
};

const refresh = (done) => {
  server.reload();
  done();
};

export const watch = () => {
  gulp.watch(path.watch.html, gulp.series(html, refresh));
  gulp.watch(path.watch.htmlTemplates, gulp.series(html, refresh));
  gulp.watch(path.watch.css, css);
  gulp.watch(path.watch.img, gulp.series(copy, refresh));
  gulp.watch(path.watch.js, gulp.series(js, refresh));
  gulp.watch(path.watch.fonts, gulp.series(copyFonts, refresh));
  serverInit();
};

export const start = gulp.series(build, watch);

gulp.task('css', () => css());
gulp.task('js', js);
gulp.task('copyFonts', copyFonts);
gulp.task('copy', () => copy());
gulp.task('watch', watch);
gulp.task('build', build);
gulp.task('html', html);
