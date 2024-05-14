import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('icon', () => {
  const KIcon = simulate.load(path.resolve(__dirname, '../icon'), 'k-icon', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render icon and match snapshot', () => {
    const comp = simulate.render(KIcon);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  test('should render icon styles', () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-icon': KIcon,
        },
        template: `<k-icon id="comp" size="{{ size }}" />`,
        data: {
          size: 20,
        },
      })
    );
    comp.attach(document.createElement('parent-wrapper'));

    const icon = comp.querySelector('#comp >>> .k-icon');
    expect(icon?.dom?.getAttribute('style')?.includes('font-size:20px')).toBeTruthy();
  });

  test('should emit click event', async () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-icon': KIcon,
        },
        template: `<k-icon id="comp" bind:click="onClick" />`,
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

    const icon = comp.querySelector('#comp >>> .k-icon');

    icon?.dispatchEvent('tap');
    await simulate.sleep(10);
    expect(comp.data.value).toEqual(1);
  });
});
