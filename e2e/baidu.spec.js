const {Builder, By, Key, until} = require('selenium-webdriver');

// 自执行的异步函数
(async function example() {
  // 打开一个浏览器,必须需要浏览器的驱动, 自行搜索下载,放入项目跟目录
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    // 就跟大白话似的来进行模拟, BDD
    await driver.get('http://www.baidu.com/');
    await driver.findElement(By.name('wd')).sendKeys('node', Key.RETURN);
    await driver.wait(until.titleIs('node_百度搜索'), 1000);
  } finally {
    // 进程只有一个,执行完最后必须退出进程
    await driver.quit();
  }
})();