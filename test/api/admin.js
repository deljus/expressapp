import app from '../../app';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let models = require('../../models');

chai.use(chaiHttp);

describe('Testing rest table api for admin', () => {

  beforeEach(() => {
    return models['Pages'].destroy({truncate: true})
  });

  it('get table data', (done) => {
    chai.request(app)
      .get('/api/table/data/Pages')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
    });
  });

  it('get table columns', done => {
    chai.request(app)
      .get('/api/table/columns/Pages1')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

});
