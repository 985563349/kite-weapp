import { createRequire } from 'node:module';
import gulp from 'gulp';
import rename from 'gulp-rename';
import del from 'del';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const entry = 'src/**/demo/**/*.*';
const output = 'example/miniprogram/pages';
const source = 'miniprogram_dist/';
const target = `example/miniprogram/miniprogram_npm/${pkg.name}`;

function clean() {
  return del([`${output}/**`, `!${output}/index`]);
}

function copier() {
  return gulp
    .src(entry)
    .pipe(
      rename((path) => {
        const { dirname, extname } = path;
        const [, realDir] = dirname.split('demo');
        const reg = /^([\w-]+)/.exec(dirname);
        const component = reg ? reg[1] : '';

        path.dirname = component + (extname ? realDir : '');
      })
    )
    .pipe(gulp.dest(output));
}

function link() {
  return gulp.src(source).pipe(gulp.symlink(target));
}

function unlink() {
  return del(target);
}

export const build = gulp.series(clean, unlink, copier, link);

export const watch = () => {
  gulp.watch(entry, copier);
};
