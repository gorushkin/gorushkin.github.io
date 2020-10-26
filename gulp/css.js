/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import pathNpm from 'path';
import server from 'browser-sync';
import path from './path.js';

const root = pathNpm.resolve();

export default () => gulp
  .src(path.src.css)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(
    sass({
      outputStyle: 'expanded',
      includePaths: [`${root}/node_modules`],
    }),
  )
  .pipe(postcss([autoprefixer()]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(path.build.css))
  .pipe(server.stream());
