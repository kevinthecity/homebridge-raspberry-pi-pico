const RaspberryPiPicoPlatform = require('./accessories/RaspberryPiPicoAccessory');

module.exports = (api) => {
  // This method is called when the plugin is initialized.

  // For dynamic platform plugins, registerPlatform is called once for each instance of the platform
  // when it is accessed by Homebridge.
  api.registerPlatform(RaspberryPiPicoPlatform.PLATFORM_NAME, RaspberryPiPicoPlatform);
};