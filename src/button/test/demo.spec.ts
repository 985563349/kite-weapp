import path from 'path';
import simulate from 'miniprogram-simulate';

describe('Button', () => {
  const button = simulate.load(
    path.resolve(__dirname, '../button'),
    'k-button'
  );

  test('basic', async () => {
    const comp = simulate.render(
      simulate.load({
        usingComponents: {
          'k-button': button,
        },
        template: `<k-button />`,
      })
    );
    comp.attach(document.createElement('parent-wrapper'));
    expect(comp.toJSON()).toMatchSnapshot();
  });
});
