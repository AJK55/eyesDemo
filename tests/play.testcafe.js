// next line is optional, just for IDEs autocomplete :
/// <reference types="@applitools/eyes-testcafe" />

import Eyes from '@applitools/eyes-testcafe';
const eyes = new Eyes();

fixture `My Testcafe Hello world`.page `https://demo.applitools.com`
    .afterEach(async () => eyes.close())
    .after(async () => await eyes.waitForResults());

test('Tetscafe Helloworld', async t => {
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'My TestCafe App',
        testName: 'Testcafe Helloworld',
        browser: [
            {
                width: 1024,
                height: 768,
                name: 'chrome'
            },
            {
                width: 800,
                height: 600,
                name: 'firefox'
            },
            {
                deviceName: 'iPhone X',
                screenOrientation: 'landscape'
            },
            {
                deviceName: 'iPhone X',
                screenOrientation: 'portrait'
            },
            {
                width: 800,
                height: 600,
                name: 'chrome'
            }
      ],
    });
    await eyes.checkWindow('first page');
});



fixture `My Testcafe Hello world 2`.page `https://www.saucedemo.com/inventory.html`
    .afterEach(async () => eyes.close())
    .after(async () => await eyes.waitForResults());

test('Tetscafe Helloworld', async t => {
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'My TestCafe App',
        testName: 'Testcafe Helloworld 2',
        browser: [
            {
                width: 1024,
                height: 768,
                name: 'chrome'
            },
            {
                width: 800,
                height: 600,
                name: 'firefox'
            },
            {
                deviceName: 'iPhone X',
                screenOrientation: 'landscape'
            },
            {
                deviceName: 'iPhone X',
                screenOrientation: 'portrait'
            },
            {
                width: 800,
                height: 600,
                name: 'chrome'
            }
      ],
    });
    await eyes.checkWindow('first page');
});
