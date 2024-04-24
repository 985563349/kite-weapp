import gulp from 'gulp';
import * as lib from './build.lib.js';
import * as example from './build.example.js';

export const build = gulp.series(lib.build, example.build);

export const watch = gulp.parallel(lib.watch, example.watch);

export const dev = gulp.series(build, watch);
