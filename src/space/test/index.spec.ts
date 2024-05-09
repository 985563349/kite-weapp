import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('space', () => {
  const KSpace = simulate.load(path.resolve(__dirname, '../space'), 'k-space', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render space and match snapshot', () => {
    const comp = simulate.render(KSpace);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
