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

  function normalizeRupiah(value) {
    if (!value) return 0;

    const text = value.toString().toLowerCase().trim();

    // handle "rb"
    if (text.includes('rb')) {
        const number = Number(text.replace(/[^0-9]/g, ""));
        return number * 1000;
    }

    return Number(text.replace(/[^0-9]/g, ""));
  }
  
module.exports = { 
  tapByCoordinates,
  normalizeRupiah,
};