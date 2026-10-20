async function tapByCoordinates(driver, x, y) {
    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        {
          type: 'pointerMove',
          duration: 0,
          x,
          y
        },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 100 },
        { type: 'pointerUp', button: 0 }
      ]
    }]);
  
    await driver.releaseActions();
  }
  
module.exports = { tapByCoordinates };