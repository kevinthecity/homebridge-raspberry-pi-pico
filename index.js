const { HomebridgePlatform } = require('homebridge-platform');
const RaspberryPiPicoPlatform = require('./RaspberryPiPicoPlatform');

class RaspberryPiPicoPlugin extends HomebridgePlatform {
  constructor(log, config, api) {
    super(log, config, api);

    if (!api) {
      log.warn('Homebridge API not available. Plugin not starting.');
      return;
    }

    // Register the RaspberryPiPicoPlatform with Homebridge.
    api.registerPlatform(RaspberryPiPicoPlatform.PLATFORM_NAME, RaspberryPiPicoPlatform);
  }
}

module.exports = (api) => {
  // This method is called when the plugin is initialized.

  // For dynamic platform plugins, registerPlatform is called once for each instance of the platform
  // when it is accessed by Homebridge.
  api.registerPlatform(RaspberryPiPicoPlatform.PLATFORM_NAME, RaspberryPiPicoPlugin);
};