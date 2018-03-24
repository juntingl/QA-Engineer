var Mocha = require('mocha');

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