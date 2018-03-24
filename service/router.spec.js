const superagent = require('supertest');
const app = require('./app.js');

function request () {
    return superagent(app.listen());
}

describe("测试Node接口: ", function () {
    it('test 接口测试 ', function (done) {
        request()
        .get('/test')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            if (res.data == 'Hello World!') {
                done();
            } else {
                done(err);
            }
        });
    });
});

