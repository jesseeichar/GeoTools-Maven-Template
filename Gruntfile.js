module.exports = function(grunt) {
//    grunt.loadNpmTasks('grunt-closure-tools');

//    grunt.initConfig({
//      closureCompiler:  {
//
//        options: {
//          compilerFile: '/C/GitHub/GeoTools-Maven-Template/node_modules/closure-compiler/lib/vendor/compiler.jar',
//          checkModified: false,
//          compilerOpts: {
//               compilation_level: 'ADVANCED_OPTIMIZATIONS',
//               externs: ['src/main/javascript/square.js', '/source/**/*.js'],
//               define: ["'goog.DEBUG=true'"],
//               warning_level: 'verbose',
//               jscomp_off: ['checkTypes', 'fileoverviewTags'],
//               summary_detail_level: 3,
//               output_wrapper: '"(function(){%output%}).call(this);"'
//          },
//        }
//
//      },
//      app: {
//          src: 'src/main/javascript/square.js',
//
//          dest: 'mini.js'
//      }

//    });
//    grunt.registerTask('default', ['closureCompiler']);


    grunt.loadNpmTasks('grunt-closure-compiler');
    grunt.initConfig({
      'closure-compiler': {
        frontend: {
          closurePath: 'C:\\GitHub\\GeoTools-Maven-Template\\node_modules\\closure-compiler\\lib\\vendor\\compiler.jar',
          js: 'src/main/javascript/square.js',
          jsOutputFile: './frontend.min.js',
          maxBuffer: 500,
          options: {
            compilation_level: 'ADVANCED_OPTIMIZATIONS',
            language_in: 'ECMASCRIPT5_STRICT'
          }
        }
      }
    });
     grunt.registerTask('default', ['closure-compiler']);
};