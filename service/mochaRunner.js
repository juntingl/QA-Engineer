var Mocha = require('mocha');

// mochawesome 配置报表
var mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
      reporteDir: './reports/mochawesome-reporter'
    }
  });

mocha.addFile('./router.spec.js');

mocha.run(function () {
    console.log("done");
    process.exit();  // 执行后一定要 kill 进程
});