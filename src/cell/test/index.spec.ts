import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('cell', () => {
  const KCell = simulate.load(path.resolve(__dirname, '../cell'), 'k-button', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render cell and match snapshot', () => {
    const comp = simulate.render(KCell);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  test('should emit click event', async () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-cell': KCell,
        },
        template: `<k-cell id="comp" bind:click="onClick" />`,
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

    const button = comp.querySelector('#comp >>> .k-cell');

    button?.dispatchEvent('tap');
    await simulate.sleep(10);
    expect(comp.data.value).toEqual(1);
  });
});
