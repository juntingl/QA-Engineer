// describe 块 测试套件(test suite), it 块称测试用例 (test case)
describe("测试基本的函数API", function () {
    it("+1函数的应用", function () {
        expect(window.test(1)).toBe(2);
    })

    it('+1函数的应用分支测试', function () {
        expect(window.test(2)).toBe(3);
    })
});