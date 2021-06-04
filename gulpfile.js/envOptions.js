const srcPath = './source';
const distPath = './public';
const nodePath = './node_modules';
// const BSPath = './bootstrap';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  conyFile: {
    src: [
      `${srcPath}/**/*`,
      `${srcPath}/assets/**/*`,
      `!${srcPath}/assets/js/**/*.js`,
      `!${srcPath}/assets/scss/**/*.scss`,
      `!${srcPath}/assets/scss/**/*.sass`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: distPath,
  },
  html: {
    src: [
      `${srcPath}/**/*.html`,
    ],
    ejsSrc: [
      `${srcPath}/**/*.ejs`,
    ],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/assets/scss/**/*.scss`,
      `${srcPath}/assets/scss/**/*.sass`,
    ],
    path: `${distPath}/assets/css`,
  },
  javascript: {
    src: [
      `${srcPath}/assets/js/**/*.js`
    ],
    concat: 'all.js',
    path: `${distPath}/assets/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.min.js`,
      `${srcPath}/assets/bootstrap/dist/js/bootstrap.bundle.min.js`,
      // `${srcPath}/assets/bootstrap/dist/js/bootstrap.min.js`,
    ],
    concat: 'vendors.js',
    path: `${distPath}/assets/js`,
  },
  img: {
    src: [
      `${srcPath}/assets/images/**/*`,
    ],
  },
  fonts: {
    src: [
      `${srcPath}/assets/fonts/**/*`,
    ],
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
