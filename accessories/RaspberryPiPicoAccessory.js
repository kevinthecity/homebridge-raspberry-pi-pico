const fetch = require('node-fetch');

const PLUGIN_NAME = 'RaspberryPiPicoPlugin';
const PLATFORM_NAME = 'RaspberryPiPicoPlatform';

class RaspberryPiPicoPlatform {
  constructor(log, config) {
    this.log = log;
    this.apiUrl = config.apiUrl;
    this.accessoryConfigs = config.accessories;
  }

  accessories(callback) {
    const accessories = this.accessoryConfigs.map((config) => {
      return new RaspberryPiPicoAccessory(this.log, config);
    });

    callback(accessories);
  }
}

class RaspberryPiPicoAccessory {
  constructor(log, config) {
    this.log = log;
    this.name = config.name;
    this.message = config.message;
    this.toggleUrl = `${config.apiUrl}?message=${encodeURIComponent(this.message)}`;
  }

  getServices() {
    const switchService = new Service.Switch(this.name);
    switchService
      .getCharacteristic(Characteristic.On)
      .on('set', this.setSwitchState.bind(this));

    return [switchService];
  }

  /**
   * Toggles the state of the switch.
   *
   * @param {boolean} state - The desired state of the switch.
   * @param {function} callback - Function to call with the new state of the switch.
   */
  async setSwitchState(state, callback) {
    try {
      // Make an API request to the Raspberry Pi Pico to toggle the switch.
      const response = await fetch(this.toggleUrl);
      const json = await response.json();
      const newState = json.state;

      // Call the callback function with the new state of the switch.
      callback(null, newState);
    } catch (error) {
      // Call the callback function with an error if there was a problem setting the switch state.
      callback(error);
    }
  }
}
