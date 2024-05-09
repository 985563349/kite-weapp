import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('loading', () => {
  const KLoading = simulate.load(path.resolve(__dirname, '../loading'), 'k-loading', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render loading and match snapshot', () => {
    const comp = simulate.render(KLoading);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
