import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('popup', () => {
  const KPopup = simulate.load(path.resolve(__dirname, '../popup'), 'k-popup', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render popup add match snapshot', () => {
    const comp = simulate.render(KPopup);
    comp.attach(document.createElement('parent-wrapper'));
    comp.setData({ mounted: true });

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
