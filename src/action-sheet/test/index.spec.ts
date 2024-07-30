import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('action-sheet', () => {
  const KActionSheet = simulate.load(path.resolve(__dirname, '../action-sheet'), 'k-action-sheet', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render dialog and match snapshot', async () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-action-sheet': KActionSheet,
        },
        template: `<k-action-sheet visible />`,
      })
    );
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep(16 * 3); // wait three frames for the animation to complete.
    expect(comp.toJSON()).toMatchSnapshot();
  });
});
