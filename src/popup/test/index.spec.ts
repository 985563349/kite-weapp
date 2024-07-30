import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('popup', () => {
  const KPopup = simulate.load(path.resolve(__dirname, '../popup'), 'k-popup', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render popup add match snapshot', async () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-popup': KPopup,
        },
        template: `<k-popup visible />`,
      })
    );
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep(16 * 3); // wait three frames for the animation to complete.
    expect(comp.toJSON()).toMatchSnapshot();
  });
});
