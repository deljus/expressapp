import app from '../../app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import models from '../../models';

const should = chai.should();
chai.use(chaiHttp);

describe('Testing rest table api for admin', () => {

  before(() => models.sequelize.sync());

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
