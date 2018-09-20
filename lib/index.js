'use strict';

const browlUtil = require('browl-util');
const debug = require('debug')('browl-npm');

/**
 * Npm strategy allows to deploy an instance is managed via package.json.
 * package.json file must have the following scripts defined:
 *  - start
 *  - stop
 *  - restart
 *  - start
 */
class NpmStrategy {

  /**
   * @param {String} repo
   * @param {Object} rootConfig
   * @param {Object} repoConfig
   */
  constructor(repo, rootConfig, repoConfig) {
    debug('init: %s', repo);

    this.name = 'npm';
    this.repo = repo;
    this.rootConfig = rootConfig;
    this.repoConfig = repoConfig;
  }

  /**
   * Runs operations when an instance created
   *
   * @param  {String} branch
   * @param  {Object} options
   * @return {Promise}
   */
  create(branch, options) {
    debug('create: %s', branch);

    return browlUtil.run('npm', ['install'], options)
      .then(() => {
        debug('npm install completed.');

        return browlUtil.run('npm', ['start'], options);
      });
  }

  /**
   * Runs operations when an instance updated
   *
   * @param  {String} branch
   * @param  {Object} options
   * @return {Promise}
   */
  update(branch, options) {
    debug('update: %s', branch);

    return browlUtil.run('npm', ['update'], options)
      .then(() => {
        debug('npm update completed.');

        return browlUtil.run('npm', ['restart'], options);
      });
  }

  /**
   * Runs operations when an instance deleted
   *
   * @param  {String} branch
   * @param  {Object} options
   * @return {Promise}
   */
  delete(branch, options) {
    debug('delete: %s', branch);

    return browlUtil.run('npm', ['stop'], options)
      .catch(err => {
        if (options.force) {
          return browlUtil.log('[browl-npm] ignore: ' + err);
        }

        return Promise.reject(err);
      });
  }

  /**
   * Runs operations when an instance needs to be started
   *
   * @param  {String} branch
   * @param  {Object} options
   * @return {Promise}
   */
  start(branch, options) {
    debug('start: %s', branch);

    return browlUtil.run('npm', ['start'], options);
  }

  /**
   * Runs operations when an instance needs to be stopped
   *
   * @param  {String} branch
   * @param  {Object} options
   * @return {Promise}
   */
  stop(branch, options) {
    debug('stop: %s', branch);

    return browlUtil.run('npm', ['stop'], options);
  }

  /**
   * Runs operations when an instance needs to be restarted
   *
   * @param  {String} branch
   * @param  {Object} options
   * @return {Promise}
   */
  restart(branch, options) {
    debug('restart: %s', branch);

    return browlUtil.run('npm', ['restart'], options);
  }
}

module.exports = NpmStrategy;
