import path from 'node:path';
import simulate from 'miniprogram-simulate';

describe('dropdown-menu', () => {
  const KDropdownMenu = simulate.load(path.resolve(__dirname, '../dropdown-menu'), 'k-dropdown-menu', {
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('should render dropdown-menu and match snapshot', () => {
    const comp = simulate.render(KDropdownMenu);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
