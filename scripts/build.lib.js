import gulp from 'gulp';
import ts from 'gulp-typescript';
import sourcemaps from 'gulp-sourcemaps';
import less from 'gulp-less';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import del from 'del';

const isProduction = process.env.NODE_ENV === 'production';

const entry = 'src';
const output = 'miniprogram_dist';
const ignore = ['**/test/**', '**/demo/**'];

const globs = {
  ts: `${entry}/**/*.ts`,
  less: `${entry}/**/*.less`,
  static: `${entry}/**/*.{wxml,wxs,json}`,
};

function typescript() {
  const tsProject = ts.createProject('tsconfig.json');

  return gulp
    .src(globs.ts, { ignore })
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(tsProject())
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(gulp.dest(output));
}

function style() {
  return gulp
    .src(globs.less, { ignore })
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(less())
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(gulp.dest(output));
}

function copier() {
  return gulp.src(globs.static, { ignore }).pipe(gulp.dest(output));
}

function clean() {
  return del(`${output}/**`);
}

export const build = gulp.series(clean, gulp.parallel(typescript, style, copier));

export const watch = () => {
  gulp.watch(globs.ts, typescript);
  gulp.watch(globs.less, style);
  gulp.watch(globs.static, copier);
};
