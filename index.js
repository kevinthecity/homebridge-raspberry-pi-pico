const RaspberryPiPicoPlatform = require('./accessories/RaspberryPiPicoAccessory');

module.exports = (api) => {
  // This method is called when the plugin is initialized.
  api.registerPlatform(
    RaspberryPiPicoPlatform.PLUGIN_NAME, 
    RaspberryPiPicoPlatform.PLATFORM_NAME, 
    RaspberryPiPicoPlatform);
};