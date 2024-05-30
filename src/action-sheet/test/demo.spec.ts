import path from 'node:path';
import simulate from 'miniprogram-simulate';

test('should render demo and match snapshot', async () => {
  const comp = simulate.render(
    simulate.load(path.resolve(__dirname, '../demo/action-sheet'), {
      rootPath: path.resolve(__dirname, '../../'),
    })
  );
  comp.attach(document.createElement('parent-wrapper'));

  expect(comp.toJSON()).toMatchSnapshot();
});
