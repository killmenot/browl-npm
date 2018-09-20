'use strict';

const sinon = require('sinon');
const browlUtil = require('browl-util');
const MakeStrategy = require('../');

describe('browl-npm', () => {
  let sandbox;
  let strategy;
  let repo;
  let rootConfig;
  let repoConfig;
  let options;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    repo = 'webapp';
    rootConfig = {
      foo: 'bar'
    };
    repoConfig = {
      baz: 'quux'
    };

    strategy = new MakeStrategy(repo, rootConfig, repoConfig);

    options = {
      cwd: '/'
    };

    sandbox.stub(browlUtil, 'run').resolves();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#create', () => {
    it('should run create scenario', (done) => {
      strategy.create('develop', options).then(() => {
        expect(browlUtil.run.firstCall).be.calledWith('npm', ['install'], options);
        expect(browlUtil.run.secondCall).be.calledWith('npm', ['start'], options);

        done();
      });
    });
  });

  describe('#update', () => {
    it('should run update scenario', (done) => {
      strategy.update('develop', options).then(() => {
        expect(browlUtil.run.firstCall).be.calledWith('npm', ['update'], options);
        expect(browlUtil.run.secondCall).be.calledWith('npm', ['restart'], options);

        done();
      });
    });
  });

  describe('#delete', () => {
    it('should run delete scenario', (done) => {
      strategy.delete('develop', options).then(() => {
        expect(browlUtil.run.firstCall).be.calledWith('npm', ['stop'], options);

        done();
      });
    });

    it('should reject error', (done) => {
      browlUtil.run.rejects(new Error('oops'));

      strategy.delete('develop', options).catch((err) => {
        expect(browlUtil.run.firstCall).be.calledWith('npm', ['stop'], options);
        expect(err.message).equal('oops');

        done();
      });
    });

    it('should not reject error when force enabled', (done) => {
      browlUtil.run.rejects(new Error('oops'));

      options.force = true;

      strategy.delete('develop', options).then(() => {
        expect(browlUtil.run.firstCall).be.calledWith('npm', ['stop'], options);

        done();
      });
    });
  });

  describe('#start', () => {
    it('should run start scenario', (done) => {
      strategy.start('develop', options).then(() => {
        expect(browlUtil.run.firstCall).be.calledWith('npm', ['start'], options);

        done();
      });
    });
  });

  describe('#stop', () => {
    it('should run stop scenario', (done) => {
      strategy.stop('develop', options).then(() => {
        expect(browlUtil.run.firstCall).be.calledWith('npm', ['stop'], options);

        done();
      });
    });
  });

  describe('#restart', () => {
    it('should run restart scenario', (done) => {
      strategy.restart('develop', options).then(() => {
        expect(browlUtil.run.firstCall).be.calledWith('npm', ['restart'], options);

        done();
      });
    });
  });
});
