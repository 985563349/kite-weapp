import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('flex', () => {
  const KFlex = simulate.load(path.resolve(__dirname, '../flex'), 'k-flex', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render flex and match snapshot', () => {
    const comp = simulate.render(KFlex);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
