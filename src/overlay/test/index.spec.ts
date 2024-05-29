import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('overlay', () => {
  const KOverlay = simulate.load(path.resolve(__dirname, '../overlay'), 'k-overlay', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render overlay add match snapshot', () => {
    const comp = simulate.render(KOverlay);
    comp.attach(document.createElement('parent-wrapper'));
    comp.setData({ mounted: true });

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
