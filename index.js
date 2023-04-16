const {
    RaspberryPiPicoPlatform, 
    PLUGIN_NAME, 
    PLATFORM_NAME
} = require('./accessories/RaspberryPiPicoAccessory');

module.exports = (api) => {
  // This method is called when the plugin is initialized.
  api.registerPlatform(PLUGIN_NAME, PLATFORM_NAME, RaspberryPiPicoPlatform);
};