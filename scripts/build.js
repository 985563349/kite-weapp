const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const del = require('del');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

const entry = argv.entry || 'src';
const output = argv.output || 'miniprogram_dist';

const globs = {
  ts: `${entry}/**/*.ts`,
  scss: `${entry}/**/*.scss`,
  static: `${entry}/**/*.{wxml,wxs,json}`,
};

function typescript() {
  const tsProject = ts.createProject('tsconfig.json');

  return gulp
    .src(globs.ts)
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(output));
}

function scss() {
  return gulp
    .src(globs.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(rename({ extname: '.wxss' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(output));
}

function copier() {
  return gulp.src(globs.static).pipe(gulp.dest(output));
}

function clean() {
  return del(`${output}/**`);
}

function watch() {
  gulp.watch(globs.ts, typescript);
  gulp.watch(globs.scss, scss);
  gulp.watch(globs.static, copier);
}

const compilerTasks = [typescript, scss, copier];

if (argv.hot) {
  compilerTasks.push(watch);
}

exports.default = gulp.series(clean, gulp.parallel(...compilerTasks));
