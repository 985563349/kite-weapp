import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('toast', () => {
  const kToast = simulate.load(path.resolve(__dirname, '../toast'), 'k-toast', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render toast add match snapshot', async () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-toast': kToast,
        },
        template: `<k-toast visible />`,
      })
    );
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep(16 * 3); // wait three frames for the animation to complete.
    expect(comp.toJSON()).toMatchSnapshot();
  });
});
