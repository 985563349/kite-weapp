import gulp from 'gulp';
import ts from 'gulp-typescript';
import sourcemaps from 'gulp-sourcemaps';
import less from 'gulp-less';
import rename from 'gulp-rename';
import del from 'del';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const entry = argv.entry || 'src';
const output = argv.output || 'miniprogram_dist';

const globs = {
  ts: `${entry}/**/*.ts`,
  less: `${entry}/**/*.less`,
  static: `${entry}/**/*.{wxml,wxs,json}`,
};

function typescript() {
  const tsProject = ts.createProject('tsconfig.json');

  return tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(output));
}

function style() {
  return gulp
    .src(globs.less)
    .pipe(sourcemaps.init())
    .pipe(less())
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
  gulp.watch(globs.less, style);
  gulp.watch(globs.static, copier);
}

const compilerTasks = [typescript, style, copier];

if (argv.hot) {
  compilerTasks.push(watch);
}

export default gulp.series(clean, gulp.parallel(...compilerTasks));
