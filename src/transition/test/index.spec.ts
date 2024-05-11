import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('transition', () => {
  const KTransition = simulate.load(path.resolve(__dirname, '../transition'), 'k-transition', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render transition add match snapshot', () => {
    const comp = simulate.render(KTransition);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
