'use strict';

let app = require('../../app');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('models/task', function () {
  before(function () {
    return require('../../models').sequelize.sync();
  });

  beforeEach(function () {
    this.Users = require('../../models').Users;
  });


  it('get table data', function (done) {
    chai.request(app)
      .get('/api/table/data/Pages')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
    });
  });

  it('get table columns', function (done) {
    chai.request(app)
      .get('/api/table/columns/Pages1')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

});
