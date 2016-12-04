module.exports = function(grunt){
  //프로젝트 환경 설정
  grunt.initConfig({
    jshint:{
      all: ['addressBook.js'],
      options: {
        reporterOutput: ""
      }
    },
    concat: {
      dist: {
        src: ['addressBook.js', 'script1.js', 'script2.js'],
        dest: 'merged.js'
      }
    },
    uglify: {
      dist: {
        src: 'merged.js',
        dest: 'build/merged.min.js'
      }
    },
    shell: {
      multiple: {
        command: [
          'rm -rf merged.js',
          'mkdir deploy',
          'mv build/merged.min.js deploy/merged.min.js'
        ].join('&&')
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  //기본 태스크
  grunt.registerTask('default', ['jshint','concat','uglify','shell']);
};
