import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('button', () => {
  const KButton = simulate.load(path.resolve(__dirname, '../button'), 'k-button', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render button and match snapshot', () => {
    const comp = simulate.render(KButton);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  test('should emit click event', async () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-button': KButton,
        },
        template: `<k-button id="comp" bind:click="onClick" />`,
        data: {
          value: 0,
        },
        methods: {
          onClick() {
            this.setData({ value: this.data.value + 1 });
          },
        },
      })
    );
    comp.attach(document.createElement('parent-wrapper'));

    const button = comp.querySelector('#comp >>> .k-button');

    button?.dispatchEvent('tap');
    await simulate.sleep(10);
    expect(comp.data.value).toEqual(1);
  });

  test('should not emit click event when disabled', async () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-button': KButton,
        },
        template: `<k-button id="comp" disabled bind:click="onClick" />`,
        data: {
          value: 0,
        },
        methods: {
          onClick() {
            this.setData({ value: this.data.value + 1 });
          },
        },
      })
    );
    comp.attach(document.createElement('parent-wrapper'));

    const button = comp.querySelector('#comp >>> .k-button');

    button?.dispatchEvent('tap');
    await simulate.sleep(10);
    expect(comp.data.value).toEqual(0);
  });

  test('should emit open type event', async () => {
    const handler = jest.fn();

    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-button': KButton,
        },
        template: `
          <k-button
            id="comp"
            bind:getuserinfo="handler"
            bind:contact="handler"
            bind:getphonenumber="handler"
            bind:error="handler"
            bind:opensetting="handler"
            bind:launchapp="handler"
            bind:chooseavatar="handler"
            bind:agreeprivacyauthorization="handler"
          />
        `,
        methods: {
          handler,
        },
      })
    );
    comp.attach(document.createElement('parent-wrapper'));

    const button = comp.querySelector('#comp >>> .k-button');

    button?.dispatchEvent('getuserinfo');
    await simulate.sleep(10);
    expect(handler).toHaveBeenCalledTimes(2);

    button?.dispatchEvent('contact');
    await simulate.sleep(10);
    expect(handler).toHaveBeenCalledTimes(4);

    button?.dispatchEvent('getphonenumber');
    await simulate.sleep(10);
    expect(handler).toHaveBeenCalledTimes(6);

    button?.dispatchEvent('error');
    await simulate.sleep(10);
    expect(handler).toHaveBeenCalledTimes(8);

    button?.dispatchEvent('opensetting');
    await simulate.sleep(10);
    expect(handler).toHaveBeenCalledTimes(10);

    button?.dispatchEvent('launchapp');
    await simulate.sleep(10);
    expect(handler).toHaveBeenCalledTimes(12);

    button?.dispatchEvent('chooseavatar');
    await simulate.sleep(10);
    expect(handler).toHaveBeenCalledTimes(14);

    button?.dispatchEvent('agreeprivacyauthorization');
    await simulate.sleep(10);
    expect(handler).toHaveBeenCalledTimes(16);
  });
});
