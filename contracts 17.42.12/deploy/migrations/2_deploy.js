const deploy = artifacts.require('CourseMarketplace')

module.exports = function (deployer) {
  deployer.deploy(deploy)
}
