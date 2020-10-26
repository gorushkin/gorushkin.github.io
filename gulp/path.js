const buildFolder = 'build';

const path = {
  build: {
    css: `${buildFolder}/css`,
    scss: `${buildFolder}/scss`,
    img: `${buildFolder}/img`,
    js: `${buildFolder}/js`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    css: 'source/sass/style.scss',
    img: 'source/img/**',
    imgOpt: 'source/img',
    fonts: 'source/fonts/**',
    scss: 'source/sass/**/*.*',
    imgsrc: 'source/img - src/**/*.{png,jpg,svg}',
    svgsrc: 'source/img/**/*.svg',
    pp: 'source/pp/**',
    js: 'source/js/*.js',
    jsModules: 'source/js/modules/*.js',
    jsVendors: 'source/js/vendor/*.js',
    html: 'source/*.html',
  },
  watch: {
    html: 'source/*.html',
    htmlTemplates: 'source/templates/*.html',
    css: 'source/sass/**/*.{scss,sass}',
    js: 'source/js/**/*.*',
    img: 'source/img/**',
    fonts: 'source/fonts/**',
  },
  convert: {
    fontsIn: 'source/fonts — src/**',
    fontsInOtf: 'source/fonts — src/*.otf',
    fontsOutOtf: 'source/fonts — src/',
    fontsOut: 'source/fonts/',
    html: 'source/templates/index.html',
  },
  zipFolder: 'C:/Users/Alex/Documents/artyom/webdev/залить',
};

export default path;
