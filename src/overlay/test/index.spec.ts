import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('overlay', () => {
  const KOverlay = simulate.load(path.resolve(__dirname, '../overlay'), 'k-overlay', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render overlay add match snapshot', async () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-overlay': KOverlay,
        },
        template: `<k-overlay visible />`,
      })
    );
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep(16 * 3); // wait three frames for the animation to complete.
    expect(comp.toJSON()).toMatchSnapshot();
  });
});
