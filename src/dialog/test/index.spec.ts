import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('dialog', () => {
  const KDialog = simulate.load(path.resolve(__dirname, '../dialog'), 'k-dialog', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render dialog and match snapshot', async () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-dialog': KDialog,
        },
        template: `<k-dialog open />`,
      })
    );
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep(16 * 3); // wait three frames for the animation to complete.
    expect(comp.toJSON()).toMatchSnapshot();
  });
});
