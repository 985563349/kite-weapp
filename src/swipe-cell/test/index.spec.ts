import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('swipe-cell', () => {
  const KSwipeCell = simulate.load(path.resolve(__dirname, '../swipe-cell'), 'k-swipe-cell', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render swipe-cell and match snapshot', () => {
    const comp = simulate.render(KSwipeCell);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
