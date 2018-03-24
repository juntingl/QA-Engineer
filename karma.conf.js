// Karma configuration
// Generated on Fri Mar 23 2018 14:08:07 GMT+0800 (CST)

module.exports = function(config) {
  config.set({
    // 
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use 单元测试框架
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // 在浏览器中载入的文件/模式列表。测试哪些文件
    files: [
      './unit/**/*.js',
      './unit/**/*.spec.js'
    ],


    // list of files / patterns to exclude
    // 排除哪些不要的文件
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // 在将他们提供给浏览器之前先进行预先处理; preprocessors 预处理器
    // 指定对应的文件,进行预处理
    preprocessors: {
      './unit/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 测试结果报告, 使用 karma 运行的时候可以看到这些报告
    reporters: ['progress', 'coverage'],

    // optionally, configure the reporter 
    // 生成报告,指定接收地,报告类型
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // 黑窗下独立运行环境 是否开启
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
