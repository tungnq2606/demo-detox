const {device, element, by} = require('detox');

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('type hello world to input', async () => {
    element(by.id('input')).typeText('hello world');
  });
});
